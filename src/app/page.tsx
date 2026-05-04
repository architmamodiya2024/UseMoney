"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { GreetingHeader } from "@/components/GreetingHeader";
import { OnboardingLayer } from "@/components/OnboardingLayer";
import { AIAssistant } from "@/components/AIAssistant";
import { CompetitorMatrix } from "@/components/CompetitorMatrix";
import { Table, Globe, Layout, Search, TrendingUp, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const marketData = [
  { ticker: "RELIANCE", price: "₹2,945.00", change: "+1.2%", status: "Bullish" },
  { ticker: "TCS", price: "₹4,120.50", change: "-0.8%", status: "Neutral" },
  { ticker: "INFY", price: "₹1,620.00", change: "+2.4%", status: "Bullish" },
  { ticker: "HDFCBANK", price: "₹1,530.00", change: "+0.1%", status: "Wait" },
];

export default function Home() {
  const [isNewUser, setIsNewUser] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#060b18] text-white selection:bg-emerald-500/30">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header Section */}
        <GreetingHeader isNewUser={isNewUser} userName="Archit" />

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-6 pt-0 space-y-12 scroll-smooth">
          <div className="max-w-[1400px] mx-auto space-y-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Personalized Onboarding Layer (Main Focus) */}
              <div className="lg:col-span-8">
                <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl h-full flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
                    <Sparkles className="w-64 h-64 text-emerald-400" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                        <Layout className="w-4 h-4 text-emerald-400" />
                        Persona Configuration
                      </h2>
                      <button 
                        onClick={() => setIsNewUser(!isNewUser)}
                        className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest hover:bg-emerald-500/20 transition-all"
                      >
                        {isNewUser ? "Switch to Returning" : "Switch to New"}
                      </button>
                    </div>
                    <OnboardingLayer />
                  </div>
                </div>
              </div>

              {/* Right Column: Market & Status */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Market Watch Card */}
                <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      Market Watch
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {marketData.map((m) => (
                      <div key={m.ticker} className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                        <div>
                          <p className="text-xs font-bold text-white">{m.ticker}</p>
                          <p className="text-[10px] text-zinc-500">{m.status}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-white">{m.price}</p>
                          <p className={cn(
                            "text-[10px] font-bold",
                            m.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"
                          )}>{m.change}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Badge Card */}
                <div className="p-6 bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Quantum Encryption</p>
                    <p className="text-[10px] text-zinc-500">End-to-end secure signals</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitor Matrix Section */}
            <CompetitorMatrix />
            
          </div>
        </div>
      </main>

      {/* Small Box AI Assistant (Floating) */}
      <AIAssistant />
    </div>
  );
}
