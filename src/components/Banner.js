import React from 'react';

export default function Banner() {
    return (
        <div className="container-fluid p-0 position-relative" id="banner">
            <img src="/img/banner-superior.png" className="banner-img top-banner-img" alt="Banner Superior"/>
            <div className="overlay top-banner-gradient"></div>
        </div>
    )
}