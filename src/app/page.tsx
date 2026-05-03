"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { GreetingHeader } from "@/components/GreetingHeader";
import { OnboardingLayer } from "@/components/OnboardingLayer";
import { AIAssistant } from "@/components/AIAssistant";
import { Table, Globe, Layout, Search, TrendingUp, ShieldCheck, Zap } from "lucide-react";
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
        <div className="flex-1 overflow-y-auto p-6 pt-0 space-y-6 scroll-smooth">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Column: AI Assistant (Central Focus) */}
            <div className="lg:col-span-8">
              <AIAssistant />
            </div>

            {/* Right Column: Secondary Modules */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Market Watch Card */}
              <div className="bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Market Watch
                  </h3>
                  <button className="text-[10px] font-bold text-emerald-400 hover:underline uppercase tracking-widest">
                    View All
                  </button>
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

              {/* Onboarding Card (Only if new) */}
              {isNewUser && (
                <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-[2.5rem] p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <Zap className="w-20 h-20 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Connect Broker</h3>
                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Unlock StockSage's full potential by connecting your Demat account for live insights.
                  </p>
                  <button className="w-full py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/20">
                    Connect Now
                  </button>
                </div>
              )}

              {/* Trust Badge Card */}
              <div className="p-6 bg-white/5 border border-white/5 rounded-[2.5rem] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Bank Grade Security</p>
                  <p className="text-[10px] text-zinc-500">Your data is AES-256 encrypted</p>
                </div>
              </div>

              <button 
                onClick={() => setIsNewUser(!isNewUser)}
                className="w-full py-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest hover:text-emerald-400 transition-colors"
              >
                Toggle Mode: {isNewUser ? "New User" : "Returning User"}
              </button>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
