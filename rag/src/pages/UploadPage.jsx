import { CloudUpload, FileText, Sparkles, CheckCircle2 } from 'lucide-react'

const stages = [
  'Uploading',
  'Extracting text',
  'Chunking',
  'Generating embeddings',
  'Indexing',
  'Completed',
]

export default function UploadPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Upload</p>
        <h2 className="mt-2 text-3xl font-semibold text-white">Add documents to your RAG index</h2>
      </div>

      <div className="rounded-3xl border border-dashed border-cyan-500/40 bg-slate-900 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
          <CloudUpload size={28} />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-white">Drag & drop files here</h3>
        <p className="mt-2 text-slate-400">Supports PDF, DOCX, and TXT documents</p>
        <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
          Browse files
        </button>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Processing pipeline</h3>
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs font-medium text-emerald-300">Active</span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {stages.map((stage, index) => (
            <div key={stage} className={`rounded-2xl border p-4 ${index === stages.length - 1 ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200' : 'border-slate-700 bg-slate-950 text-slate-300'}`}>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em]">
                <span>{index + 1}</span>
                {index === stages.length - 1 ? <CheckCircle2 size={16} /> : <Sparkles size={16} />}
              </div>
              <p className="mt-4 text-sm font-medium">{stage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
