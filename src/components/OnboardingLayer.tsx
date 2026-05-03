"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Target, Wallet, CreditCard, Sparkles, RefreshCw } from "lucide-react";
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
    <div className="max-w-xl mx-auto mt-10 p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden">
      <AnimatePresence mode="wait">
        {step === "goal" && (
          <motion.div
            key="goal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Target className="text-indigo-600" />
                What's your primary goal?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">This helps me tailor my suggestions for you.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Save for a big purchase", "Invest for long term", "Reduce debt", "Track daily spending"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => nextStep("goal", opt, "income")}
                  className="w-full text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5 transition-all font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "income" && (
          <motion.div
            key="income"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <Wallet className="text-indigo-600" />
                Monthly income range?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">Rough estimate is fine.</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Under ₹50k", "₹50k - ₹1.5L", "₹1.5L - ₹3L", "Above ₹3L"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => nextStep("income", opt, "habits")}
                  className="w-full text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 transition-all font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === "habits" && (
          <motion.div
            key="habits"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <CreditCard className="text-indigo-600" />
                Spending habits?
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400">Be honest, I'm here to help!</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {["Careful & Plan ahead", "Impulsive sometimes", "Usually over budget", "Don't track at all"].map((opt) => (
                <button
                  key={opt}
                  onClick={() => nextStep("habits", opt, "complete")}
                  className="w-full text-left p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-600 dark:hover:border-indigo-500 transition-all font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {opt}
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
            className="text-center space-y-6 py-4"
          >
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-950/50 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Profile Ready!</h2>
              <p className="text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
                Based on your goal to <span className="text-indigo-600 font-semibold">{data.goal.toLowerCase()}</span>, 
                I'll adopt a <span className="italic">"{data.habits === "Careful & Plan ahead" ? "Strategic" : "Supportive"}"</span> tone.
              </p>
            </div>
            
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">AI Greeting Example</p>
              <p className="text-zinc-700 dark:text-zinc-300">
                {data.habits === "Careful & Plan ahead" 
                  ? "Great to see a disciplined planner. Let's look at your portfolio optimization for today."
                  : "Welcome back! Don't worry about yesterday's spend. Let's find some quick wins to get back on track."}
              </p>
            </div>

            <button
              onClick={reset}
              className="flex items-center gap-2 mx-auto text-zinc-500 hover:text-indigo-600 transition-colors text-sm font-medium"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Experience
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
