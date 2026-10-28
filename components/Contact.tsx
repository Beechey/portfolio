"use client"

import { useFormStatus } from "react-dom"
import toast from "react-hot-toast"
import { sendEmail } from "@/actions/sendEmail"
import { Rise, SectionMark, Window } from "@/components/ui/primitives"
import { person } from "@/lib/content"

const field =
  "mt-2 w-full rounded-lg border border-line bg-void px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent/60 focus:ring-2 focus:ring-accent/15"

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[28rem] w-[50rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="shell relative">
        <SectionMark
          n="06"
          kicker="Contact"
          title="Let's build something."
          note="Open to conversations about applied machine learning, agentic systems and anything where a model has to answer to somebody."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Rise>
            <p className="leading-[1.75]">
              The quickest route is email — write to{" "}
              <a href={`mailto:${person.email}`} className="link">
                {person.email}
              </a>
              , or use the form and it lands in the same inbox.
            </p>

            <dl className="mt-10 divide-y divide-line border-y border-line font-mono text-sm">
              {[
                { k: "location", v: person.location, href: null },
                { k: "github", v: "github.com/Beechey", href: person.github },
                { k: "linkedin", v: "Matthew Beechey", href: person.linkedin },
              ].map((row) => (
                <div key={row.k} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="text-muted">{row.k}:</dt>
                  <dd className="text-fg">
                    {row.href ? (
                      <a href={row.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                        {row.v} ↗
                      </a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Rise>

          <Rise delay={0.1}>
            <Window title="new_message.sh">
              <form
                id="contact-form"
                className="p-6 sm:p-8"
                action={async (formData: FormData) => {
                  const { error } = await sendEmail(formData)
                  if (error) {
                    toast.error(error)
                    return
                  }
                  toast.success("Sent — I'll reply shortly.")
                  ;(document.getElementById("contact-form") as HTMLFormElement | null)?.reset()
                }}
              >
                <label htmlFor="email" className="mono-label block">
                  <span className="text-accent">$</span> your_email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="you@somewhere.com"
                  className={field}
                />

                <label htmlFor="message" className="mono-label mt-6 block">
                  <span className="text-accent">$</span> message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={5000}
                  rows={6}
                  placeholder="What are you working on?"
                  className={`${field} resize-none leading-relaxed`}
                />

                <SubmitButton />
              </form>
            </Window>
          </Rise>
        </div>
      </div>
    </section>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-void shadow-[0_8px_30px_-6px_rgb(196_245_74/0.45)] transition-all hover:shadow-[0_8px_40px_-4px_rgb(196_245_74/0.6)] disabled:opacity-55"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && <span aria-hidden>→</span>}
    </button>
  )
}
