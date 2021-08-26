// #region Global Imports
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AxiosPromise } from 'axios';
// #endregion Global Imports

// #region Local Imports
import { APIError, fetchCryptos } from '@Services/API/index';
// #endregion Local Imports

function Home(): JSX.Element {
    const [initialData, setInitialData] = useState<AxiosPromise<Crypto>>();

    useEffect(() => {
        async function getInitData(): Promise<void> {
            getInitData()
                .then((res: any) => {
                    setInitialData(res.data);
                })
                .catch((e: APIError) => {
                    console.error(e);
                });
        }

        getInitData();
    }, []);

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
