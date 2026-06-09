import { NextResponse } from "next/server";
import { adminModules, countries, packages, processSteps, servicePillars, trustMetrics } from "@/lib/platform-data";

export async function GET() {
  return NextResponse.json({
    trustMetrics,
    services: servicePillars.map(({ icon: _icon, ...service }) => service),
    countries,
    processSteps,
    packages,
    adminModules: adminModules.map(({ icon: _icon, ...module }) => module)
  });
}
