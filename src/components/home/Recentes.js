import React from 'react';
import PostCard from "./PostCard";

export default function Recentes() {
    return (
        <div className="container-fluid px-0">
            <div className="flex-center flex-column recentes-title">
                <span className="d-block text-dourado mb-3">POSTS RECENTES DO BLOG</span>
                <strong className="playfair text-escuro fs-44">Notícias e Artigos</strong>
            </div>
            <div className="container">
                <div className="row">
                    <PostCard img="1" categoria="Direito Trabalhista" data="Fev 10, 2021" />
                    <PostCard img="2" categoria="Contencioso Cível" data="Fev 14, 2021" />
                    <PostCard img="3" categoria="Notícia, Previdenciário" data="Fev 17, 2021" />
                </div>
            </div>
        </div>
    )
}