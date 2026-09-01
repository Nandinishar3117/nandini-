import { Search, Download, MessageSquareText, Trash2 } from 'lucide-react'

const docs = [
  { name: 'quarterly-results.pdf', type: 'PDF', size: '2.4 MB', date: '2026-08-30', pages: 42, chunks: 128, status: 'Ready' },
  { name: 'roadmap.docx', type: 'DOCX', size: '780 KB', date: '2026-08-22', pages: 18, chunks: 72, status: 'Processing' },
  { name: 'notes.txt', type: 'TXT', size: '144 KB', date: '2026-08-12', pages: 6, chunks: 15, status: 'Ready' },
]

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Documents</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Knowledge base</h2>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2.5">
          <Search size={16} className="text-slate-500" />
          <input placeholder="Search documents" className="w-48 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
        </div>
      </header>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <table className="min-w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-slate-400">
            <tr>
              <th className="px-4 py-3">File name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Pages</th>
              <th className="px-4 py-3">Chunks</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((doc) => (
              <tr key={doc.name} className="border-t border-slate-800">
                <td className="px-4 py-4 text-white">{doc.name}</td>
                <td className="px-4 py-4">{doc.type}</td>
                <td className="px-4 py-4">{doc.size}</td>
                <td className="px-4 py-4">{doc.date}</td>
                <td className="px-4 py-4">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${doc.status === 'Ready' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="px-4 py-4">{doc.pages}</td>
                <td className="px-4 py-4">{doc.chunks}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-cyan-500"><Download size={15} /></button>
                    <button className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-cyan-500"><MessageSquareText size={15} /></button>
                    <button className="rounded-lg border border-slate-700 p-2 text-rose-300 hover:border-rose-500"><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
