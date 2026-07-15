import { headers } from "next/headers";
import { absoluteUrl } from "@/lib/utils";

/** Absolute URL derived from the incoming request's host, for use in route handlers. */
export async function requestAbsoluteUrl(path = "") {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) return absoluteUrl(path);
  const proto = h.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}${path}`;
}
