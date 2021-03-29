import React from 'react';
import TopHeader from "../../src/components/superior/TopHeader";
import FixedHeader from "../../src/components/superior/FixedHeader";
import BannerSuperior from "../../src/components/superior/BannerSuperior";
import BannerInferior from "../../src/components/inferior/BannerInferior";
import SubFooter from "../../src/components/inferior/SubFooter";
import Footer from "../../src/components/inferior/Footer";
import HeadContent from "../../src/components/HeadContent";
import PostCard from "../../src/components/home/PostCard";
import Pagination from "../../src/components/blog/Pagination";

export default function Blog() {
    return (
        <>
            <HeadContent title="Blog - BRC Advogados" page="blog" />

            <TopHeader />
            <FixedHeader />
            <BannerSuperior title="Nosso Blog" subtitle={<span>Aqui você confere novidades sobre áreas e setores específicos, incluindo <br/> eventos, comentários sobre leis e questões regulatórias, entre outros assuntos.</span>} btn={false} />

            <div className="container-fluid px-0">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center" id="posts-heading">
                        <div className="d-flex flex-column text-escuro">
                            <span className="line-title w-max-content">CONFIRA NOSSO CONTEÚDO</span>
                            <strong className="playfair fs-44">Notícias e Artigos</strong>
                        </div>
                        <div>
                            <select className="form-select" id="select-interesse">
                                <option value="Interesse">Selecione o seu Interesse</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-5">
                        <PostCard img="1" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="2" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="3" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="3" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="2" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="1" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="2" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="1" data="Fev 15, 2021" categoria="Contencioso Cível" />
                        <PostCard img="2" data="Fev 15, 2021" categoria="Contencioso Cível" />
                    </div>
                </div>
            </div>

            <Pagination />

            <BannerInferior />
            <SubFooter />
            <Footer />
        </>
    )
}