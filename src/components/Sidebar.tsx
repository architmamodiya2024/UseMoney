"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Wallet, 
  PieChart, 
  MessageSquare, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  BarChart2,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "#" },
  { icon: BarChart2, label: "Market", href: "#" },
  { icon: Wallet, label: "Portfolio", href: "#" },
  { icon: Cpu, label: "AI Insights", href: "#" },
  { icon: MessageSquare, label: "Assistant", href: "#" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className={cn(
        "relative h-screen bg-[#030712] border-r border-white/5 flex flex-col transition-colors duration-300 z-50",
        isCollapsed ? "items-center" : "items-start"
      )}
    >
      {/* Header / Logo */}
      <div className={cn("p-6 flex items-center gap-3 w-full", isCollapsed ? "justify-center" : "justify-start")}>
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
          <TrendingUp className="text-white w-5 h-5" />
        </div>
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl tracking-tight text-white"
          >
            UseMoney
          </motion.span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 w-full px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-all group",
              "hover:bg-white/5",
              isCollapsed ? "justify-center" : "justify-start"
            )}
          >
            <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-medium text-zinc-400 group-hover:text-white"
              >
                {item.label}
              </motion.span>
            )}
          </a>
        ))}
      </nav>

      {/* Footer / Settings */}
      <div className="w-full px-4 mb-6 pt-4 border-t border-white/5">
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 p-3 rounded-xl transition-all group",
            "hover:bg-white/5",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <Settings className="w-5 h-5 text-zinc-500 group-hover:text-white" />
          {!isCollapsed && (
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white">
              Settings
            </span>
          )}
        </a>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-[#030712] border border-white/10 flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-zinc-400" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-zinc-400" />
        )}
      </button>
    </motion.aside>
  );
}
