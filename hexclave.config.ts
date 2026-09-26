import type { HexclaveConfig } from "@hexclave/next";

export const config: HexclaveConfig = {
  apps: {
    installed: {
      authentication: { enabled: true },
      emails: { enabled: true },
    },
  },
  auth: { allowSignUp: true },
  "auth.password": { allowSignIn: true },
  "auth.otp": { allowSignIn: true },
};
