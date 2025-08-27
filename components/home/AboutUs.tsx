"use client"

import React from 'react';
import { useTranslation } from 'app/i18n';
import { useLang } from 'stores/langStore';


export default async function AboutUs(){
    const lang = useLang().lang
    const { t } = await useTranslation(lang, 'mainPage');

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="text-gray-600 leading-relaxed">
                        {t('aboutus')}
                    </p>
                </div>
            </div>
        </section>
    );
};