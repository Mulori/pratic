import React from "react"
import './styles.css'

export default function FormLogin(){
    return(
        <div className="div-conteudo">            
            <div className="mx-auto div-conteudo-form">
                <div className="div-header-form">
                    <span className="span-header" id="span-welcome" >Olá, bem-vindo!</span>
                    <span className="span-header" >Crie uma conta ou realize o login para acessar o sistema.</span>
                </div>   
                <div className="div-header-form2">
                    <span className="span-header" id="span-welcome2" >Entrar</span>
                </div>             
                <form>
                    <div className="form-group">
                        <input type="email" class="form-control input-person" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type="password" class="form-control input-person" id="exampleInputPassword1" placeholder="Senha" />
                    </div>   
                    <div className="form-group div-button">
                        <button className="btn btn-light btn-login" type="submit">Acessar</button>
                        <button type="button" className="btn btn-outline-light btn-register">Registre-se</button>
                    </div>               
                </form>
            </div>
        </div>
        
    )
};