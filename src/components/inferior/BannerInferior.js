import React from 'react';
import FaleConosco from "./components/FaleConosco";
import Form from "./components/Form";

export default function BannerInferior() {
    return (
        <div id="banner-inferior">
            <div className="container">
                <div className="row w-100 align-items-center">
                    <div className="col-1" />
                    <div className=" col-4">
                        <FaleConosco />
                    </div>
                    <div className="col-1" />
                    <div className="col-5">
                        <Form />
                    </div>
                    <div className="col-1" />
                </div>
            </div>
        </div>
    )
}