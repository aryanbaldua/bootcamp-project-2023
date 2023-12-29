import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import blogSchema from "@/database/blogSchema";
import Blog from "@/database/blogSchema";
import Project from "@/database/projectSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, {}: IParams) {
  const result = await connectDB(); // function from db.ts before

  const result2 = await req.json();

  console.log("adding comment", result2);
  const { projectId, comment } = result2;

  try {
    const project = await Project.findByIdAndUpdate(projectId, {
      $push: {
        comments: comment,
      },
    }).orFail();
    console.log("result to add", project);
    return NextResponse.json(project);
  } catch (err) {
    console.log(err);
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
