"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, Minimize2, ArrowUp, CheckCircle2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your UseMoney AI. Ask me anything about your trades or budget.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

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

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I've analyzed that ticker. Technicals show a strong support at ₹2,450. It might be a good time to enter.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[380px] h-[500px] glass rounded-[2rem] flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Assistant</p>
                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">Active</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-all">
                <X className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={cn("flex flex-col gap-1.5", m.role === "user" ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                    m.role === "user" 
                      ? "bg-emerald-500 text-white rounded-tr-none" 
                      : "bg-[#1e293b] text-zinc-200 rounded-tl-none border border-white/5"
                  )}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-1.5 p-4 bg-[#1e293b] rounded-2xl rounded-tl-none w-16 items-center justify-center border border-white/5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce" />
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-[#0f172a]/80 backdrop-blur-md">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="w-full bg-[#1e293b]/50 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-400 transition-all"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 border border-emerald-400/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
