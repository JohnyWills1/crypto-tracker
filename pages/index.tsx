import Head from 'next/head';

function Home(): JSX.Element {
    return (
        <div className="ct--home">
            <Head>
                <title>CryptoTracker | Home</title>
            </Head>
            <h1 className="ct--home__title">Crypto-Tracker</h1>
        </div>
    );
}

export default Home;
