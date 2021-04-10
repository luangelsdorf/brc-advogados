import React from 'react';
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import HeadContent from "../../../src/components/HeadContent";
import PostCard from "../../../src/components/home/PostCard";
import Pagination from "../../../src/components/blog/Pagination";

export default function Blog({ posts, textos, areas, redes }) {
    return (
        <>
            <HeadContent title="Blog - BRC Advogados" page="blog" />

            <TopHeader textos={textos} redes={redes} />
            <FixedHeader textos={textos} />
            <BannerSuperior title={textos.blog_banner_text_1} subtitle={textos.blog_banner_text_2} btn={false} />

            <div className="container-fluid px-0">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center" id="posts-heading">
                        <div className="d-flex flex-column text-escuro">
                            <span className="line-title w-max-content">{ textos.blog_title_1 }</span>
                            <strong className="playfair fs-44">{ textos.blog_title_2 }</strong>
                        </div>
                        <div>
                            <select className="form-select btn-h-50 border-radius-0" id="select-interesse">
                                <option value="Interesse">{ textos.btn_interesse }</option>
                            </select>
                        </div>
                    </div>
                    <div className="row g-5">
                        {
                            posts.map(card => {
                                return (
                                    <PostCard img={`http://localhost:1337${card.cover[0].url}`}
                                              categoria="Direito Trabalhista"
                                              data={card.data}
                                              title={card.titulo_post}
                                              body={card.texto_post.substring(0, 125) + '...'}
                                              href={`/${textos.lang}/blog/${card.id}`}
                                              lerMais={textos.ler_mais}
                                              key={`card-${card.id}`}
                                    />

                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Pagination />

            <BannerInferior textos={textos} />
            <SubFooter textos={textos} areas={areas} redes={redes} />
            <Footer textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responsePosts  = await fetch('http://localhost:1337/en-posts')
    const posts = await responsePosts.json()

    const resText = await fetch('http://localhost:1337/en-textos')
    const textos = await resText.json()

    const resAreas = await fetch('http://localhost:1337/en-areas')
    const areas = await resAreas.json()

    const resRedes = await fetch('http://localhost:1337/redes-sociais')
    const redes = await resRedes.json()

    return {
        props: {
            posts, textos, areas, redes
        },
        revalidate: 1
    }
}