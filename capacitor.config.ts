import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ekkod.linkedboost",
  appName: "LinkedBoost AI",
  // Native shell loads the deployed web app. Swap to https://ekkod.com
  // once the custom domain is attached to the Vercel project.
  webDir: "www",
  server: {
    url: "https://coseade-git-claude-linkedboost-ai-xkwrz7-e3cho.vercel.app",
    cleartext: false,
  },
  backgroundColor: "#ffffff",
};

export default config;
