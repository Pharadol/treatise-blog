import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responseJson = await response.json();
    setPosts(responseJson);
  }

  useEffect(() => {
    getPosts();
  }, []);

  const [searchText, setSearchText] = useState("");

  const filterPostElement = posts.filter((eachPost) => {
    return eachPost.title
      .toLocaleLowerCase()
      .includes(searchText.toLocaleLowerCase()); //check have a (searchText) includes title?
  });

  const postElements = filterPostElement.map((post) => {
    return (
      <div
        key={post.id}
        className="pl-8 border-b-2  pb-8 pt-2 hover:bg-gray-200 transition duration-300"
      >
        <h4 className="underline text-lg text-blue-500 hover:text-blue-800">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h4>
        <p>{post.body}</p>
      </div>
    );
  });

  return (
    <div className="w-11/12 md:w-9/12 mx-auto">
      <div className="flex flex-col justify-center text-center">
        <div className="flex justify-center text-center text-3xl md:text-5xl pt-16 font-bold ">
          <h1 className="text-blue-400 mr-3">Treatise</h1>
          <h2>Center</h2>
        </div>
        <input
          placeholder="search here"
          type="text"
          className="w-full mb-5 md:mb-10 mt-5 !px-3 md:px-0 border-2 h-9 text-xl"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>

      <div>{postElements}</div>
    </div>
  );
}

export default HomePage;