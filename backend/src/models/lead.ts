import { Schema, model, models } from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    serviceNeed: { type: String, required: true, trim: true },
    country: { type: String, trim: true },
    urgency: { type: String, enum: ["normal", "urgent", "critical"], default: "urgent" },
    source: {
      type: String,
      enum: ["website", "whatsapp", "referral", "hospital", "doctor", "ngo", "partner", "direct"],
      default: "website"
    },
    pipelineStage: {
      type: String,
      enum: ["new", "contacted", "qualified", "proposal_sent", "negotiation", "booked", "completed", "lost"],
      default: "new"
    },
    assignedTo: { type: Schema.Types.ObjectId, ref: "User" },
    notes: [{ body: String, createdBy: { type: Schema.Types.ObjectId, ref: "User" }, createdAt: Date }]
  },
  { timestamps: true }
);

export const LeadModel = models.Lead ?? model("Lead", leadSchema);
