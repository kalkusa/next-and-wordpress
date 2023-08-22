export async function getPageList(): Promise<WordPressPages> {
  const pageList = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pages:", error));

  return pageList as WordPressPages;
}
