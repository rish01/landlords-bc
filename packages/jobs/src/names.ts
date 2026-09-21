export const JOB_NAMES = {
  hello: "hello",
} as const;

export type JobName = (typeof JOB_NAMES)[keyof typeof JOB_NAMES];
