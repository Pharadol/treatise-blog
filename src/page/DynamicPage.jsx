import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DynamicPage() {
  const { postId } = useParams();

  //-----Post
  const [post, setPost] = useState({}); //มีตัวเดียว
  const [comments, setComments] = useState([]); //มีหลายตัว

  async function getAPost(thePostId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${thePostId}`
    );
    const responseJson = await response.json();
    setPost(responseJson);
  }

  //--Comment
  async function getComments(thePostId) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${thePostId}/comments`
    );
    const responseJson = await response.json();
    setComments(responseJson);
  }

  useEffect(() => {
    getAPost(postId); //postId = thePost
    getComments(postId);
  }, [postId]); //if postId เปลี่ยนแปลง จะโหลดข้อมูลใหม่ด้วย getPost

  const commentElements = comments.map((comment) => {
    return (
      <div
        key={comment.id}
        className=" container text-left  pt-6 pb-4 text-sm border-b-2 border-gray-400 border-opacity-50"
      >
        <p className="font-bold pb-2 ">{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  });

  return (
    <section className="text-white mx-auto w-11/12 md:w-9/12 ">
      <Link to={`/`} className="hover:underline">{"<back"}</Link>
      <div className="bg-gray-400 text-black md:px-5 pt-10 pb-8 md:pb-16 pl-4 mt-4">
        <h1 className="underline text-xl md:text-2xl mb-5">{post.title}</h1>
        <p className="px-2">{post.body}</p>
      </div>
      <h4 className="container pt-4 pb-2 underline">
        {comments.length} comments
      </h4>
      {commentElements}
    </section>
  );
}
export default DynamicPage;
