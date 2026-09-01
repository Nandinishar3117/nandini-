import { ArrowUpRight, FileText, MessageSquareQuote, Sparkles, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Total Documents', value: '128', icon: FileText, tone: 'cyan' },
  { label: 'Questions Asked', value: '2,430', icon: MessageSquareQuote, tone: 'violet' },
  { label: 'Documents Processed', value: '94%', icon: Sparkles, tone: 'emerald' },
  { label: 'Recent Activity', value: '+18.2%', icon: TrendingUp, tone: 'amber' },
]

const documents = [
  { name: 'annual-report.pdf', type: 'PDF', date: '2 hours ago', status: 'Ready' },
  { name: 'product-brief.docx', type: 'DOCX', date: 'Yesterday', status: 'Processing' },
  { name: 'notes.txt', type: 'TXT', date: '3 days ago', status: 'Ready' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Overview</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Dashboard</h2>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
          Upload document
          <ArrowUpRight size={16} />
        </button>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{label}</p>
              <div className={`rounded-xl p-2 ${tone === 'cyan' ? 'bg-cyan-500/10 text-cyan-300' : tone === 'violet' ? 'bg-violet-500/10 text-violet-300' : tone === 'emerald' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300'}`}>
                <Icon size={18} />
              </div>
            </div>
            <p className="mt-6 text-3xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent Documents</h3>
            <button className="text-sm text-cyan-300">View all</button>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
            <table className="min-w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-slate-400">
                <tr>
                  <th className="px-4 py-3">File name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.name} className="border-t border-slate-800">
                    <td className="px-4 py-3 text-white">{doc.name}</td>
                    <td className="px-4 py-3">{doc.type}</td>
                    <td className="px-4 py-3">{doc.date}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${doc.status === 'Ready' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>
                        {doc.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-white">Quick actions</h3>
          <div className="mt-5 space-y-3">
            {['Upload Document', 'Ask a Question', 'View Documents'].map((action) => (
              <button key={action} className="flex w-full items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-cyan-500 hover:text-white">
                {action}
                <ArrowUpRight size={15} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
