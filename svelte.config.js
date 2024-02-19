import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
    }),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/PersonalBlog",
    },
    alias: {
      "@/*": "./src/lib/*",
    },
  },
  preprocess: [vitePreprocess({})],
};

export default config;
