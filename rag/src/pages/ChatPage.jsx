import { SendHorizonal, Paperclip, FileText, ArrowUpRight } from 'lucide-react'

const sources = [
  { doc: 'annual-report.pdf', page: 17, excerpt: 'The business delivered a 14% increase in revenue over the prior year.' },
  { doc: 'market-overview.pdf', page: 9, excerpt: 'Expansion in digital products accounted for the largest contribution to growth.' },
]

export default function ChatPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] flex-col rounded-3xl border border-slate-800 bg-slate-900">
      <header className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Document chat</p>
          <h2 className="mt-2 text-xl font-semibold text-white">annual-report.pdf</h2>
        </div>
        <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">Ready • 42 pages</div>
      </header>

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto p-6">
        <div className="max-w-xl rounded-2xl rounded-br-md bg-slate-800 p-4 text-slate-100">
          <p className="text-sm text-slate-300">What are the main findings of this document?</p>
        </div>

        <div className="ml-auto max-w-2xl rounded-2xl rounded-bl-md bg-cyan-500 p-4 text-slate-950">
          <p className="text-sm font-medium">The document highlights a 14% increase in revenue, stronger digital product adoption, and an expansion in annual recurring revenue across the last fiscal year.</p>
        </div>

        <div className="max-w-3xl rounded-2xl border border-slate-700 bg-slate-950 p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-300">Sources</p>
          <div className="space-y-3">
            {sources.map((source) => (
              <div key={source.doc} className="rounded-xl border border-slate-800 bg-slate-900 p-3">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <FileText size={14} className="text-cyan-300" />
                    {source.doc}
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs text-cyan-300">
                    Page {source.page}
                    <ArrowUpRight size={12} />
                  </button>
                </div>
                <p className="text-sm text-slate-300">“{source.excerpt}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-3">
          <button className="rounded-xl border border-slate-700 p-2 text-slate-300 hover:border-cyan-500">
            <Paperclip size={16} />
          </button>
          <input placeholder="Ask a question about your documents..." className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
          <button className="rounded-xl bg-cyan-500 p-2.5 text-slate-950 transition hover:bg-cyan-400">
            <SendHorizonal size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
