import React from 'react';
import { getServerTranslation } from 'app/i18n';

import Image from 'next/image';
import Link from 'next/link';
import Instagram from '@/components/icons/footer/Instagram';
import Envelope from '@/components/icons/footer/Envelope';
import Whatsapp from '@/components/icons/footer/Whatsapp';
import LinkedIn from '@/components/icons/footer/LinkedIn';
import Facebook from '@/components/icons/footer/Facebook';
import ContactForm from '@/components/profile/ContactForm';
import { Person } from '@/types/global';


export default function Profile({ person, lang }: { person: Person, lang: string }) {

    const fullName = `${person.first_name || ''} ${person.last_name || ''}`.trim() || 'Unknown';

    const { t } = getServerTranslation(lang, 'formComponent');
    const { t: tCountry } = getServerTranslation(lang, 'countryInput');

    // Pass translations as props to client component
    const translations = {
        formTitle: t("formTitle"),
        formSubtitle: t("formSubtitle"),

        sendButton: t('sendButton'),
        sendingButton: t('sendingButton'),
        successMessage: t('successMessage'),
        failedMessage: t('failedMessage'),

        firstName: t('firstName'),
        firstNameRequired: t('firstNameRequired'),
        firstNamePlaceholder: t('firstNamePlaceholder'),

        lastName: t('lastName'),
        lastNameRequired: t('lastNameRequired'),
        lastNamePlaceholder: t('lastNamePlaceholder'),

        email: t('email'),
        emailRequired: t('emailRequired'),
        emailErrorMessage: t('emailErrorMessage'),
        emailPlaceholder: t('emailPlaceholder'),

        phoneNumber: t('phoneNumber'),
        phoneNumberRequired: t('phoneNumberRequired'),
        phoneNumberErrorMessage: t('phoneNumberErrorMessage'),
        phoneNumberPlaceholder: t('phoneNumberPlaceholder'),

        countries: tCountry('countries', { returnObjects: true }),
        countryName: tCountry('countryName'),
        countryNameRequired: tCountry('countryNameRequired'),
        countryNamePlaceholder: tCountry('countryNamePlaceholder'),

        provinceOfResidence: tCountry('provinceOfResidence'),
        provinceOfResidenceRequired: tCountry('provinceOfResidenceRequired'),
        provinceOfResidencePlaceholder: tCountry('provinceOfResidencePlaceholder'),

        cityOfResidence: tCountry('cityOfResidence'),
        cityOfResidenceRequired: tCountry('cityOfResidenceRequired'),
        cityOfResidencePlaceholder: tCountry('cityOfResidencePlaceholder'),

        TypeOfCollaboration: t('TypeOfCollaboration'),
        TypeOfCollaborationRequired: t('TypeOfCollaborationRequired'),
        TypeOfCollaborationPlaceholder: t('TypeOfCollaborationPlaceholder'),
        TypeOfCollaborationData: t('TypeOfCollaborationData', { returnObjects: true }) || [],

        FieldOfExpert: t('FieldOfExpert'),
        FieldOfExpertRequired: t('FieldOfExpertRequired'),
        FieldOfExpertPlaceholder: t('FieldOfExpertPlaceholder'),
        FieldOfExpertData: t('FieldOfExpertData', { returnObjects: true }) || [],

        FieldOfExpertOther: t('FieldOfExpertOther', { returnObjects: true }),
        FieldOfExpertOtherRequired: t('FieldOfExpertOtherRequired', { returnObjects: true }),
        FieldOfExpertOtherPlaceholder: t('FieldOfExpertOtherPlaceholder', { returnObjects: true }),

        FieldOfInterest: t('FieldOfInterest', { returnObjects: true }),
        FieldOfInterestRequired: t('FieldOfInterestRequired', { returnObjects: true }),
        FieldOfInterestPlaceholder: t('FieldOfInterestPlaceholder', { returnObjects: true }),
        FieldOfInterestData: t('FieldOfInterestData', { returnObjects: true }) || [],

        FieldOfInterestOther: t('FieldOfInterestOther', { returnObjects: true }),
        FieldOfInterestOtherRequired: t('FieldOfInterestOtherRequired', { returnObjects: true }),
        FieldOfInterestOtherPlaceholder: t('FieldOfInterestOtherPlaceholder', { returnObjects: true }),

        message: t('message'),
        messageRequired: t('messageRequired'),
        messagePlaceholder: t('messagePlaceholder'),
        messagePlaceholderErrorMessage: t('messagePlaceholderErrorMessage'),
    }

    return (
        <div className="max-w-responsive mx-auto w-full py-12 px-4 lg:px-8" >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column - 1/3 */}
                <aside className="w-full lg:w-1/3 bg-white rounded-xl shadow p-6 flex flex-col items-center gap-6">
                    <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-white shadow-md">
                        <Image
                            src={person.thumbnail || '/static/images/our-team/header.webp'}
                            alt={`${fullName} thumbnail`}
                            fill
                            className="object-cover"
                            sizes="160px"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-2xl font-semibold">{fullName}</h1>
                        <p className="text-sm text-gray-500 mt-1">{person.job_title || '—'}</p>
                    </div>

                    <div className="w-full space-y-3 text-sm text-gray-700">
                        <div>
                            <h4 className="text-xs text-gray-400 uppercase mb-1">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                                {(person.skills?.length ? person.skills : ['Not specified']).map((s, i) => (
                                    <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs text-gray-400 uppercase mb-1">Interests</h4>
                            <div className="flex flex-wrap gap-2">
                                {(person.interests?.length ? person.interests : ['—']).map((s, i) => (
                                    <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <h4 className="text-xs text-gray-400 uppercase">Location</h4>
                                <p className="mt-1">{person.location || '—'}</p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 uppercase">Education</h4>
                                <p className="mt-1">{person.education || '—'}</p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 uppercase">Company</h4>
                                <p className="mt-1">{person.company || '—'}</p>
                            </div>
                            <div>
                                <h4 className="text-xs text-gray-400 uppercase">Age / Gender</h4>
                                <p className="mt-1">{(person.stage || '—') + (person.gender ? ` / ${person.gender}` : '')}</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xs text-gray-400 uppercase mb-2">Preferred Contact</h4>
                            <div className="flex items-center gap-3 justify-center">
                                {person.email ? (
                                    <Link href={`mailto:${person.email}`} target="_blank" className="text-gray-600 hover:text-primary">
                                        <Envelope />
                                    </Link>
                                ) : null}
                                {person.whatsapp ? (
                                    <Link href={person.whatsapp} target="_blank" className="text-gray-600 hover:text-primary">
                                        <Whatsapp />
                                    </Link>
                                ) : null}
                                {person.linkedin ? (
                                    <Link href={person.linkedin} target="_blank" className="text-gray-600 hover:text-primary">
                                        <LinkedIn />
                                    </Link>
                                ) : null}
                                {person.instagram ? (
                                    <Link href={person.instagram} target="_blank" className="text-gray-600 hover:text-primary">
                                        <Instagram />
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Right Column - 2/3 */}
                <main className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-xl font-semibold mb-4">About Me</h2>
                        <div className="prose max-w-none text-gray-700">
                            <p>
                                {person.about ||
                                    `Hi, I'm ${fullName}. ${person.job_title ? `I work as ${person.job_title}` : 'I am a professional'} — passionate about building products, mentoring startups and collaborating across teams.`}
                            </p>
                            <p>
                                {person.skills?.length
                                    ? `My strengths include ${person.skills.slice(0, 5).join(', ')}. I value continuous learning, collaboration, and delivering real impact.`
                                    : `I focus on learning, collaboration and creating measurable impact.`}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-xl shadow p-6">
                        <h3 className="text-lg font-medium mb-4">Links & Projects</h3>
                        <ul className="space-y-3">
                            {person.websites?.length ? (
                                person.websites.map((w: any, i: number) => (
                                    <li key={i} className="flex items-center justify-between p-3 rounded-md border">
                                        <div className="flex items-center gap-3">
                                            {w.logo ? (
                                                <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-50">
                                                    <Image src={w.logo} width={48} height={48} alt={w.title || 'logo'} className="object-cover" />
                                                </div>
                                            ) : null}
                                            <div>
                                                <div className="font-medium">{w.title || w.url}</div>
                                                <div className="text-xs text-gray-500">{w.description || w.url}</div>
                                            </div>
                                        </div>
                                        <Link href={w.url || '#'} target="_blank" className="text-sm text-blue-600 hover:underline">
                                            Visit
                                        </Link>
                                    </li>
                                ))
                            ) : (
                                <li className="text-sm text-gray-500">No public links</li>
                            )}
                        </ul>
                    </div>

                    <div className="mt-6 bg-white rounded-xl shadow p-6">
                        <h3 className="text-lg font-medium mb-4">Contact {person.first_name || ''}</h3>
                        <ContactForm translations={translations} lang={lang} />
                    </div>
                </main>
            </div>
        </div >
    );
};