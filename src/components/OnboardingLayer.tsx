"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Target, Wallet, CreditCard, Sparkles, RefreshCw, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "goal" | "income" | "habits" | "complete";

export function OnboardingLayer() {
  const [step, setStep] = useState<Step>("goal");
  const [data, setData] = useState({
    goal: "",
    income: "",
    habits: "",
  });

  const nextStep = (field: keyof typeof data, value: string, next: Step) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setStep(next);
  };

  const reset = () => {
    setStep("goal");
    setData({ goal: "", income: "", habits: "" });
  };

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        {step === "goal" && (
          <motion.div
            key="goal"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Target className="text-emerald-400 w-5 h-5" />
                </div>
                What's your primary goal?
              </h2>
              <p className="text-zinc-500 text-sm">Help StockSage tailor your investment strategies.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Long-term Wealth", sub: "10+ year horizon" },
                { label: "Aggressive Growth", sub: "High risk, high reward" },
                { label: "Passive Income", sub: "Dividends & stability" },
                { label: "Market Hedging", sub: "Risk management" }
              ].map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => nextStep("goal", opt.label, "income")}
                  className="group text-left p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                >
                  <p className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">{opt.label}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">{opt.sub}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "income" && (
          <motion.div
            key="income"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <Wallet className="text-emerald-400 w-5 h-5" />
                </div>
                Net worth range?
              </h2>
              <p className="text-zinc-500 text-sm">Strictly for risk-assessment purposes.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["< ₹10 Lakhs", "₹10L - ₹50L", "₹50L - ₹2 Cr", "Institutional / Ultra HNI"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => nextStep("income", opt, "habits")}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-white font-bold text-sm"
                >
                  {opt}
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "habits" && (
          <motion.div
            key="habits"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <CreditCard className="text-emerald-400 w-5 h-5" />
                </div>
                Trading frequency?
              </h2>
              <p className="text-zinc-500 text-sm">Frequency determines the latency of AI signals.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Intraday Scalper", "Swing Trader", "Positional Investor", "Lumpsum / SIP"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => nextStep("habits", opt, "complete")}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-white font-bold text-sm"
                >
                  {opt}
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "complete" && (
          <motion.div
            key="complete"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8 py-4"
          >
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <Sparkles className="w-10 h-10 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white">Strategy Synced</h2>
              <p className="text-zinc-400 max-w-sm mx-auto text-sm leading-relaxed">
                StockSage is now optimized for <span className="text-emerald-400 font-bold">{data.goal}</span>. 
                Your risk engine has been set to <span className="italic">"{data.habits === "Intraday Scalper" ? "High Latency / Aggressive" : "Standard / Balanced"}"</span>.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 text-left space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5" />
                AI PROVISIONING COMPLETE
              </div>
              <p className="text-zinc-300 text-sm italic leading-relaxed">
                "Welcome to the inner circle. I've updated your dashboard with real-time {data.goal.toLowerCase()} signals. Let's find your first trade."
              </p>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-2 mx-auto text-zinc-500 hover:text-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Profile
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
