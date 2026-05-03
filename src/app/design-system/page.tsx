"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { GreetingHeader } from "@/components/GreetingHeader";
import { OnboardingLayer } from "@/components/OnboardingLayer";
import { User, Users, MousePointer2 } from "lucide-react";

export default function DesignSystemPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-900">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Section 1: Greeting */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">01. Dynamic Greeting</h2>
              <button 
                onClick={() => setIsNewUser(!isNewUser)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-medium hover:bg-zinc-50 transition-colors"
              >
                {isNewUser ? <Users className="w-4 h-4" /> : <User className="w-4 h-4" />}
                Toggle User Status: {isNewUser ? "New" : "Returning"}
              </button>
            </div>
            <GreetingHeader isNewUser={isNewUser} />
          </section>

          {/* Section 2: Onboarding */}
          <section className="space-y-6">
            <h2 className="text-sm font-bold text-zinc-400 uppercase tracking-[0.2em]">02. Personalisation Layer</h2>
            <div className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-[2.5rem] p-8 border border-indigo-500/10">
              <OnboardingLayer />
            </div>
          </section>

          {/* Design Notes */}
          <footer className="pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-bold text-zinc-900 dark:text-white">Clean & Minimal</p>
                <p className="text-sm text-zinc-500">Using high contrast whitespace and subtle borders instead of heavy shadows.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-zinc-900 dark:text-white">Animated States</p>
                <p className="text-sm text-zinc-500">Smooth transitions using Framer Motion for sidebar and step progression.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-zinc-900 dark:text-white">Responsive by Default</p>
                <p className="text-sm text-zinc-500">Components adapt from mobile stack to desktop row layouts seamlessly.</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
