import Blog from "@/database/blogSchema";
import connectDB from "@/helpers/db";

type Props = {
  params: { slug: string };
};

export default async function Page({ params: { slug } }) {
  // now we can access slug
  const blog = await getBlog(slug);
  console.log("page", blog);

  return (
    <>
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>{blog.description}</p>
      </div>
      <hr />
      {blog.comments.map((c) => {
        return (
          <div>
            <h4> user: {c.user}</h4>
            <p>{c.comment}</p>
          </div>
        );
      })}
      <hr />
      <a href={`/comment?id=${blog._id}`}>Add Comment</a>

      <script src="/scripts/form.js" />
    </>
  );
}

async function getBlog(slug) {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blog = await Blog.findOne({ slug }).orFail();
    console.log("found", blog);
    // send a response as the blogs as the message
    return blog;
  } catch (err) {
    return null;
  }
}
