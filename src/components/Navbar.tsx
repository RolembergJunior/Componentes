

export default function Navbar(){
    return(
        <div className="bg-white w-[400px] h-[90px] rounded-xl shadow-xl p-3">
            <nav className="my-5">
                <ul className="flex items-center justify-around">
                    <li className="text-xl cursor-pointer font-normal text-[#828282]">Início</li>
                    <li className="text-xl cursor-pointer font-normal text-[#828282]">Progresso</li>
                    <li className="text-xl cursor-pointer font-normal text-[#828282]">Vídeos</li>
                    <li className="text-xl cursor-pointer font-normal text-[#828282]">Notícias</li>
                </ul>
            </nav>
        </div>
    );
}