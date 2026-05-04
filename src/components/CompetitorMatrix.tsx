"use client";

import React from "react";
import { Table, Globe, Zap, Shield, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const competitors = [
  {
    name: "Simplify Money (Kuber.AI)",
    region: "India",
    target: "Indian Gen-Z & Millennials",
    aiCapability: "Automated budgeting & tax-saving insights",
    differentiator: "Hyper-personalized Indian tax & savings context",
  },
  {
    name: "Oolka",
    region: "India",
    target: "Debt-heavy individuals",
    aiCapability: "Credit health analysis agents",
    differentiator: "Actionable tips to improve credit profiles",
  },
  {
    name: "InvestorAi",
    region: "India",
    target: "Retail stock investors",
    aiCapability: "Predictive stock market ML models",
    differentiator: "Quant-level insights for retail users",
  },
  {
    name: "Copilot Money",
    region: "Global",
    target: "High-net-worth tech users",
    aiCapability: "Smart transaction categorization",
    differentiator: "Ultra-premium Apple-ecosystem UX",
  },
];

export function CompetitorMatrix() {
  return (
    <div className="space-y-8 py-10 border-t border-white/5">
      <div className="flex flex-col gap-2">
        <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
          <Globe className="w-4 h-4 text-emerald-400" />
          Market Intelligence
        </h2>
        <h3 className="text-3xl font-bold text-white tracking-tight">Competitor Comparison</h3>
      </div>

      <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 border-b border-white/5">
              <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Product Name</th>
              <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Market</th>
              <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">AI Capability</th>
              <th className="px-8 py-6 text-xs font-bold text-zinc-400 uppercase tracking-widest">Differentiator</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {competitors.map((c) => (
              <tr key={c.name} className="hover:bg-white/5 transition-all group">
                <td className="px-8 py-6">
                  <p className="font-bold text-white group-hover:text-emerald-400 transition-colors">{c.name}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{c.target}</p>
                </td>
                <td className="px-8 py-6">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    c.region === "India" ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  )}>
                    {c.region}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-zinc-400 leading-relaxed">
                  {c.aiCapability}
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium italic">
                    <Zap className="w-3.5 h-3.5" />
                    "{c.differentiator}"
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h4 className="font-bold text-white mb-2">Why UseMoney Wins?</h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
               Unlike competitors focused solely on budgeting or stocks, UseMoney provides an integrated, cross-asset AI companion that handles both daily liquidity and long-term strategy.
            </p>
         </div>
         <div className="p-8 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
               <Shield className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
               <p className="font-bold text-white">Data Privacy</p>
               <p className="text-xs text-zinc-500">All competitor data is mapped for internal benchmarking only.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
