import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import { z } from "zod";
import { env } from "./src/config/env";
import { CaseModel } from "./src/models/case";
import { LeadModel } from "./src/models/lead";
import { PageModel } from "./src/models/page";

const app = express();

app.set("trust proxy", env.TRUST_PROXY);
app.disable("x-powered-by");

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: env.NODE_ENV === "production" ? undefined : false
  })
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  })
);

app.use(express.json({ limit: env.JSON_BODY_LIMIT }));

app.get("/health", (_request, response) => {
  response.json({ ok: true, service: "moksha-voyage-api" });
});

app.get("/api/leads", async (_request, response) => {
  const leads = await LeadModel.find().sort({ createdAt: -1 }).limit(50);
  response.json({ leads });
});

app.post("/api/leads", async (request, response) => {
  const schema = z.object({
    name: z.string().min(2),
    phone: z.string().min(7),
    serviceNeed: z.string().min(3),
    country: z.string().optional(),
    urgency: z.enum(["normal", "urgent", "critical"]).default("urgent"),
    source: z.enum(["website", "whatsapp", "referral", "hospital", "doctor", "ngo", "partner", "direct"]).default("website")
  });

  const payload = schema.parse(request.body);
  const lead = await LeadModel.create(payload);
  response.status(201).json({ lead });
});

app.get("/api/cases", async (_request, response) => {
  const cases = await CaseModel.find().sort({ updatedAt: -1 }).limit(50);
  response.json({ cases });
});

app.get("/api/pages/:slug", async (request, response) => {
  const page = await PageModel.findOne({ slug: request.params.slug, status: "published" });

  if (!page) {
    response.status(404).json({ error: "Page not found" });
    return;
  }

  response.json({ page });
});

async function start() {
  await mongoose.connect(env.MONGODB_URI);
  app.listen(env.API_PORT, env.API_HOST, () => {
    console.log(`Moksha Voyage API listening on http://${env.API_HOST}:${env.API_PORT}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
