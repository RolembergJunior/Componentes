

export default function ScearchCard(){
    return(
        <div className="bg-white rounded-lg w-[700px] h-[130px] p-3 shadow-xl space-y-3">
            <h1 className="text-xl font-semibold">
                Pesquisa
            </h1>
            <input className="bg-[#F3EFEF] p-5 w-full h-[50px] rounded-xl" type="text" placeholder="Digite aqui..."/>
        </div>
    );
}