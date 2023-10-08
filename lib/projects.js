import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ""); // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8"); // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents); // Combine the data with the id
    const excerpt = generateExcerpt(matterResult.content);

    const blogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: excerpt,
    };

    return blogPost;
  }); // Sort posts by date

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8"); // Use gray-matter to parse the post metadata section

  const matterResult = matter(fileContents); // Use remark to convert markdown into HTML string

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id

  const blogPost = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };

  return blogPost;
}

function generateExcerpt(content) {
  const words = content.split(" ");
  const excerpt = words.slice(0, 18).join(" ") + "...";
  return excerpt;
}