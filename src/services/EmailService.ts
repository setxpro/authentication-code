import axios from "axios"

export const sentEmail = async (to: string, html: string, subject: string) => {
    const { data } = await axios.post(process.env.API_URL_EMAIL_SERVICE as string, {
        to,
        from: "hash-code@bagaggio.com.br",
        html,
        subject,
        base64Attachment: "",
        base64AttachmentName: "",
        message: "",
    })
    return data;
}