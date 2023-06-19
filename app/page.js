import fs from "fs"
import Link from "next/link";
import matter from "gray-matter"

// Take the markdown files from /posts
const getPostMetaData = () =>{
  const folder = "posts/"
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  //Get grey-matter data from eachfile
  const posts = markdownPosts.map((fileName)=>{
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return{
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", "")
    }
  })
  return posts;
}
export default function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post)=>(
      // eslint-disable-next-line react/jsx-key
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
        <p>{post.subtitle}</p>
        <p>{post.date}</p>
      </Link>
    </div>
  ))
  return (
    <div className={`w-full h-screen bg-gray-900 text-gray-200 p-[20px]`}>
      {postPreviews}
    </div>
  )
}
