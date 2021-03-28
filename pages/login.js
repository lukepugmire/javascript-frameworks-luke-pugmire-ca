import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import PageHeading from "../components/layout/PageHeading";
import LoginForm from "../components/form/LoginForm";
import { AuthProvider } from "../context/AuthContext";

export default function login() {
    return (
        <AuthProvider>
        <Layout>
            <PageHeading heading="Login"/>
        <Head>
            <title>Login | Create Next App</title>
        </Head>
        <LoginForm />
        </Layout>
        </AuthProvider>
    )
}
