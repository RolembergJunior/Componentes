

export default function LoginCard(){
    return(
        <div className="w-[350px] h-[350px] bg-white rounded-xl shadow-lg space-y-3 p-4">
            <div>
                <p className="font-medium">Seja Bem-vindo</p>
                <h1 className="text-xl font-medium" >Faça o login</h1>
            </div>
            <input className="w-full h-[50px] bg-[#FAFAFA] focus:outline-none focus:ring-1 focus:ring-[#0F8E5E] rounded-md p-3" type="text" placeholder="E-mail"/>
            <p className="text-end">Esqueceu a <a className="text-[#0F8E5E] cursor-pointer">senha</a>?</p>
            <input className="w-full h-[50px] bg-[#FAFAFA] focus:outline-none focus:ring-1 focus:ring-[#0F8E5E] rounded-md p-3" type="text" placeholder="Senha"/>
            <button className="w-full h-[50px] bg-[#0F8E5E] text-white rounded-md" type="submit">
                Entrar
            </button>
        </div>
    );
}