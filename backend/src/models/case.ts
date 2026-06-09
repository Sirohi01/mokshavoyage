import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    dueAt: Date,
    status: { type: String, enum: ["todo", "in_progress", "blocked", "done"], default: "todo" },
    priority: { type: String, enum: ["low", "normal", "high", "critical"], default: "normal" }
  },
  { _id: true }
);

const caseSchema = new Schema(
  {
    caseNumber: { type: String, required: true, unique: true },
    familyName: { type: String, required: true },
    serviceType: {
      type: String,
      enum: ["funeral", "repatriation", "travel", "spiritual", "memorial", "family_support"],
      required: true
    },
    originCountry: String,
    destinationCountry: String,
    status: { type: String, enum: ["intake", "active", "awaiting_documents", "completed", "cancelled"], default: "intake" },
    priority: { type: String, enum: ["normal", "urgent", "critical"], default: "urgent" },
    coordinator: { type: Schema.Types.ObjectId, ref: "User" },
    documents: [
      {
        label: String,
        status: { type: String, enum: ["requested", "uploaded", "verified", "rejected"], default: "requested" },
        fileUrl: String
      }
    ],
    timeline: [
      {
        title: String,
        body: String,
        visibility: { type: String, enum: ["internal", "family"], default: "family" },
        createdBy: { type: Schema.Types.ObjectId, ref: "User" },
        createdAt: Date
      }
    ],
    tasks: [taskSchema],
    payments: [{ invoiceId: String, amount: Number, currency: String, status: String }]
  },
  { timestamps: true }
);

export const CaseModel = models.Case ?? model("Case", caseSchema);
