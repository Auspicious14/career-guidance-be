import mongoose, { Document, Schema } from "mongoose";

interface IType extends Document {
  name: string;
  profession: mongoose.Types.ObjectId;
  steps: string[];
}

const typeSchema: Schema = new Schema({
  name: { type: String, required: true },
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    required: true,
  },
  steps: { type: [String], required: true },
});

const Type = mongoose.model<IType>("Type", typeSchema);

export default Type;
