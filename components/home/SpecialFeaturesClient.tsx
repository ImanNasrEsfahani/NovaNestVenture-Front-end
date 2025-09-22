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
        // make the whole card an anchor via motion.a
        <motion.a
          key={feature.id}
          href={feature.link}
          aria-label={learnMoreLabel}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="relative group h-full block"
        >
          <div className={`flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${lang === 'fa' ? 'rtl' : 'ltr'}`}>
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
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              <div className="mt-auto text-right">
                {/* keep visual affordance */}
                <span className="text-blue-600 font-medium">
                  {learnMoreLabel}
                  <span className={`inline-block ml-2 transform ${lang === 'fa' ? 'rotate-180' : ''}`}>→</span>
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}