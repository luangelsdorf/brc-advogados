import React from 'react';
import TopHeader from "../../src/components/superior/TopHeader";
import FixedHeader from "../../src/components/superior/FixedHeader";
import BannerSuperior from "../../src/components/superior/BannerSuperior";
import HeadContent from "../../src/components/HeadContent";
import BannerInferior from "../../src/components/inferior/BannerInferior";
import SubFooter from "../../src/components/inferior/SubFooter";
import Footer from "../../src/components/inferior/Footer";
import PostCard from "../../src/components/home/PostCard";

export default function Post() {
    return (
        <>
            <HeadContent post={true} title="Post - BRC Advogados" page="post" />
            <TopHeader />
            <FixedHeader />
            <BannerSuperior  />

            <div className="container post-container position-relative">
                <div className="row">
                    <div className="col-1" />

                    <div className="col-10">
                        <strong className="d-block text-center text-white playfair fs-44 mx-auto mb-4" style={{width: 530 + 'px'}}>A Proteção do Patrimônio Imaterial em uma Startup</strong>
                        <div className="flex-center" id="post-date-row">
                            <span className="fas fa-calendar-alt fs-13 text-white px-2" />
                            <span className="post-date fs-13 text-white">4 de Setembro de 2019</span>
                        </div>
                        <div>
                            <div className="img-placeholder">
                                <img src="/img/destaque-post.png" alt="Imagem" className="img-fluid post-img" />
                            </div>
                            <div className="text-escuro fs-20 post-body">
                                Ao iniciar um negócio muitas vezes a observância dos aspectos legais a serem considerados ficam em segundo plano em razão de falta de tempo, conhecimento ou até mesmo recursos para contratação de um profissional especializado.
                                <br /> <br />
                                Quando falamos em startups tal situação é ainda mais acentuada, visto que as coisas acontecem com maior velocidade e muitas vezes informalidade, com o objetivo do empreendedor de tirar rapidamente ideia do papel, desenvolver um modelo de negócio inovador com o menor investimento possível, encontrar investidores que acreditem neste modelo e consolidá-lo.
                                <br /> <br />
                                Ocorre que muitas vezes os aspectos jurídicos são negligenciados e as implicações legais do novo negócio são deixadas de lado, fato que que em um primeiro momento pode parecer ser sem importância, podem trazer grandes consequências
                                <br /> <br />
                                Dentre as diversas preocupações legais que deveriam estar na lista de uma startup temos a celebração de Memorando de Entendimentos, constituição formal da empresa, planejamento tributário, a criação de política internas e documentos padrões e ainda, não menos importante, medidas para a proteção dos seus ativos imateriais.
                                <br /> <br />
                                Os empreendedores normalmente tratam de constituir a empresa, se preocupam com questões tributárias para o seu negócio, elaboram contratos de investimento/mútuo/parceria e qualquer instrumento que permita que a startup alcance o sucesso desejado, porém muitas vezes negligenciam seus ativos imateriais, que muitas vezes é o que possuem de mais valioso.
                                <br /> <br />
                                As startups em grande parte estão ligadas à área da tecnologia ou possuem a tecnologia como pilar de seu negócio e possuem como principal ativo seu modelo de negócios que normalmente é uma ideia a ser implementada por meio de um software (aplicativo/app).
                                <br /> <br />
                                Sendo a startup um modelo baseado na inovação seu valor está intrinsicamente ligado a seus ativos imateriais, seja sua marca, software ou plataforma e por isso a falta de proteção de tais ativos imateriais pode seriamente desvalorizar o empreendimento perante empreendedores.
                            </div>
                            <div className="fs-20 text-escuro">
                                <span className="d-block">Gostou do texto?</span>
                                <span className="d-block">Compartilhe nas Redes Sociais:</span>
                                <button className="btn social-btn-post facebook-btn btn-h-45">
                                    <span className="fab fa-facebook-square pe-2" />
                                    <strong>FACEBOOK</strong>
                                </button>
                                <button className="btn social-btn-post twitter-btn btn-h-45">
                                    <span className="fab fa-twitter pe-2" />
                                    <strong>TWITTER</strong>
                                </button>
                                <button className="btn social-btn-post linkedin-btn btn-h-45">
                                    <span className="fab fa-linkedin pe-2" />
                                    <strong>LINKEDIN</strong>
                                </button>
                            </div>
                        </div>

                        <hr />

                    </div>

                    <div className="col-1" />

                </div>

                <div className="d-flex justify-content-between align-items-center" id="related">
                    <div className="d-flex flex-column text-escuro">
                        <span className="line-title w-max-content">CONFIRA NOSSO CONTEÚDO</span>
                        <strong className="playfair fs-44">Notícias e Artigos</strong>
                    </div>
                    <div>
                        <a href="/blog" className="btn btn-primary btn-h-50 d-inline-flex">Ver todas as Publicações</a>
                    </div>
                </div>
                <div className="row g-5">
                    <PostCard img="1" data="Fev 15, 2021" categoria="Contencioso Cível" />
                    <PostCard img="2" data="Fev 15, 2021" categoria="Contencioso Cível" />
                    <PostCard img="3" data="Fev 15, 2021" categoria="Contencioso Cível" />
                </div>

            </div>

            <BannerInferior />
            <SubFooter />
            <Footer />
        </>
    )
}

