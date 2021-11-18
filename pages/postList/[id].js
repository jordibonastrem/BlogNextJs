import { useRouter } from "next/dist/client/router";
const DetailsPost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Details Post</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default DetailsPost;
