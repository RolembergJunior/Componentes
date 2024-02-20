

export default function UserCard(){
    return(
        <div className="relative flex flex-col justify-center bg-white w-[170px] h-[200px] space-y-3 rounded-xl p-4 shadow-lg" >
            <img 
                src="/discordFoto.jpg" 
                alt="Foto do usuário" 
                className="mx-auto rounded-[50%] w-[80px] h-[70px]"
            />
            <div className="absolute right-14 top-20 bg-green-500 border rounded-[50%] w-[13px] h-[13px]" />
            <div className="text-center">
                <h1 className="font-medium">Rolemberg Junior</h1>
                <p>Front End</p>
            </div>
        </div>
    );
}