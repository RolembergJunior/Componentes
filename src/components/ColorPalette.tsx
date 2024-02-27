

export default function ColorPalette(){
    return(
        <div className="col-start-4 col-end-5 row-start-2 row-end-4">
            <div className="relative w-[200px] h-[80px] shadow-xl rounded-xl">
                <div className="absolute flex flex-col justify-center text-[#828282] text-xl text-center left-0 w-[50%] h-full rounded-l-xl bg-white">Início</div>
                <div className="absolute flex flex-col justify-center text-white text-xl text-center right-0 w-[50%] h-full rounded-r-xl bg-[#0F8E5E]">Vídeos</div>
            </div>
            <div className="bg-transparent flex flex-col gap-5 mt-10">
                <div className="flex items-center gap-3">
                    <div className="bg-white rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">FFFFFF</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#FAFAFA] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">FAFAFA</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#77808E] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">77808E</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#828282] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">828282</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#343A40] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">343A40</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#323232] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">323232</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="bg-[#0F8E5E] rounded-[50%] w-[50px] h-[45px]" />
                    <p className="text-[#828282]">0F8E5E</p>
                </div>
            </div>
        </div>
    );
}