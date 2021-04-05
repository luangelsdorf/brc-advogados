import React from 'react';
import PostCard from "./PostCard";

export default function Recentes({ posts, textos }) {

    let quantity = [0, 1, 2]

    return (
        <div className="container-fluid flex-center flex-column px-0" id="recentes">
            <div className="flex-center flex-column recentes-title">
                <span className="d-block text-dourado mb-3">{ textos.recentes_title_1 }</span>
                <strong className="playfair text-escuro fs-44">{ textos.recentes_title_2 }</strong>
            </div>
            <div className="container">
                <div className="row">
                    {
                        quantity.map(card => {
                            return (
                                <PostCard img={card.toString()}
                                          categoria="Direito Trabalhista"
                                          data={posts[card].data}
                                          title={posts[card].titulo_post}
                                          body={posts[card].texto_post.substring(0, 125) + '...'}
                                          href={`/blog/${posts[card].id}`}

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