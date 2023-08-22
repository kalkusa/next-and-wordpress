import { getPageList } from "@/src/types/getPageList";
import "./header.css";

export default async function Header() {
  const pageList = await getPageList();
  return (
    <header>
      <nav>
        <ul>
          {pageList.map((page) => (
            <li key={page.id}>
              <a href={page.link.replace(`${process.env.WORDPRESS_URL}`, "")}>{page.title.rendered}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
