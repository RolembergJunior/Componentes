'use client'

import { usePathname } from "next/navigation";


export default function Navbar(){
    const path = usePathname();

    // ${ path === '/' ? 'border-b-4 border-b-[#0F8E5E] border-' : 'border-b-0' }

    return(
        <div className="bg-white w-[400px] h-[80px] rounded-xl shadow-xl p-3">
            <nav className="my-5">
                <ul className="flex items-center justify-around">
                    <div className="relative">
                        <li className={`text-xl cursor-pointer font-normal ${ path === '/' ? 'text-[#0F8E5E]': 'text-[#828282]'}`}>Início</li>
                        <div className={`${ path === '/' ? 'absolute inset-0 -left-2 w-[65px] h-[49px] border-b-4 border-b-[#0F8E5E] ' : 'border-b-0' }`}/>
                    </div>
                    <div className="relative">
                        <li className={`text-xl cursor-pointer font-normal ${ path === '/progresso' ? 'text-[#0F8E5E]': 'text-[#828282]'}`}>Progresso</li>
                        <div className={`${ path === '/progresso' ? 'absolute inset-0 -left-2 w-[65px] h-[49px] border-b-4 border-b-[#0F8E5E] ' : 'border-b-0' }`}/>
                    </div>
                    <div className="relative">
                        <li className={`text-xl cursor-pointer font-normal ${ path === '/videos' ? 'text-[#0F8E5E]': 'text-[#828282]'}`}>Vídeos</li>
                        <div className={`${ path === '/videos' ? 'absolute inset-0 -left-2 w-[65px] h-[49px] border-b-4 border-b-[#0F8E5E] ' : 'border-b-0' }`}/>
                    </div>
                    <div className="relative">
                        <li className={`text-xl cursor-pointer font-normal ${ path === '/noticias' ? 'text-[#0F8E5E]': 'text-[#828282]'}`}>Notícias</li>
                        <div className={`${ path === '/noticias' ? 'absolute inset-0 -left-2 w-[65px] h-[49px] border-b-4 border-b-[#0F8E5E] ' : 'border-b-0' }`}/>
                    </div>
                </ul>
            </nav>
        </div>
    );
}