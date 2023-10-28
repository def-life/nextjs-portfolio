"use server"

import React from "react";
import { validateString } from "@/lib/utils";
import { Resend, ErrorResponse } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY)



async function sendEmail(formData: FormData) {
    console.log("running on server");
    const sender = formData.get("email")
    const message = formData.get("message")

    if (!validateString(message, 5000)) {
        return {
            error: "invalid message"
        }
    }

    if (!validateString(sender, 400)) {
        return {
            error: "invalid sender email"
        }
    }

    let data;

    try {
        data = await resend.emails.send({
            from: "Portfolio Alert <onboarding@resend.dev>",
            to: "abhishek.rana.7174@gmail.com",
            subject: "message from portfolio contact form",
            react: React.createElement(ContactFormEmail, { message: message, sender: sender }),
            reply_to: sender

        })

        if (data && typeof data === "object" && "message" in data) {
            throw new Error(data.message as string)
        }

    } catch (err: unknown) {
        return {
            error: getErrorMessage(err)
        }
    }
    return { data }
}


export default sendEmail

