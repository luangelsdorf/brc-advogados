import React from 'react';
import FaleConosco from "./components/FaleConosco";
import Form from "./components/Form";

export default function BannerInferior({ areas, textos }) {
    return (
        <div id="banner-inferior">
            <div className="container">
                <div className="row gy-5 align-items-center">
                    <div className="col-xl-1" />
                    <div className="col-12 col-xl-4 text-center text-xl-start">
                        <FaleConosco textos={textos} />
                    </div>
                    <div className="col-xl-1" />
                    <div className="col-12 col-xl-5">
                        <Form textos={textos} areas={areas} />
                    </div>
                    <div className="col-xl-1" />
                </div>
            </div>
        </div>
    )
}