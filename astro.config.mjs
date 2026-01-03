// @ts-check
import { defineConfig } from "astro/config";

const repo = "raffaele_vicenzi_official";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: "https://draven4866.github.io",
  base: isProd ? `/${repo}/` : "/",
});