import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function PostPage({
  frontmatter: { title, catgeory, data, cover_image, author, author_image },
  content,
  slug,
}) {
  return <div></div>;
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false, //take to 404 if path doesnt exist
  };
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
