export function assertDevSuperadminEnv(
  env: Record<string, string | undefined> = process.env,
): void {
  const email = env.DEV_SUPERADMIN_EMAIL;
  const password = env.DEV_SUPERADMIN_PASSWORD;
  const set = Boolean(email || password);
  if (env.NODE_ENV === "production" && set) {
    throw new Error(
      "DEV_SUPERADMIN_* is forbidden when NODE_ENV=production. Use staff_invites.",
    );
  }
}

export function hasDevSuperadmin(env: Record<string, string | undefined> = process.env): boolean {
  return Boolean(env.DEV_SUPERADMIN_EMAIL && env.DEV_SUPERADMIN_PASSWORD);
}
