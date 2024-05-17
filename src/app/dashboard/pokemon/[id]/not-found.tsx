import { Sidebar } from '@/components'
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link'


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="p-2 w-full text-slate-900">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-7xl font-bold text-center">404</h1>
                    <p className="text-3xl font-bold text-center">Pokemon not found</p>
                    <Image
                        src={'https://static.wikia.nocookie.net/pokemon-land/images/d/df/Psyduck_%28anime%29.png/revision/latest?cb=20160819002111&path-prefix=es'}
                        width={150}
                        height={150}
                        alt="Psyduck"
                    />
                    <Link href="/dashboard/pokemons">
                        <div className="mt-4 p-3 rounded-2xl bg-blue-600">
                            <span className="text-lg font-bold text-navy-700">Volver a pokemons</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}