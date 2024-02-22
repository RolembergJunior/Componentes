

export default function InformationCard(){
    return(
        <div className="bg-white w-[320px] h-[255px] rounded-xl space-y-2 shadow-xl p-5">
            <img src="/player.svg" alt="Imagem do Card" />
            <div>
                <h2 className="text-[#4A5568] font-medium">Como ganhar seu dinheiro jogando?</h2>
                <p className="text-sm text-[#828282]">Bestplayer * 10 minutos de vídeo</p>
            </div>
        </div>
    );
}