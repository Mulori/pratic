import React from "react"
import { Link } from "react-router-dom";
import logo from "../../assets/img/pratic-logo.png"
import './styles.css'

export default function FormLogin(){    
    return(
        <div className="div-conteudo">            
            <div className="mx-auto div-conteudo-form">
                <div className="div-header-form">
                    <img src={logo} className="image-header" />
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
                        <Link to="/register"><button type="button" className="btn btn-outline-light btn-register">Registrar-se</button></Link>
                    </div>                
                </form>
            </div>
        </div>                
    )
};