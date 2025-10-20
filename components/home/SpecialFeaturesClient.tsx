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
  learnMore
}: {
  lang: string;
  features: Feature[];
  learnMore: string;
}) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <motion.a
          key={feature.id}
          href={feature.link}
          aria-label={learnMore}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className={`group h-full rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col ${lang === 'fa' ? 'rtl' : 'ltr'}`}
        >
          <div className="w-full aspect-video relative overflow-hidden flex-none">
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
              style={{ backgroundImage: `url(${feature.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-600 mb-6">
              {feature.description}
            </p>

            <div className={`mt-auto ${lang === 'fa' ? 'text-left' : 'text-right'}`}>
              {learnMore}
              <span className={`inline-block ml-2 transform ${lang === 'fa' ? 'rotate-180' : ''}`}>→</span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}