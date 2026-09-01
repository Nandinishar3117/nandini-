import { NavLink, Outlet } from 'react-router-dom'
import { LayoutDashboard, FileText, Upload, MessageSquareText, LogOut, Sparkles } from 'lucide-react'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/upload', label: 'Upload', icon: Upload },
  { to: '/chat', label: 'Chat', icon: MessageSquareText },
]

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-slate-800 bg-slate-900/80 p-6 backdrop-blur">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">DocQuery</p>
              <h1 className="text-xl font-semibold text-white">AI Workspace</h1>
            </div>
          </div>

          <nav className="space-y-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Status</p>
            <p className="mt-3 text-lg font-semibold text-emerald-300">System ready</p>
            <p className="mt-1 text-sm text-slate-400">RAG pipeline active</p>
          </div>

          <button className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800">
            <LogOut size={16} />
            Sign out
          </button>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
