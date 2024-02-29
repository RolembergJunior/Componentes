import { IoIosArrowForward } from "react-icons/io";


export default function FriendsCard(){
    return(
        <div className="bg-white w-[300px] h-[320px] mx-auto rounded-xl shadow-xl p-3">
            <div className="flex justify-between my-3 items-center">
                <h1 className="text-3xl font-semibold">Amigos</h1>
                <a className="text-[#0F8E5E]" >Ver mais</a>
            </div>
            <div className=" relative flex flex-col justify-between mt-5 h-[220px]">
                <div className="flex gap-3 items-center">
                    <img  className="w-[50px] rounded-[50%]" src="/paula.svg" alt="Imagem do Usuário" />
                    <div className="absolute left-[35px] top-10 bg-green-500 border-2 rounded-[50%] w-[13px] h-[13px]" />
                    <div>
                        <h1 className="font-medium ">Paula Fernandes</h1>
                        <p className="text-[#999999]">paulafernandes #br1</p>
                    </div>
                    <IoIosArrowForward size={30} color="gray" className="ml-3"/>
                </div>

                <div className="relative flex gap-3 items-center">
                    <img  className="w-[50px] rounded-[50%]" src="/roberta.svg" alt="Imagem do Usuário" />
                    <div className="absolute left-[35px] top-10 bg-green-500 border-2 rounded-[50%] w-[13px] h-[13px]" />
                    <div>
                        <h1 className="font-medium ">Roberta</h1>
                        <p className="text-[#999999]">roberta32 #br1</p>
                    </div>
                    <IoIosArrowForward size={30} color="gray" className="ml-[56px]"/>
                </div>

                <div className="relative flex gap-3 items-center">
                    <img  className="w-[50px] rounded-[50%]" src="/carlos.png" alt="Imagem do Usuário" />
                    <div className="absolute left-[35px] top-10 bg-green-500 border-2 rounded-[50%] w-[13px] h-[13px]" />
                    <div>
                        <h1 className="font-medium ">Carlos Rafael</h1>
                        <p className="text-[#999999]">carlosrafael #br1</p>
                    </div>
                    <IoIosArrowForward size={30} color="gray" className="ml-10" />
                </div>
            </div>
        </div>
    );
}