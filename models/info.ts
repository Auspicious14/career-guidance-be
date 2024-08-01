import mongoose, { Document, Schema } from "mongoose";

interface IInfo extends Document {
  name: string;
  about: string;
  description: string;
  activity: string[];
  careerRecruiter: string[];
  moreInfo: {
    educationalRequirements: string;
    certifications: string[];
    professionalAssociations: string[];
  };
}

const infoSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  about: { type: String },
  activity: [{ type: String }],
  careerRecrruiter: [{ type: String }],
  moreInfo: {
    educationalRequirements: { type: String },
    certifications: [{ type: String }],
    professionalAssociations: [{ type: String }],
  },
});

const InfoModel = mongoose.model<IInfo>("info", infoSchema);

export default InfoModel;
