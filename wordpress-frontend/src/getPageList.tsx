type WordPressPage = {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    footnotes: string;
  };
  _links: {
    self: {
      href: string;
    }[];
    collection: {
      href: string;
    }[];
    about: {
      href: string;
    }[];
    author: {
      embeddable: boolean;
      href: string;
    }[];
    replies: {
      embeddable: boolean;
      href: string;
    }[];
    "version-history": {
      count: number;
      href: string;
    }[];
    "wp:attachment": {
      href: string;
    }[];
    curies: {
      name: string;
      href: string;
      templated: boolean;
    }[];
  };
};

type WordPressPages = WordPressPage[];

export async function getPageList(): Promise<WordPressPages> {
  const pageList = await fetch(`${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages`)
    .then((response) => response.json())
    .catch((error) => console.error("Error fetching pages:", error));

  return pageList as WordPressPages;
}
