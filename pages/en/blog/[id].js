import HeadContent from "../../../src/components/HeadContent";
import TopHeader from "../../../src/components/superior/TopHeader";
import FixedHeader from "../../../src/components/superior/FixedHeader";
import BannerSuperior from "../../../src/components/superior/BannerSuperior";
import PostCard from "../../../src/components/home/PostCard";
import BannerInferior from "../../../src/components/inferior/BannerInferior";
import SubFooter from "../../../src/components/inferior/SubFooter";
import Footer from "../../../src/components/inferior/Footer";
import React from "react";
import Link from 'next/link';
import FixedWhats from "../../../src/components/FixedWhats";

export default function Post({ post, posts, textos, areas, redes }) {
    let quantity = [0, 1, 2]
    return (
        <>
            <HeadContent post={true} title="Post - BRC Advogados" page="post" />
            <FixedWhats />
            <TopHeader textos={textos} redes={redes} />
            <FixedHeader textos={textos} />
            <BannerSuperior textos={textos}  />

            <div className="container post-container position-relative">
                <div className="row">
                    <div className="col-1" />

                    <div className="col-10">
                        <strong className="d-block text-center text-white playfair fs-44 mx-auto mb-4" style={{maxWidth: 530 + 'px'}}>{ post.titulo_post }</strong>
                        <div className="flex-center" id="post-date-row">
                            <svg width="12" height="12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="fs-13 text-white mb-1 mx-2 svg-inline--fa fa-calendar-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                            <span className="post-date fs-13 text-white">{ post.data }</span>
                        </div>
                        <div>
                            <div className="img-placeholder">
                                <img src={`http://localhost:1337${post.cover[0].url}`} alt="Imagem" className="w-100 h-100 object-fit-cover" />
                            </div>
                            <div className="text-escuro fs-20 post-body" id="texto-post" dangerouslySetInnerHTML={{__html: post.texto_post}} />
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

                <div className="row gy-4 text-center align-items-center" id="related">
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <span className="line-title w-max-content">{ textos.recentes_title_1 }</span>
                        <div className="d-flex flex-column text-escuro">
                            <strong className="playfair fs-44">{ textos.recentes_title_2 }</strong>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-center">
                        <Link href={`/${textos.lang}/blog`}>
                            <a className="btn btn-primary btn-h-50 d-inline-flex justify-content-center" id="ver-todas">{ textos.btn_ver_todas }<img src="/img/seta.svg" alt="Seta" /></a>
                        </Link>
                    </div>
                </div>
                <div className="row g-5 m-0 w-100 justify-content-center">
                    {
                        quantity.map(card => {
                            return (
                                <PostCard img={`http://localhost:1337${posts[card].cover[0].url}`}
                                          categoria="Direito Trabalhista"
                                          data={posts[card].data}
                                          title={posts[card].titulo_post}
                                          body={posts[card].texto_post.substring(0, 125) + '...'}
                                          href={`/${textos.lang}/blog/${posts[card].id}`}
                                          lerMais={textos.ler_mais}

                                          key={`card-${posts[card].id}`}
                                />

                            )
                        })
                    }
                </div>

            </div>

            <BannerInferior textos={textos} />
            <SubFooter textos={textos} areas={areas} redes={redes} />
            <Footer textos={textos} />
        </>
    )
}


export async function getStaticPaths() {
    const response = await fetch('http://localhost:1337/en-posts')
    const posts = await response.json()
    console.log(posts)

    const paths = posts.map((post) => ({
        params: { id: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:1337/en-posts/${params.id}`)
    const post = await res.json()

    const resp = await fetch('http://localhost:1337/en-posts')
    const posts = await resp.json()

    const resText = await fetch('http://localhost:1337/en-textos')
    const textos = await resText.json()

    const resAreas = await fetch('http://localhost:1337/en-areas')
    const areas = await resAreas.json()

    const resRedes = await fetch('http://localhost:1337/redes-sociais')
    const redes = await resRedes.json()

    return {
        props: {
            post, posts, textos, areas, redes
        },
        revalidate: 1
    }
}