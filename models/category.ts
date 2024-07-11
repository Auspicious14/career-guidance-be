import mongoose, { Document, Schema } from "mongoose";

interface ICategory extends Document {
  name: string;
  description: string;
}

const categorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
