type Links = { [key: string]: string };

export async function getLinks() {
	const text = await Deno.readTextFile('./src/data/links.txt');
	const lines = text.split('\n');

	const links = lines.reduce<Links>((links, textLine) => {
		const [path, redirectLink] = textLine.split('!');

		links[path] = redirectLink;

		return links;
	}, {});

	return links;
}
