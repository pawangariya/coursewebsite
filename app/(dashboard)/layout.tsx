'use client'
import React, { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import {  usePathname } from 'next/navigation'
import DashboardNav from '../components/dashboard/DashboardNav'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoaded } = useUser()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [displayRole, setDisplayRole] = useState<'admin' | 'student'>('student')

  useEffect(() => {
    if (pathname) {
      setDisplayRole(pathname.startsWith('/admin') ? 'admin' : 'student')
    }
  }, [pathname])

  if (!isLoaded) return null;
  if (!user) return null


  const role = (user.publicMetadata.role as 'admin' | 'student') || 'student'
  const userName = user.firstName || 'User'

  // Final role determination
  const finalRole = pathname?.startsWith('/admin') ? 'admin' : role

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-30 lg:hidden w-full bg-white border-b border-gray-200 h-14 flex items-center px-4">
        <button
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="ml-3 text-base font-semibold text-gray-900">
          {finalRole === 'admin' ? 'Admin' : 'My Dashboard'}
        </span>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Width Increased to w-72 */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <DashboardNav
          role={finalRole}
          userName={userName}
          onCloseMobile={() => setIsMobileMenuOpen(false)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout