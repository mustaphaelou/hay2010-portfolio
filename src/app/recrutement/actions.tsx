"use server";

import { Resend } from 'resend';
import { RecruitmentEmailTemplate } from '@/components/email/RecruitmentEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendRecruitmentEmail(formData: FormData) {
    const data = {
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        address: formData.get('address') as string,
        linkedin: formData.get('linkedin') as string,
        website: formData.get('website') as string,
        jobTitle: formData.get('job-title') as string,
        company: formData.get('company') as string,
        startDate: formData.get('start-date') as string,
        endDate: formData.get('end-date') as string,
        description: formData.get('description') as string,
        education: formData.get('education') as string,
        salary: formData.get('salary') as string,
        availability: formData.get('availability') as string,
        contractTypes: formData.getAll('contract-type') as string[],
        message: formData.get('message') as string,
    };

    try {
        const { data: result, error } = await resend.emails.send({
            from: 'Recrutement HAY2010 <onboarding@resend.dev>', // Change to verified domain in production
            to: ['contact@hay2010.ma'],
            subject: `Nouvelle Candidature: ${data.firstname} ${data.lastname} - ${data.jobTitle}`,
            react: <RecruitmentEmailTemplate {...data} />,
        });

        if (error) {
            console.error('Resend Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, data: result };
    } catch (err) {
        console.error('System Error:', err);
        return { success: false, error: 'Une erreur inattendue est survenue.' };
    }
}
