

export default function TagsCard(){
    return(
        <div className="bg-white w-[320px] rounded-xl space-y-4 shadow-xl p-3">
            <h1 className="text-xl font-semibold">Tags</h1>
            <div className="flex flex-wrap items-center gap-3">
                <button className="bg-[#323232] text-white rounded-xl h-[40px] px-6">ux/ui</button>
                <button className="bg-[#323232] text-white rounded-xl h-[40px] px-6">figma</button>
                <button className="bg-[#323232] text-white rounded-xl h-[40px] px-6">adobe</button>
                <button className="bg-[#323232] text-white rounded-xl h-[40px] px-6">designer</button>
                <a className="text-[#0F8E5E] ml-4"> + Adicionar tag</a>
            </div>
        </div>
    );
}