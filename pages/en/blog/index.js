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
import FixedWhats from "../../../src/components/FixedWhats";
import { formatCategories, filterPosts } from "../../../public/js/modules";

export default function Blog({ posts, textos, areas, redes, cat }) {

    function changed(e) {
        console.dir(e.target.value)
    }

    return (
        <>
            <HeadContent title="Blog - BRC Advogados" page="blog" />

            <FixedWhats />
            <TopHeader textos={textos} redes={redes} />
            <FixedHeader textos={textos} />
            <BannerSuperior title={textos.blog_banner_text_1} subtitle={textos.blog_banner_text_2} btn={false} />

            <div className="container-fluid px-0">
                <div className="container">
                    <div className="row gy-4 text-center align-items-center" id="posts-heading">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <span className="line-title w-max-content">{ textos.blog_title_1 }</span>
                            <div className="d-flex flex-column text-escuro">
                                <strong className="playfair fs-44">{ textos.blog_title_2 }</strong>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
                            <select onChange={ filterPosts } className="form-select btn-h-50 border-radius-0 w-max-content" id="select-interesse">
                                <option value="" disabled="disabled" selected="selected">{ textos.btn_interesse }</option>
                                {
                                    cat.map(category => {
                                        return (
                                            <option key={category.id} value={category.nome}>{ category.nome }</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center justify-content-md-start w-100 m-0 g-5">
                        {
                            posts.map(card => {
                                return (
                                    <PostCard img={`https://brcadv.com/api${card.cover[0].url}`}
                                              categoria={formatCategories(card.categorias)}
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
            <Footer redes={redes} textos={textos} />
        </>
    )
}

export async function getStaticProps() {
    const responsePosts  = await fetch('https://brcadv.com/api/en-posts')
    const posts = await responsePosts.json()

    const resText = await fetch('https://brcadv.com/api/en-textos')
    const textos = await resText.json()

    const resAreas = await fetch('https://brcadv.com/api/en-areas')
    const areas = await resAreas.json()

    const resRedes = await fetch('https://brcadv.com/api/redes-sociais')
    const redes = await resRedes.json()

    const resCat = await fetch('https://brcadv.com/api/categorias')
    const cat = await resCat.json()

    return {
        props: {
            posts, textos, areas, redes, cat
        },
        revalidate: 1
    }
}