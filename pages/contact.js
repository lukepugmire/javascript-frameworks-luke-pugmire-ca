import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import PageHeading from "../components/layout/PageHeading";
import ContactForm from "../components/form/ContactForm";
import { AuthProvider } from "../context/AuthContext";


export default function contact() {
    return (
        <AuthProvider>
        <Layout>
            <PageHeading heading="Contact us"/>
            <Head>
                <title>Contact | Create Next app</title>
            </Head>
            <ContactForm/>
        </Layout>
        </AuthProvider>
    )
}
