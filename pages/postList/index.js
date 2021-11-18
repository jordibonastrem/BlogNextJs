import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PostList = ({ posts }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (posts === null) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [posts]);

  const checkIfSomeIsNull = (post) => {
    return (
      post.hasOwnProperty("title") &&
      post.hasOwnProperty("body") &&
      post.hasOwnProperty("userId") &&
      post.hasOwnProperty("userName") &&
      post.hasOwnProperty("userAvatar")
    );
  };

  const onDelete = () => {
    const avatar = JSON.parse(localStorage.getItem("Avatar"));
    if (avatar.hasOwnProperty("userId")) {
      posts.map((post) => {
        if (post.id === avatar.id) {
        }
      });
    }
  };

  return (
    <>
      <h1>Post List</h1>
      <ul>
        {/* {isLoading?<h1>Loading..</h1>} */}
        {posts.map((post) => (
          <>
            <Link href={`/postList/${post.id}`} key={post.id} passHref>
              <li>
                <h2>{post.title ?? "no title"}</h2>
                <p>{post.body ?? "No body"}</p>
                <h3>{post.userName ?? "no username"}</h3>

                <img src={post.userAvatar} width="100" height="100" alt="" />
              </li>
            </Link>

            <button type="submit" className="btn btn-primary">
              Delete
            </button>
          </>
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
