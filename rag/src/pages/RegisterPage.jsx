import { Link } from 'react-router-dom'
import { ArrowRight, UserRound, Mail, LockKeyhole } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-slate-100">
      <div className="w-full max-w-xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 md:p-10">
        <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Create account</p>
        <h2 className="mt-4 text-3xl font-semibold text-white">Start with DocQuery AI</h2>

        <form className="mt-8 space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Full name</span>
            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus-within:border-cyan-400">
              <UserRound size={18} className="text-slate-500" />
              <input type="text" placeholder="Jane Doe" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
            </div>
          </label>

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
              <input type="password" placeholder="Create a password" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
            </div>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Confirm password</span>
            <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus-within:border-cyan-400">
              <LockKeyhole size={18} className="text-slate-500" />
              <input type="password" placeholder="Confirm your password" className="w-full bg-transparent text-white outline-none placeholder:text-slate-500" />
            </div>
          </label>

          <Link to="/dashboard">
            <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
              Create account
              <ArrowRight size={18} />
            </button>
          </Link>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/" className="font-medium text-cyan-300 hover:text-cyan-200">Login</Link>
        </p>
      </div>
    </div>
  )
}
