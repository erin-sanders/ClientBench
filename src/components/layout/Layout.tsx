import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { AuthButton } from '../AuthButton'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-slate-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-slate-800">ClientBench</h1>
            <AuthButton />
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="min-h-full bg-slate-50">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
