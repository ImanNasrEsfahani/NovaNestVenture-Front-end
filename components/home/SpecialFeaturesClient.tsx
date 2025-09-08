'use client';

import { motion } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function SpecialFeaturesClient({
  lang,
  features,
  learnMoreLabel
}: {
  lang: string;
  features: Feature[];
  learnMoreLabel: string;
}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative group h-full"
        >
          <div className={`flex flex-col h-full bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
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
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center gap-2 text-white text-sm font-medium"
                  aria-label={learnMoreLabel}
                >
                  {learnMoreLabel}
                  <span className={`transform ${lang === 'fa' ? 'rotate-180' : ''}`}>→</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-1" />
        </motion.div>
      ))}
    </div>
  );
}