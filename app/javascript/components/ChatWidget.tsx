import {FormEvent, useRef, useState} from "react"

type Message = {
  role: "user" | "assistant"
  content: string
}

interface ChatWidgetProps {
  agent: "website" | "resume"
  placeholder?: string
  greeting?: string
  floating?: boolean
}

function ChatPanel({agent, placeholder = "Ask me anything...", greeting}: Omit<ChatWidgetProps, "floating">) {
  const [messages, setMessages] = useState<Message[]>(
    greeting ? [{role: "assistant", content: greeting}] : []
  )
  const [input, setInput] = useState("")
  const [chatId, setChatId] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [rateLimited, setRateLimited] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  async function ensureChat(): Promise<number> {
    if (chatId) return chatId

    const res = await fetch("/api/chats", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({agent}),
    })
    const data = await res.json()
    setChatId(data.chat_id)
    return data.chat_id
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const content = input.trim()
    if (!content || loading) return

    setInput("")
    setMessages(prev => [...prev, {role: "user", content}])
    setLoading(true)

    try {
      const id = await ensureChat()
      const res = await fetch(`/api/chats/${id}/messages`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({content, agent}),
      })
      const data = await res.json()

      if (res.status === 429) {
        setMessages(prev => [...prev, {role: "assistant", content: data.content}])
        setRateLimited(true)
        return
      }

      setMessages(prev => [...prev, {role: "assistant", content: data.content}])
    } catch {
      setMessages(prev => [
        ...prev,
        {role: "assistant", content: "Sorry, something went wrong. Please try again."},
      ])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="rounded-2xl shadow-lg overflow-hidden flex flex-col w-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
        {messages.length === 0 && (
          <p className="text-sm text-gray-400 text-center pt-8">
            Start a conversation...
          </p>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-emerald-600 text-white rounded-br-md"
                  : "glass text-gray-700 rounded-bl-md"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="glass text-gray-400 px-3.5 py-2 rounded-2xl rounded-bl-md text-sm">
              <span className="inline-flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "0ms"}} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "150ms"}} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: "300ms"}} />
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {rateLimited ? (
        <div className="border-t border-white/30 p-3 text-center text-sm text-gray-400">
          Message limit reached
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border-t border-white/30 p-3 flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={loading}
            className="flex-1 bg-white/50 border border-white/40 rounded-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/30 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-12 flex justify-center items-center cursor-pointer bg-emerald-600 text-white rounded-full p-2 hover:bg-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </form>
      )}
    </div>
  )
}

export default function ChatWidget({floating, ...props}: ChatWidgetProps) {
  const [open, setOpen] = useState(false)

  if (!floating) {
    return (
      <div className="glass-strong max-w-lg">
        <ChatPanel {...props} />
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="glass-strong w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
            <span className="text-sm font-semibold text-gray-700">Chat with my resume</span>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ChatPanel {...props} />
        </div>
      )}

      <button
        onClick={() => setOpen(prev => !prev)}
        className="cursor-pointer w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>
    </div>
  )
}
