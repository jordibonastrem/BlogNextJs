import Link from "next/link";

const Navbar = () => (
  <ul>
    <Link href="/postList" passHref>
      <li>Post List</li>
    </Link>
    <Link href="/createPost" passHref>
      <li>Create Post</li>
    </Link>
  </ul>
);

export default Navbar;
