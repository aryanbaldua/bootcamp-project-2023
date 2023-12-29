import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";
import Blog from "@/database/blogSchema";

// export default function handler(req: NextRequest, res: NextResponse) {
//   if (req.method === "POST") {
//     // Process a POST request
//     console.log("check this", req.body);
//   } else {
//     // Handle any other HTTP method
//   }
// }

export async function POST(req: NextRequest, { body }: IParams) {
  const result = await connectDB(); // function from db.ts before

  const result2 = await req.json();

  console.log("adding comment", result2);
  const { user, blogId, comment } = result2;

  try {
    const blog = await Blog.findByIdAndUpdate(blogId, {
      $push: {
        comments: {
          user: user,
          comment: comment,
          date: new Date(),
        },
      },
    }).orFail();
    console.log("result to add", blog);
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
