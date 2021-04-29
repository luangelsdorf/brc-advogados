import React from 'react';

export default function BannerSuperior({ title, subtitle, btn_text, btn, post }) {
    let displayBtn
    if (btn) {
        displayBtn = 'inline-flex'
    } else {
        displayBtn = 'none'
    }

    let displayContainer
    if (post) {
        displayContainer = 'none'
    } else {
        displayContainer = 'flex'
    }

    return (
        <div className="container-fluid p-0 position-relative d-flex justify-content-center" id="banner-superior">
            <div className={`container px-5 px-sm-0 text-white h-100 position-absolute d-${displayContainer} align-items-center top-0`}>
                <div id="banner-content">
                    <strong className="playfair fs-72 d-block mb-4 break-spaces">{ title }</strong>
                    <span className="lh-24 d-block mb-4 break-spaces">{ subtitle }</span>
                    <a href="/#areas-de-atuacao" className={`btn btn-primary btn-h-50 d-${displayBtn}`}>{ btn_text }</a>
                </div>
            </div>
        </div>
    )
}