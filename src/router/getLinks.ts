type Links = { [key: string]: string };

export async function getLinks(): Promise<Links> {
	const text = await Deno.readTextFile('./src/data/links.json');

	const links = JSON.parse(text);

	return links;
}
