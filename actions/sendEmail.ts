"use server";

import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: "mattbeechey@gmail.com",
    subject: "Message from portfolio",
    replyTo: email as string,
    text: message as string,
  });
};
