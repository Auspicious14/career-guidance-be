import mongoose, { Document, Schema } from "mongoose";

interface IProfession extends Document {
  name: string;
  category: mongoose.Types.ObjectId;
}

const professionSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Profession = mongoose.model<IProfession>("Profession", professionSchema);

export default Profession;
