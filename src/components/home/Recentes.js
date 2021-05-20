import React from 'react';
import PostCard from "./PostCard";
import { formatCategories, formatDate } from "../../../public/js/modules";

export default function Recentes({ posts, textos }) {

    let quantity = [0, 1, 2]

    return (
        <div className="container-fluid flex-center flex-column px-0" id="recentes">
            <div className="flex-center flex-column recentes-title">
                <span className="d-block text-dourado mb-3">POSTS RECENTES DO BLOG</span>
                <strong className="playfair text-escuro fs-44">Notícias e Artigos</strong>
            </div>
            <div className="container">
                <div className="row gy-5 justify-content-center justify-content-md-start">
                    {
                        quantity.map(card => {
                            return (
                                <PostCard img={`https://brcadv.com/strapi${posts[card].cover.url}`}
                                          categoria={formatCategories(posts[card].categorias)}
                                          data={posts[card].date}
                                          dataTest={formatDate(posts[card].date, posts[card].locale)}
                                          title={posts[card].title}
                                          body={posts[card].body.substring(0, 125) + '...'}
                                          href={`/${textos.locale.substring(0, 2)}/blog/${posts[card].id}`}

                                          key={`card-${posts[card].id}`}
                                          />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}