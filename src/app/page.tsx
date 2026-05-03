"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { GreetingHeader } from "@/components/GreetingHeader";
import { OnboardingLayer } from "@/components/OnboardingLayer";
import { AIAssistant } from "@/components/AIAssistant";
import { Table, Globe, Layout, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const competitors = [
  { name: "Simplify Money (Kuber.AI)", region: "India", feature: "AI Financial Companion", diff: "Hyper-personalized Indian advice" },
  { name: "Oolka", region: "India", feature: "Credit Health AI", diff: "Debt management focus" },
  { name: "InvestorAi", region: "India", feature: "Predictive Insights", diff: "Quant-level stock data" },
  { name: "Copilot Money", region: "Global", feature: "Smart Categorization", diff: "Premium iOS/Mac Experience" },
];

export default function Home() {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-500/30">
      <Sidebar />
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section: Greeting */}
          <GreetingHeader isNewUser={isNewUser} userName="Archit" />

          {/* Section: Onboarding & AI Assistant Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <Layout className="w-5 h-5 text-indigo-600" />
                  Personalisation Layer
                </h2>
                <button 
                  onClick={() => setIsNewUser(!isNewUser)}
                  className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider hover:bg-indigo-100 transition-colors"
                >
                  View as {isNewUser ? "Returning User" : "New User"}
                </button>
              </div>
              <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] p-4 shadow-sm">
                <OnboardingLayer />
              </div>
            </div>

            {/* Quick Stats / Info Card */}
            <div className="space-y-6">
               <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-indigo-600" />
                Market Research
              </h2>
              <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Globe className="w-32 h-32" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Competitor Analysis</h3>
                <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                  We've analyzed 3 top Indian startups and 1 global leader to ensure UseMoney stays ahead of the curve.
                </p>
                <div className="space-y-4">
                  {competitors.slice(0, 3).map((c) => (
                    <div key={c.name} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
                      <span className="font-medium">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Competitor Table */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Table className="w-5 h-5 text-indigo-600" />
              Detailed Competitor Matrix
            </h2>
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-900">
                    <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Product</th>
                    <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Region</th>
                    <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Key AI Feature</th>
                    <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">Differentiator</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
                  {competitors.map((c) => (
                    <tr key={c.name} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white">{c.name}</td>
                      <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className={cn(
                          "px-2 py-1 rounded-md text-[10px] font-bold uppercase",
                          c.region === "India" ? "bg-orange-100 text-orange-600 dark:bg-orange-500/10" : "bg-blue-100 text-blue-600 dark:bg-blue-500/10"
                        )}>
                          {c.region}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">{c.feature}</td>
                      <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400 italic">"{c.diff}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Responsive AI Assistant */}
      <AIAssistant />
    </div>
  );
}
