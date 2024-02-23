

export default function PriceCard(){
    return(
        <div className="flex flex-col justify-between bg-white w-[300px] h-[320px] p-4 rounded-xl shadow-lg">
            <h1 className="text-xl font-medium">Preço</h1>
            <div className="flex justify-around items-center">
                <input className="w-[100px] h-[50px] bg-[#FAFAFA] rounded-md" type="number" value="$25" />
                <p>----</p>
                <input className="w-[100px] h-[50px] bg-[#FAFAFA] rounded-md" type="number" value="$50" />
            </div>
            <p>SLICER PRICE</p>
            <div className="flex flex-wrap justify-between gap-3">
                <p>Menos de $25</p>
                <p>$25 a $50</p>
                <p>$50 a $100</p>
                <p>$100 a $200</p>
                <p>$200 a $500</p>
                <p>$500 e acima</p>
            </div>
            <p className="text-[#A1A1A1]">150 resultados encontrados</p>
        </div>
    )
}