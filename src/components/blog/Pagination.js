import React from 'react';

export default function Pagination() {
    return (
        <div className="d-flex justify-content-center" id="pagination">
            <a href="#" className="pag-btn fs-13"><span className="fas fa-arrow-left" /></a>

            <a href="#" className="pag-btn active">1</a>
            <a href="#" className="pag-btn">2</a>
            <a href="#" className="pag-btn">3</a>

            <a href="#" className="pag-btn fs-13"><span className="fas fa-arrow-right" /></a>
        </div>
    )
}