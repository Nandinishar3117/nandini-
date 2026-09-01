import { Link } from 'react-router-dom'
import { ArrowRight, LockKeyhole, Mail } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-cyan-950/20 lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-700 p-10 lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%)]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-100/80">DocQuery AI</p>
              <h1 className="mt-6 max-w-md text-4xl font-semibold leading-tight text-white">
                Ask questions across your entire document library.
              </h1>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-sm text-cyan-50/80">Trusted by teams working with PDFs, reports, and internal knowledge.</p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="mx-auto max-w-md">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Login to your workspace</h2>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Email</span>
                <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus-within:border-cyan-400">
                  <Mail size={18} className="text-slate-500" />
                  <input type="email" placeholder="you@company.com" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Password</span>
                <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus-within:border-cyan-400">
                  <LockKeyhole size={18} className="text-slate-500" />
                  <input type="password" placeholder="••••••••" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
                </div>
              </label>

              <div className="flex items-center justify-between text-sm text-slate-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-slate-700 bg-slate-800" />
                  Remember me
                </label>
                <button type="button" className="text-cyan-300 hover:text-cyan-200">Forgot password?</button>
              </div>

              <Link to="/dashboard">
                <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                  Login
                  <ArrowRight size={18} />
                </button>
              </Link>
            </form>

            <p className="mt-6 text-center text-sm text-slate-400">
              Don’t have an account?{' '}
              <Link to="/register" className="font-medium text-cyan-300 hover:text-cyan-200">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
