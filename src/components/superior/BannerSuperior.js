import React from 'react';

export default function BannerSuperior({ title, subtitle, btn }) {
    let display
    if (btn) {
        display = 'inline-block'
    } else {
        display = 'none'
    }

    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            <div className="container text-white h-100 position-absolute d-flex align-items-center top-0">
                <div>
                    <strong className="playfair fs-72 lh-96 d-block mb-4"> {title} </strong>
                    <span className="lh-24 d-block mb-4" style={{width: 570 + 'px'}}> {subtitle} </span>
                    <button className={`btn btn-primary d-${display}`}>Conheça Nossos Serviços</button>
                </div>
            </div>
        </div>
    )
}