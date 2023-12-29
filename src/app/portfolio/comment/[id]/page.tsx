"use client";

export default function Comment(props) {
  const formHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/portfolio/comment", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        comment: e.target.comment.value,
        projectId: e.target.projectId.value,
      }), // body data type must match "Content-Type" header
    });

    console.log("form", response);
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <label>comment</label>
        <input type="text" name="comment"></input>
        <input type="hidden" name="projectId" value={props.params.id} />
        <input type="submit" value="add comment" />
      </form>
    </div>
  );
}
