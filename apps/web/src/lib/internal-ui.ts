type Env = {
  INTERNAL_UI?: string;
  NODE_ENV?: string;
};

/** Staging sets INTERNAL_UI=1. Local/dev is on. Production is off unless flagged. */
export function isInternalUiEnabled(env: Env = process.env): boolean {
  if (env.INTERNAL_UI === "1") {
    return true;
  }
  if (env.INTERNAL_UI === "0") {
    return false;
  }
  return env.NODE_ENV !== "production";
}
