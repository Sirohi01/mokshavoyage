import { Schema, model, models } from "mongoose";

const mediaSchema = new Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, required: true },
    caption: String,
    aspectRatio: { type: String, enum: ["1:1", "4:3", "16:9", "9:16", "3:4", "custom"], default: "16:9" },
    focusPoint: {
      x: { type: Number, min: 0, max: 100, default: 50 },
      y: { type: Number, min: 0, max: 100, default: 50 }
    }
  },
  { _id: false }
);

const pageSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    banner: mediaSchema,
    sections: [
      {
        type: { type: String, required: true },
        title: String,
        body: String,
        media: [mediaSchema],
        cta: {
          label: String,
          href: String
        },
        settings: Schema.Types.Mixed
      }
    ],
    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
      ogImage: String,
      canonicalUrl: String,
      robots: { type: String, default: "index,follow" },
      schemaMarkup: Schema.Types.Mixed
    },
    status: { type: String, enum: ["draft", "scheduled", "published", "archived"], default: "draft" },
    version: { type: Number, default: 1 },
    publishedAt: Date
  },
  { timestamps: true }
);

export const PageModel = models.Page ?? model("Page", pageSchema);
