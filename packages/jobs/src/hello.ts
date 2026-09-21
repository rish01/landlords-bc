export type HelloJobData = {
  message: string;
};

export async function handleHello(
  jobs: ReadonlyArray<{ data: HelloJobData }>,
): Promise<void> {
  for (const job of jobs) {
    console.log(`[jobs:hello] ${job.data.message}`);
  }
}
