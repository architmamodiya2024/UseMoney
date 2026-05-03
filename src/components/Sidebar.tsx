"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, 
  Wallet, 
  PieChart, 
  MessageSquare, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "#" },
  { icon: Wallet, label: "Transactions", href: "#" },
  { icon: PieChart, label: "Budgeting", href: "#" },
  { icon: TrendingUp, label: "Investments", href: "#" },
  { icon: MessageSquare, label: "AI Assistant", href: "#" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className={cn(
        "relative h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 flex flex-col transition-colors duration-300",
        isCollapsed ? "items-center" : "items-start"
      )}
    >
      {/* Header / Logo */}
      <div className={cn("p-6 flex items-center gap-3 w-full", isCollapsed ? "justify-center" : "justify-start")}>
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">U</span>
        </div>
        {!isCollapsed && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white"
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
              "hover:bg-indigo-50 dark:hover:bg-indigo-950/30",
              isCollapsed ? "justify-center" : "justify-start"
            )}
          >
            <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-indigo-600 dark:text-zinc-400" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-white"
              >
                {item.label}
              </motion.span>
            )}
          </a>
        ))}
      </nav>

      {/* Footer / Settings */}
      <div className="w-full px-4 mb-6 pt-4 border-t border-zinc-100 dark:border-zinc-900">
        <a
          href="#"
          className={cn(
            "flex items-center gap-3 p-3 rounded-xl transition-all group",
            "hover:bg-zinc-100 dark:hover:bg-zinc-900",
            isCollapsed ? "justify-center" : "justify-start"
          )}
        >
          <Settings className="w-5 h-5 text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white" />
          {!isCollapsed && (
            <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-white">
              Settings
            </span>
          )}
        </a>
      </div>

      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
        )}
      </button>
    </motion.aside>
  );
}
