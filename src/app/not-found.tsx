import { Sidebar } from '@/components'
import { Metadata } from 'next';
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">

            <div className="flex">

                <Sidebar />

                <div className="p-2 w-full text-slate-900">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-7xl font-bold text-center">404</h1>
                        <p className="text-3xl font-bold text-center">Page not found</p>
                        <Link href="/">
                            <span className="text-lg font-bold text-navy-700">Go back to home</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}