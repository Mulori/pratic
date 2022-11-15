import React, { useState } from "react";
import logo from "../../assets/img/pratic-logo.png";
import "./styles.css";

export default function FormRegister() {
  
  return (
    <div className="div-conteudo">
      <div className="mx-auto div-conteudo-form-register">
        <div className="div-header-form">
          <img src={logo} className="image-header" />
          <span className="span-header" id="span-welcome">
            Crie sua conta!
          </span>
        </div>
        <div className="div-header-form2">
          <span className="span-header" id="span-welcome2">
            Registre-se
          </span>
        </div>
        <form>
          <div className="form-group">
            <input
              type="text"
              tabIndex={0}
              class="form-control input-person"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Nome e Sobrenome"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              tabIndex={1}
              class="form-control input-person"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Seu melhor email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              tabIndex={2}
              class="form-control input-person"
              id="exampleInputPassword1"
              placeholder="Senha"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              tabIndex={3}
              class="form-control input-person"
              id="exampleInputPassword1"
              placeholder="Confirme a senha"
            />
          </div>
          <div className="form-group div-button-register">
            <button type="button" className="btn btn-light btn-register-account" data-toggle="modal" data-target="#modal">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>


        <div class="modal" tabindex="-1" role="dialog" id="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}
