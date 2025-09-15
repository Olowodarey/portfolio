"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
type OnlyDustContribution = {
  title: string;
  url: string;
  project: string;
  repository: string;
  description?: string;
  date: string;
};

// Manually curated OnlyDust contributions
const onlyDustContributions: OnlyDustContribution[] = [
  {
    title: "Smart Contract Implementation",
    url: "https://github.com/alexohre/crowdchain_contracts/pull/27",
    project: "CrowdChain",
    repository: "alexohre/crowdchain_contracts",
    description:
      "Implemented core smart contract functionality for decentralized crowdfunding platform",
    date: "2025",
  },
  {
    title: "Contract Development",
    url: "https://github.com/MetroLogic/chainremit_contract/pull/37",
    project: "ChainRemit",
    repository: "MetroLogic/chainremit_contract",
    description:
      "Developed smart contracts for cross-border remittance solution",
    date: "2025",
  },
  {
    title: "LyricsFlip Feature Implementation",
    url: "https://github.com/songifi/lyricsflip/pull/411",
    project: "LyricsFlip",
    repository: "songifi/lyricsflip",
    description: "Added new features to the song lyrics sharing platform",
    date: "2025",
  },
  {
    title: "InheritX DApp Development",
    url: "https://github.com/skill-mind/InheritX-Dapp/pull/11",
    project: "InheritX",
    repository: "skill-mind/InheritX-Dapp",
    description: "Contributed to the decentralized inheritance solution",
    date: "2025",
  },
  {
    title: "Gasless Gossip Contract Updates",
    url: "https://github.com/songifi/gg_contract/pull/14",
    project: "Gasless Gossip",
    repository: "songifi/gg_contract",
    description: "Updated smart contracts for gasless transactions",
    date: "2025",
  },
  {
    title: "Chain Library Contract Improvements",
    url: "https://github.com/Chain-Library/chainlib-contract/pull/30",
    project: "ChainLib",
    repository: "Chain-Library/chainlib-contract",
    description: "Enhanced contract functionality for the chain library",
    date: "2025",
  },
  {
    title: "PrediFi Protocol Development",
    url: "https://github.com/Web3Novalabs/predifi/pull/138",
    project: "PrediFi",
    repository: "Web3Novalabs/predifi",
    description: "Contributed to the prediction market protocol",
    date: "2025",
  },
  {
    title: "TimelyCapsule Web Updates",
    url: "https://github.com/enbliq/timelycapsule-web/pull/169",
    project: "TimelyCapsule",
    repository: "enbliq/timelycapsule-web",
    description: "Improved web interface for the time capsule dApp",
    date: "2025",
  },
  {
    title: "Admin Dashboard Development",
    url: "https://github.com/alexohre/crowdchain_admin/pull/8",
    project: "CrowdChain Admin",
    repository: "alexohre/crowdchain_admin",
    description:
      "Developed admin dashboard for managing the CrowdChain platform",
    date: "2025",
  },
];

export default function Contributions() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-12 max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-900/50 backdrop-blur-sm">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
           
            <h2 className="text-3xl font-bold text-white">
              OnlyDust Ecosystem
            </h2>
          </div>
          <p className="text-gray-300 text-base leading-relaxed">
            OnlyDust is a platform that connects open-source developers with
            projects in  Starknet ecosystem. As a contributor, I've had the
            opportunity to work on various decentralized applications, helping to build the future of web3 through
            open-source collaboration and innovation. below are some of my contributions
          </p>
          <a
            href="https://www.onlydust.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
          >
            <span>Explore OnlyDust</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

    

      {onlyDustContributions.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No OnlyDust contributions added yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {onlyDustContributions.map((contribution, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-5 hover:border-blue-500/30 hover:bg-gray-800/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {contribution.project}
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {contribution.date}
                  </span>
                </div>

                <Link
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mb-3 text-blue-400 hover:text-blue-300 font-medium leading-snug transition-colors"
                >
                  {contribution.title}
                </Link>

                {contribution.description && (
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {contribution.description}
                  </p>
                )}

                <div className="flex flex-wrap items-center justify-between gap-2 mt-auto pt-3 border-t border-gray-800">
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2.5 py-1 rounded-full truncate max-w-[180px] sm:max-w-full">
                    {contribution.repository}
                  </span>
                  <Link
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    View PR
                    <ExternalLink className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
