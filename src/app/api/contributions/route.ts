import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  console.log("API called, GITHUB_TOKEN exists:", !!process.env.GITHUB_TOKEN);
  
  const query = `
    query {
      user(login: "Olowodarey") {
        pullRequests(first: 10, states: MERGED, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            title
            url
            repository {
              nameWithOwner
            }
            mergedAt
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    console.log("GitHub API response status:", response.status);
    console.log("GitHub API response:", JSON.stringify(json, null, 2));

    if (json.errors) {
      console.error("GitHub API errors:", json.errors);
      return NextResponse.json({ error: "Failed to fetch contributions", details: json.errors }, { status: 500 });
    }

    if (!json.data || !json.data.user || !json.data.user.pullRequests) {
      console.error("Unexpected API response structure:", json);
      return NextResponse.json({ error: "Unexpected API response structure" }, { status: 500 });
    }

    return NextResponse.json(json.data.user.pullRequests.nodes);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
