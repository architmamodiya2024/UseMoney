"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, Minimize2, Maximize2, ArrowUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  status?: string[];
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Welcome to StockSage. I've analyzed your portfolio across connected brokers. How can I assist your trading strategy today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true); // Default expanded for main view
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Mock AI response with stepping status
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Based on your risk profile and current market volatility, I've identified a divergence in the IT sector. Would you like to see a backtest of the 'Mean Reversion' strategy for these tickers?",
        timestamp: new Date(),
        status: ["Scanning holdings...", "Fetching fundamentals...", "Analyzing IT sector divergence"]
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className={cn(
      "relative h-[700px] flex flex-col bg-[#0f172a]/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl"
    )}>
      {/* Traffic Lights & Header */}
      <div className="p-5 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="dot dot-red" />
          <div className="dot dot-yellow" />
          <div className="dot dot-green" />
          <span className="ml-4 text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">STOCKSAGE AI</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
            LIVE PORTFOLIO
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth custom-scrollbar">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex flex-col gap-3", m.role === "user" ? "items-end" : "items-start")}>
            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
              {m.role === "assistant" ? (
                <>
                  <div className="w-5 h-5 rounded bg-emerald-500 flex items-center justify-center">
                    <span className="text-white text-[10px]">₹</span>
                  </div>
                  <span>STOCKSAGE</span>
                </>
              ) : (
                <span>YOU</span>
              )}
            </div>
            
            <div className={cn(
              "max-w-[85%] p-5 rounded-2xl leading-relaxed text-sm",
              m.role === "user" 
                ? "bg-[#1e293b] text-white border border-white/5" 
                : "bg-transparent text-zinc-200"
            )}>
              {m.content}
              
              {m.status && (
                <div className="mt-4 space-y-2">
                  {m.status.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-emerald-400 text-[11px] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>

      {/* Pill-shaped Input Area */}
      <div className="p-8 pt-0">
        <div className="relative flex items-center bg-[#1e293b]/50 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 shadow-2xl focus-within:border-emerald-500/50 transition-all group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask StockSage about your holdings..."
            className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-zinc-500"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full transition-all shadow-lg shadow-emerald-500/20"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
        
        {/* Quick actions */}
        <div className="flex gap-2 mt-4 justify-center">
          {["Analyze NIFTY50", "Roast my portfolio", "Best IT stocks?"].map((q) => (
            <button
              key={q}
              onClick={() => { setInput(q); }}
              className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-[11px] text-zinc-400 hover:bg-white/10 hover:text-white transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
