import { Button, Input } from "@lbc/ui";
import { PageIntro } from "../../components/page-intro.tsx";
import { PublicShell } from "../../components/public-shell.tsx";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PublicShell>
      <main id="main" className="flex-1">
        <PageIntro
          title="Contact"
          lede="For press, partnerships, and membership questions. Do not send tenant personal information through this form."
        />
        <form className="mx-auto flex max-w-md flex-col gap-4 px-6 pb-16">
          <Input label="Your name" name="name" autoComplete="name" />
          <Input label="Email" type="email" name="email" autoComplete="email" required />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-navy-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="rounded-[12px] border border-paper-2 bg-white px-4 py-3 text-base"
              required
            />
          </div>
          <Button type="button">Send</Button>
          <p className="text-sm text-ink-400">
            This form is not connected to a mailbox yet. Nothing is stored.
          </p>
        </form>
      </main>
    </PublicShell>
  );
}
