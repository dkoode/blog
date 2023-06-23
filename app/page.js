import getPostMetaData from "@/components/getPostMetaData";
import PostPreview from "@/components/PostPreview";

// Take the markdown files from /posts
function Home() {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post)=>(
      <PostPreview key={post.slug} post={post}/>
  ))
  return (
    <div className={`w-full h-screen bg-gray-950  text-gray-200 p-[20px] grid grid-cols-1 auto-rows-max sm:grid-cols-2 md:grid-cols-3 gap-8  container`}>
      {postPreviews}
    </div>
  )
}

export default Home;