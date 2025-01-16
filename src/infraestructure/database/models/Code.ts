import { Schema, model } from "mongoose";
import { ICode } from "../../interfaces/ICode";

const hashCodeSchema = new Schema<ICode>(
   {
      hash: { type: String, required: true },
      userId: { type: String, required: true },
      endDate: {type: Date, required: true}
  },
  {
      timestamps: true,
  }
)

export const HashCode = model<ICode>("HashCode", hashCodeSchema);