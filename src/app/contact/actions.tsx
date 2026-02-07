"use server";

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
        const { data, error } = await resend.emails.send({
            from: 'HAY2010 <onboarding@resend.dev>', // Change to verified domain email in production
            to: ['contact@hay2010.ma'],
            subject: `Nouveau Message: ${subject}`,
            react: <EmailTemplate 
                firstName={ firstName }
                lastName = { lastName }
                email = { email }
                phone = { phone }
                subject = { subject }
                message = { message }
            />,
        });

    if (error) {
        console.error('Resend Error:', error);
        return { success: false, error: error.message };
    }

    return { success: true, data };
} catch (err) {
    console.error('System Error:', err);
    return { success: false, error: 'Une erreur inattendue est survenue.' };
}
}
