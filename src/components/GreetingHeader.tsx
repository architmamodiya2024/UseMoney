"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Sunrise, User } from "lucide-react";

interface GreetingHeaderProps {
  isNewUser?: boolean;
  userName?: string;
}

export function GreetingHeader({ isNewUser = false, userName = "Archit" }: GreetingHeaderProps) {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      let g = "Good Evening";
      if (hours >= 5 && hours < 12) g = "Good Morning";
      else if (hours >= 12 && hours < 17) g = "Good Afternoon";
      
      setGreeting(g);
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const getIcon = () => {
    if (greeting.includes("Morning")) return <Sunrise className="w-6 h-6 text-orange-400" />;
    if (greeting.includes("Afternoon")) return <Sun className="w-6 h-6 text-yellow-500" />;
    return <Moon className="w-6 h-6 text-indigo-400" />;
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl">
          {getIcon()}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            {greeting}, {userName}!
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            {isNewUser 
              ? "Welcome to UseMoney! Let's start your financial journey." 
              : "Welcome back! Ready to check your progress today?"}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 px-6 py-2 bg-zinc-50 dark:bg-zinc-900 rounded-2xl self-start md:self-center">
        <div className="text-right">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Local Time</p>
          <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{time}</p>
        </div>
        <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" />
        <div className="text-right">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Status</p>
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {isNewUser ? "Explorer" : "Pro User"}
          </p>
        </div>
      </div>
    </div>
  );
}
