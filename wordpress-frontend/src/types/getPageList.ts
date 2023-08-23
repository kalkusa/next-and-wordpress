export async function getPageList(): Promise<WordPressPages> {
  const url = `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages`;
  const pageList = await fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pages:", error));

  return pageList as WordPressPages;
}
