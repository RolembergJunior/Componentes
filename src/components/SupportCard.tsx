

export default function SupportCard(){
    return(
        <div className="relative flex flex-col justify-around bg-white w-[350px] h-[390px] shadow-xl rounded-xl p-3">
            <h1 className="text-2xl font-semibold">Fale conosco</h1>
            <div className="flex items-center gap-3">
                <img 
                    src="/supportImage.svg" 
                    alt="Imagem do suporte" 
                    className="w-[50px] rounded-[50%]"
                />
                <div className="absolute left-[50px] top-[110px] bg-green-500 border-2 rounded-[50%] w-[13px] h-[13px]" />
                <div>
                    <h1 className="text-lg font-medium">Paula Fernandes</h1>
                    <p className="text-[#999999]">Suporte</p>
                </div>
            </div>
            <input className="relative placeholder:absolute placeholder:top-5 w-full h-[160px] rounded-xl bg-[#FAFAFA] p-3" type="text" placeholder="Comentário" />
            <div className="flex gap-4 justify-end">
                <button className="bg-white border border-[#0F8E5E] text-[#0F8E5E] w-[100px] h-[50px] rounded-lg">Voltar</button>
                <button className="bg-[#0F8E5E] text-white w-[100px] h-[50px] rounded-lg">Enviar</button>
            </div>
        </div>
    );
}