import Head from "../../components/layout/Head";
import Layout from "../../components/layout/Layout";
import PageHeading from "../../components/layout/PageHeading";
import {BASE_URL} from "../../constants/api";
import axios from "axios";
import {AuthProvider} from "../../context/AuthContext";

export default function details({characters}) {
    console.log(characters)
    return (
        <AuthProvider>
        <Layout>
        <PageHeading heading={characters.map((char) => {
            return char.name
        })}/>
        <Head>
            <title>Details | Create Next App</title>
        </Head>

        {characters.map((character) => {
            return <div className="character">
                <p>Race&#58; {character.race}</p>
                <p>Realm&#58; {character.realm}</p>
                <p>Gender&#58; {character.gender}</p>
                <p>Born&#58; {character.birth} &#8211; Died&#58; {character.death}</p>
                <p>Spouse&#58; {character.spouse}</p>
                <p>Hair Colour&#58; {character.hair}</p>
                <a href={character.wikiUrl}>More Info&#58;{character.wikiUrl}</a>
            </div>
        })}
        </Layout>
        </AuthProvider>
    )
}

export async function getStaticPaths() {
    const token = "uNsiTyVNyRG4V5p2OZt1";
    const options = {
		headers: { Authorization: `Bearer ${token}` },
	};
    try {
        const response = await axios.get(BASE_URL, options);
        const character = response.data.docs;

        const paths = character.map((char) => ({
            params: { _id: char._id },
        }));

        console.log(paths);

        return { paths: paths, fallback: false};


    } catch (error) {
        console.log(error);
    }
    
} 


export async function getStaticProps({params}) {
    const token = "uNsiTyVNyRG4V5p2OZt1";
    const options = {
		headers: { Authorization: `Bearer ${token}` },
	};
    
    const url = `${BASE_URL}/${params._id}`;

	let characters = null;

	try {
		const response = await axios.get(url, options);
		characters = response.data.docs;
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			characters: characters,
		},
	};
}