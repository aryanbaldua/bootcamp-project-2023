import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type PComment = {
  comment: string;
};

type IProject = {
  title: string;
  description: string; // for preview
  comments: PComment[];
};

// mongoose schema
const projectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: Schema.Types.Mixed },
});

// defining the collection and model
const Project =
  mongoose.models["projects"] || mongoose.model("projects", projectSchema);

export default Project;
