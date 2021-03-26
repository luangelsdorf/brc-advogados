import React from 'react';
import Head from 'next/head';

export default function HeadContent(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <link rel="icon" href="/img/favicon.png"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" />
            <script src="https://kit.fontawesome.com/862ff8d067.js" />
        </Head>
    )
}