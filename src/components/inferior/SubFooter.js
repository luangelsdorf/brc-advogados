import React from 'react';
import Qualidades from "./components/Qualidades";
import ListaAreas from "./components/ListaAreas";
import NewsLetter from "./components/NewsLetter";

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