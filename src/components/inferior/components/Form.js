import React from 'react';

export default function Form({ areas }) {
    return (
        <>
            <div className="consulta-header bg-dourado text-white playfair">
                <strong className="fs-24">Solicite uma Consulta</strong>
            </div>
            <div className="consulta-body bg-white">
                <form>
                    <div className="form-floating">
                        <input type="text" id="nome-e-sobrenome" placeholder="Nome e Sobrenome" className="form-control border-radius-0" />
                        <label className="placeholder-text" htmlFor="nome-e-sobrenome">Nome e Sobrenome</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" id="mail" placeholder="Seu E-mail" className="form-control border-radius-0" />
                        <label className="placeholder-text" htmlFor="mail">Seu E-mail</label>
                    </div>

                    <div>
                        <select defaultValue="Área" id="atuacao" className="form-select border-radius-0">
                            <option value="Não informado">Área de Atuação</option>
                            <option value="Consultivo Cível">Consultivo Cível</option>
                            <option value="Direito Empresarial">Direito Empresarial</option>
                            <option value="LGPD">LGPD</option>
                            <option value="Direito Administrativo">Direito Administrativo</option>
                            <option value="Contencioso Civil">Contencioso Civil</option>
                            <option value="Trabalhista/Previdenciário">Trabalhista/Previdenciário</option>
                            <option value="Direito e Saúde">Direito e Saúde</option>
                        </select>
                    </div>

                    <div className="form-floating">
                        <textarea id="msg" placeholder="Descrição da Demanda" className="form-control border-radius-0" />
                        <label className="placeholder-text" htmlFor="msg">Sua Mensagem</label>
                    </div>

                    <button className="btn btn-primary mt-4 msg-btn btn-h-45" id="submit-btn" type="submit">
                        <span>Enviar Mensagem &nbsp; <img src="/img/seta.svg" alt="Seta" /></span>
                    </button>
                </form>
            </div>
        </>
    )
}