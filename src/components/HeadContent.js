import React from 'react';
import Head from 'next/head';

export default function HeadContent(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="stylesheet" href={`/css/${props.page}.css`} />
            <link rel="icon" href="/img/favicon.png"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
            <script src="https://kit.fontawesome.com/862ff8d067.js" />
            <script src="/js/pages.js" type="module" />
            <script src="/js/main.js" type="module" />
            {/* OG Meta tags */}
            <meta property="og:url"           content={`https://brcadv.com${props.url}`} />
            <meta property="og:type"          content="website" />
            <meta property="og:title"         content={props.title} />
            <meta property="og:description"   content={props.desc.substring(3, 125) + '...'} />
            <meta property="og:image"         content={props.img} />
        </Head>
    )
}