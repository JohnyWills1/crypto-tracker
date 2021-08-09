import Head from 'next/head';

export default function Home() {
    return (
        <div className="ct--home">
            <Head>
                <title>CryptoTracker | Home</title>
            </Head>
            <h1 className="ct--home__title">CryptoTracker</h1>
        </div>
    );
}
