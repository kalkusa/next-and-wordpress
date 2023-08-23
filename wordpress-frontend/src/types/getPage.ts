export async function getPage(id: string): Promise<WordPressPage> {
  const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages/${id}`;
  const pageList = await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pages:", error));

  return pageList as WordPressPage;
}
