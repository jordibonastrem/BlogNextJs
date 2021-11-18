import { useEffect, useState } from "react";
import Link from "next/link";

const PostList = ({ posts }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (posts === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [posts]);

  return (
    <>
      <h1>Post List</h1>
      <ul>
        {/* {isLoading?<h1>Loading..</h1>} */}
        {posts.map((post) => (
          <Link href={`/postList/${post.id}`} key={post.id} passHref>
            <li>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};
export default PostList;

export async function getServerSideProps() {
  const res = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
