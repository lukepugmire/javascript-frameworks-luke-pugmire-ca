import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import PageHeading from "../components/layout/PageHeading";
import { AuthProvider } from "../context/AuthContext";


export default function contact() {
    return (
        <AuthProvider>
        <Layout>
            <PageHeading heading="Admin"/>
            <Head>
                <title>Contact | Create Next app</title>
            </Head>

        </Layout>
        </AuthProvider>
    )
}

