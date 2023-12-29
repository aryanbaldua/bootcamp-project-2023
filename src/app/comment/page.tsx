"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Comment() {
  const formHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.user.value, e.target.comment.value);

    const response = await fetch("/api/comment", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        user: e.target.user.value,
        comment: e.target.comment.value,
        blogId: e.target.blogId.value,
      }), // body data type must match "Content-Type" header
    });

    redirect("/blog");
    console.log("form", response);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label>user</label>
        <input type="text" name="user" />
        <label>comment</label>
        <input type="text" name="comment"></input>
        <input type="hidden" value="6587881756d0ad89fe645f2b" name="blogId" />
        <input type="submit" value="add comment" />
      </form>
    </div>
  );
}
