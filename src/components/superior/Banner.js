import React from 'react';

export default function Banner() {
    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            {/*<img src="/img/banner-superior.png" className="banner-img top-banner-img" alt="Banner Superior"/>*/}
            <div className="container text-white h-100 position-absolute d-flex align-items-center top-0">
                <div>
                    <strong className="playfair fs-72 lh-96 d-block mb-4"> Atendimento <br /> Ágil e Eficaz </strong>
                    <span className="lh-24 d-block mb-4"> Atendimento individualizado, buscando criar estratégias <br /> que se adequem às necessidades de seus clientes </span>
                    <button className="btn btn-primary">Conheça Nossos Serviços</button>
                </div>
            </div>
        </div>
    )
}