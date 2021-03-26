import React from 'react';
import FaleConosco from "./FaleConosco";
import Form from "./Form";

export default function BannerInferior() {
    return (
        <div id="banner-inferior">
            <div className="row align-items-center">
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
    )
}