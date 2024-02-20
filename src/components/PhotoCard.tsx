

export default function PhotoCard(){
    return(
        <div className="bg-white w-[280px] h-[200px] p-4 rounded-xl shadow-md">
            <img src="/MundoDaFoto.png" alt="Foto do card" />
            <h1 className="text-lg" >Mundo da Leitura</h1>
            <p className="text-sm">Rolemberg Junior * 2 minutos de leitura</p>
        </div>
    );
}