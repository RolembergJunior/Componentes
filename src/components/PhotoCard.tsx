

export default function PhotoCard(){
    return(
        <div className="bg-white w-[320px] h-[220px] p-5 space-y-2 rounded-xl shadow-md">
            <img src="/MundoDaFoto.png" alt="Foto do card" />
            <div>
                <h1 className="text-lg font-medium" >Mundo da Leitura</h1>
                <p className="text-[14px] text-[#828282]">Rolemberg Junior * 2 minutos de leitura</p>
            </div>
        </div>
    );
}