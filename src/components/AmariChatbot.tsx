import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  X,
  Send,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import amariAvatarImg from '@/assets/amari_avatar.webp'
import {
  type ChatMessage,
  AMARI_INITIAL_SUGGESTIONS,
  getAmariResponse,
} from '@/lib/amariKnowledge'

const formatCurrentTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-welcome',
  sender: 'amari',
  text: "Hello! I'm **Amari**, your digital advisor at **Versata Digital Solutions**.\n\nHow can I help you today? Feel free to ask about our solutions in **Smart Energy**, **Digital Infrastructure**, **Smart Education**, or how our **Technology Partnerships** work.",
  timestamp: 'Just now',
  suggestions: AMARI_INITIAL_SUGGESTIONS,
}

export const AmariChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [teaserDismissed, setTeaserDismissed] = useState(false)
  const [teaserTimerDone, setTeaserTimerDone] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const showTeaser = !isOpen && !teaserDismissed && teaserTimerDone

  // Show teaser prompt after delay
  useEffect(() => {
    const hasSeenTeaser = sessionStorage.getItem('amari_teaser_dismissed')
    if (hasSeenTeaser) {
      return
    }

    const timer = setTimeout(() => {
      setTeaserTimerDone(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  // Scroll to bottom of message list
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, isOpen])

  const openChat = () => {
    setIsOpen(true)
    setTeaserDismissed(true)
    sessionStorage.setItem('amari_teaser_dismissed', 'true')
    setTimeout(() => inputRef.current?.focus(), 150)
  }

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      openChat()
    }
  }

  const dismissTeaser = (e: React.MouseEvent) => {
    e.stopPropagation()
    setTeaserDismissed(true)
    sessionStorage.setItem('amari_teaser_dismissed', 'true')
  }

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim()
    if (!query || isTyping) return

    const now = Date.now()
    const timeStr = formatCurrentTime()

    const userMsg: ChatMessage = {
      id: `msg-user-${now}`,
      sender: 'user',
      text: query,
      timestamp: timeStr,
    }

    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const { text, actions, suggestions } = getAmariResponse(query)
      const botMsg: ChatMessage = {
        id: `msg-bot-${Date.now()}`,
        sender: 'amari',
        text,
        timestamp: formatCurrentTime(),
        actions,
        suggestions,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 650)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE])
    setInputValue('')
    setIsTyping(false)
  }

  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n')
    return lines.map((line, idx) => {
      // Bold replacement: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g)
      return (
        <p key={idx} className={idx > 0 && line.trim() === '' ? 'h-2' : 'my-0.5 leading-relaxed'}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-semibold text-[#102A56]">
                  {part.slice(2, -2)}
                </strong>
              )
            }
            return part
          })}
        </p>
      )
    })
  }

  return (
    <>
      {/* Floating Widget Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Proactive Teaser Speech Bubble */}
        {showTeaser && (
          <aside
            role="region"
            aria-label="Amari assistance prompt"
            onClick={openChat}
            className="group mb-3 flex max-w-xs cursor-pointer items-start gap-3 rounded-2xl border border-[#00AFA9]/30 bg-[#071525]/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#35D0C5] hover:scale-102 animate-in fade-in slide-in-from-bottom-3"
          >
            <div className="relative shrink-0">
              <img
                src={amariAvatarImg}
                alt="Amari"
                className="h-11 w-11 rounded-full border-2 border-[#35D0C5] object-cover shadow-sm"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#071525] bg-emerald-400" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#35D0C5]">
                  <Sparkles className="h-3 w-3" /> Amari
                </span>
                <button
                  type="button"
                  onClick={dismissTeaser}
                  aria-label="Dismiss message"
                  className="rounded p-0.5 text-slate-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1 text-xs leading-snug text-slate-200">
                Hi! Have questions about Versata&apos;s solutions or tech partnerships? Let&apos;s chat!
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-[#35D0C5] group-hover:underline">
                Ask Amari &rarr;
              </p>
            </div>
          </aside>
        )}

        {/* Chat Window Dialog */}
        {isOpen && (
          <div
            role="dialog"
            aria-label="Amari AI Chatbot"
            aria-modal="true"
            className="mb-3 flex h-[580px] max-h-[85vh] w-[370px] sm:w-[410px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl backdrop-blur-lg animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <header className="flex items-center justify-between bg-linear-to-r from-[#071525] to-[#102A56] px-4 py-3.5 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={amariAvatarImg}
                    alt="Amari Avatar"
                    className="h-10 w-10 rounded-full border-2 border-[#35D0C5] object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#071525] bg-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white">Amari</h3>
                    <span className="rounded-full bg-[#35D0C5]/20 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#35D0C5]">
                      Advisor
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300">Versata Digital Solutions</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Restart conversation"
                  title="Reset conversation"
                  className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  title="Close chat"
                  className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto bg-[#F8F9FA] p-4 text-xs space-y-4">
              {messages.map((msg) => {
                const isAmari = msg.sender === 'amari'
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isAmari ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-end gap-2 max-w-[88%]">
                      {isAmari && (
                        <img
                          src={amariAvatarImg}
                          alt="Amari"
                          className="h-6 w-6 rounded-full object-cover shrink-0 mb-1"
                        />
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 shadow-xs ${
                          isAmari
                            ? 'rounded-bl-xs border border-slate-200/80 bg-white text-[#102A56]'
                            : 'rounded-br-xs bg-[#102A56] text-white'
                        }`}
                      >
                        <div className="text-xs leading-relaxed">
                          {renderFormattedText(msg.text)}
                        </div>

                        {/* Direct Action Buttons */}
                        {msg.actions && msg.actions.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2 border-t border-slate-100 pt-2.5">
                            {msg.actions.map((act, aIdx) => {
                              if (act.isExternal) {
                                return (
                                  <a
                                    key={aIdx}
                                    href={act.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-md bg-[#00AFA9] px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-[#008F8A]"
                                  >
                                    {act.label}
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )
                              }
                              return (
                                <Link
                                  key={aIdx}
                                  to={act.url}
                                  onClick={() => setIsOpen(false)}
                                  className="inline-flex items-center gap-1 rounded-md bg-[#102A56] px-2.5 py-1.5 text-[11px] font-bold text-white transition-colors hover:bg-[#071525]"
                                >
                                  {act.label}
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    <span className="mt-1 px-1 text-[10px] text-slate-400">
                      {msg.timestamp}
                    </span>

                    {/* Follow-up Suggestion Chips */}
                    {isAmari && msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="mt-2 ml-8 flex flex-wrap gap-1.5 max-w-[90%]">
                        {msg.suggestions.map((suggestion, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => handleSendMessage(suggestion)}
                            className="rounded-full border border-[#00AFA9]/30 bg-white px-2.5 py-1 text-[10.5px] font-medium text-[#102A56] shadow-2xs transition-all hover:border-[#00AFA9] hover:bg-[#00AFA9]/10 active:scale-95 text-left"
                          >
                            💬 {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Typing Animation */}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <img
                    src={amariAvatarImg}
                    alt="Amari"
                    className="h-6 w-6 rounded-full object-cover shrink-0"
                  />
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-xs border border-slate-200 bg-white px-3.5 py-2.5 shadow-xs">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#00AFA9] [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#00AFA9] [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#00AFA9]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="border-t border-slate-200 bg-white p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-slate-300 bg-[#F4F5F2] px-3 py-1.5 focus-within:border-[#00AFA9] focus-within:ring-2 focus-within:ring-[#00AFA9]/20 transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Amari about Versata..."
                  aria-label="Type your question to Amari"
                  className="flex-1 bg-transparent text-xs text-[#102A56] placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00AFA9] text-white transition-all hover:bg-[#008F8A] disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-slate-400">
                Powered by Versata Digital Solutions Knowledge Engine
              </p>
            </form>
          </div>
        )}

        {/* Floating Trigger Button */}
        <button
          type="button"
          onClick={toggleChat}
          aria-label={isOpen ? 'Close Amari chat' : 'Open Amari chat'}
          aria-expanded={isOpen}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#071525] text-white shadow-xl transition-all duration-300 hover:bg-[#102A56] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0C5] focus-visible:ring-offset-2"
        >
          {isOpen ? (
            <X className="h-6 w-6 transition-transform duration-200 group-hover:rotate-90" />
          ) : (
            <div className="relative flex items-center justify-center">
              <img
                src={amariAvatarImg}
                alt="Amari"
                className="h-12 w-12 rounded-full border-2 border-[#35D0C5] object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#071525] bg-emerald-400 animate-pulse" />
            </div>
          )}
        </button>
      </div>
    </>
  )
}
