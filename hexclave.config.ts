import type { HexclaveConfig } from "@hexclave/next";

export const config: HexclaveConfig = {
  apps: {
    installed: {
      authentication: { enabled: true },
      emails: { enabled: true },
    },
  },
  auth: {
    allowSignUp: true,
    password: { allowSignIn: true },
    otp: { allowSignIn: true },
    oauth: {
      accountMergeStrategy: "link_method",
      providers: {
        google: { type: "google", allowSignIn: true, allowConnectedAccounts: true },
      },
    },
  },
};
