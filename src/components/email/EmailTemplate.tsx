import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    lastName,
    email,
    phone,
    subject,
    message,
}) => (
    <div style={{
        fontFamily: 'sans-serif',
        color: '#333',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #eee',
        borderRadius: '8px'
    }}>
        <h2 style={{ color: '#31548E', borderBottom: '2px solid #31548E', paddingBottom: '10px' }}>
            Nouveau message de contact - HAY2010
        </h2>
        <p><strong>De :</strong> {firstName} {lastName} ({email})</p>
        {phone && <p><strong>Téléphone :</strong> {phone}</p>}
        <p><strong>Sujet :</strong> {subject}</p>
        <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px',
            borderLeft: '4px solid #F37021'
        }}>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>
        <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
            Ce message a été envoyé depuis le formulaire de contact du site HAY2010.
        </footer>
    </div>
);
