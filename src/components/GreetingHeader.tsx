"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Sunrise, Bell, Search } from "lucide-react";

interface GreetingHeaderProps {
  isNewUser?: boolean;
  userName?: string;
}

export function GreetingHeader({ isNewUser = false, userName = "Archit" }: GreetingHeaderProps) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const hours = new Date().getHours();
      if (hours >= 5 && hours < 12) setGreeting("Good Morning");
      else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon");
      else setGreeting("Good Evening");
    };
    updateTime();
  }, []);

  return (
    <div className="flex items-center justify-between p-6 bg-transparent">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          {isNewUser ? "Welcome, Trader!" : `Welcome back, ${userName}!`}
        </h1>
        <p className="text-zinc-500 text-sm mt-1 flex items-center gap-2">
          {greeting} • <span className="text-emerald-400 font-medium">Market is Open</span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors" />
          <input 
            type="text" 
            placeholder="Search tickers..." 
            className="bg-[#0f172a] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all w-64"
          />
        </div>
        <button className="p-2.5 rounded-xl bg-[#0f172a] border border-white/5 hover:bg-white/5 transition-all text-zinc-400 hover:text-white relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#0f172a]" />
        </button>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-[1px]">
          <div className="w-full h-full rounded-[9px] bg-[#060b18] flex items-center justify-center">
            <span className="text-emerald-400 font-bold text-xs">AM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
