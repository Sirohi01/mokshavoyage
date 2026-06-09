import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, index: true },
    passwordHash: { type: String, required: true },
    roles: [{ type: String, required: true }],
    permissions: [{ type: String }],
    twoFactorEnabled: { type: Boolean, default: false },
    lastLoginAt: Date,
    status: { type: String, enum: ["active", "invited", "disabled"], default: "invited" }
  },
  { timestamps: true }
);

export const UserModel = models.User ?? model("User", userSchema);
