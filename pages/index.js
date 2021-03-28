import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import PageHeading from "../components/layout/PageHeading";
import { AuthProvider } from "../context/AuthContext";


export default function Home({characters}) {

console.log(characters);

	return (
		<AuthProvider>
		<Layout>
			<PageHeading heading="Home"/>
			<Head title="Lotr Characters | Home" />
            {characters.map((character) => {
	           return <Link key={character._id} href={`detail/${character._id}`}>
		       <div className="char_card" key={character._id}>
		       <h2>{character.name}</h2>
		       <p>Race&#58; {character.race}</p>
		       <p>{character.gender}</p>
		       </div>
		    </Link>
	        })}
		</Layout>
		</AuthProvider>
	);
}

export async function getStaticProps() {
	let characters = [];
	const token = "uNsiTyVNyRG4V5p2OZt1";
    const options = {
		headers: { Authorization: `Bearer ${token}` },
	};

	try {
		const response = await axios.get(BASE_URL, options);
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

