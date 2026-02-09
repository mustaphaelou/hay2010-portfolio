import * as React from 'react';

interface RecruitmentEmailTemplateProps {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    address?: string;
    linkedin?: string;
    website?: string;
    jobTitle?: string;
    company?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    education?: string;
    salary?: string;
    availability?: string;
    contractTypes?: string[];
    message?: string;
}

export const RecruitmentEmailTemplate: React.FC<Readonly<RecruitmentEmailTemplateProps>> = ({
    firstname,
    lastname,
    email,
    phone,
    address,
    linkedin,
    website,
    jobTitle,
    company,
    startDate,
    endDate,
    description,
    education,
    salary,
    availability,
    contractTypes,
    message,
}) => (
    <div style={{
        fontFamily: 'sans-serif',
        color: '#333',
        lineHeight: '1.6',
        maxWidth: '700px',
        margin: '0 auto',
        padding: '30px',
        border: '1px solid #eee',
        borderRadius: '8px'
    }}>
        <h2 style={{ color: '#171a20', borderBottom: '2px solid #3e6ae1', paddingBottom: '10px' }}>
            Nouvelle Candidature - HAY2010
        </h2>

        <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#3e6ae1', fontSize: '18px', marginBottom: '10px' }}>Informations Personnelles</h3>
            <p><strong>Candidat :</strong> {firstname} {lastname}</p>
            <p><strong>Email :</strong> {email}</p>
            <p><strong>Téléphone :</strong> {phone}</p>
            {address && <p><strong>Adresse :</strong> {address}</p>}
            {linkedin && <p><strong>LinkedIn :</strong> <a href={linkedin}>{linkedin}</a></p>}
            {website && <p><strong>Portfolio :</strong> <a href={website}>{website}</a></p>}
        </section>

        <section style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
            <h3 style={{ color: '#3e6ae1', fontSize: '18px', marginBottom: '10px' }}>Expérience & Formation</h3>
            <p><strong>Poste actuel/dernier :</strong> {jobTitle || 'Non spécifié'}</p>
            <p><strong>Entreprise :</strong> {company || 'Non spécifié'}</p>
            <p><strong>Période :</strong> {startDate} à {endDate || 'Présent'}</p>
            <p><strong>Formation :</strong> {education}</p>
            {description && (
                <div style={{ marginTop: '10px' }}>
                    <strong>Responsabilités :</strong>
                    <p style={{ fontStyle: 'italic', margin: '5px 0' }}>{description}</p>
                </div>
            )}
        </section>

        <section style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#3e6ae1', fontSize: '18px', marginBottom: '10px' }}>Détails de la Candidature</h3>
            <p><strong>Prétention salariale :</strong> {salary} DH/mois</p>
            <p><strong>Disponibilité :</strong> {availability}</p>
            <p><strong>Type(s) de contrat :</strong> {contractTypes?.join(', ')}</p>
        </section>

        {message && (
            <section style={{ marginTop: '20px', padding: '15px', borderLeft: '4px solid #3e6ae1', backgroundColor: '#f0f4ff' }}>
                <h3 style={{ color: '#3e6ae1', fontSize: '18px', marginBottom: '10px' }}>Message de motivation</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
            </section>
        )}

        <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888', textAlign: 'center' }}>
            Cette candidature a été soumise via le portail recrutement du site HAY2010.
        </footer>
    </div>
);
