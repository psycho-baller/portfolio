import type { FC } from "react";
import { Card } from "./Card";
import { formatDate } from "@lib/formatDate";
import type { CollectionEntry } from "astro:content";

interface Props {
  post: CollectionEntry<"blog"> | CollectionEntry<"reflections">;
}

const ArticlePreview: FC<Props> = (props) => {
  const { post } = props;
  const { data, slug, collection, body } = post;

  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/${collection}/${slug}`}>{data.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          className="md:hidden"
          decorate
        >
          {formatDate(data.pubDate)}
        </Card.Eyebrow>
        <Card.Description>{collection === 'blog' ? data.description : body}</Card.Description>
        <Card.Cta>{collection === 'blog' ? 'Read article' : 'Expand view'}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        className="mt-1 hidden md:block"
      >
        {formatDate(data.pubDate)}
      </Card.Eyebrow>
    </article>
  );
};

export default ArticlePreview;
