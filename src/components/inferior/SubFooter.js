import React from 'react';
import Qualidades from "./Qualidades";
import ListaAreas from "./ListaAreas";
import NewsLetter from "./NewsLetter";

export default function SubFooter() {
    return (
        <div className="sub-footer">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <Qualidades />
                    <ListaAreas />
                    <NewsLetter />
                </div>
            </div>
        </div>
    )
}