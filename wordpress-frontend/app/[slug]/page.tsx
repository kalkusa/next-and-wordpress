import { getPageList } from "@/src/types/getPageList";
import Header from "../header/header";

export default async function Page({ params }: { params: { slug: string } }) {
  const pages = await getPageList();
  const page = pages.find((page) => page.slug === params.slug);
  return (
    <>
      <Header />
      <section id="page-content">
        <h1>{page?.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.content.rendered ?? "" }}></div>
      </section>
    </>
  );
}
