'use client';
import { getServerTranslation } from 'app/i18n/client';
import { useLang } from 'stores/langStore';
import { motion } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  link: string;
}

export default function SpecialFeatures() {
  const lang = useLang().lang;
  const { t } = getServerTranslation(lang, 'mainPage');
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="relative inline-block">
            {t('specialFeatures.title')}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {t('specialFeatures.features', { returnObjects: true }).map((feature: Feature, index: number) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className={`flex flex-col h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
                <div className="w-full aspect-video relative overflow-hidden">
                  <div
                    className="size-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <div className="flex flex-col flex-grow p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base mb-6">
                    {feature.description}
                  </p>
                  <div className="mt-auto">
                    <button
                      onClick={() => window.location.href = feature.link}
                      className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                    >
                      {t('specialFeatures.learnMore')}
                      <span className={`transform ${lang === 'fa' ? 'rotate-180' : ''}`}>→</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
