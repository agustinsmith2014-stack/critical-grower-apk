import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.vercel.critical_grower.twa",
  appName: "Critical Grower",
  webDir: "capacitor-www",
  server: {
    url: "https://critical-grower.vercel.app",
    cleartext: false,
  },
  plugins: {
    PushNotifications: { presentationOptions: ["badge", "sound", "alert"] },
  },
};

export default config;
