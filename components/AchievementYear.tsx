'use client';

import { motion } from 'framer-motion';

interface AchievementItem {
  title: string;
  description: string;
  icon: string;
}

interface AchievementYearProps {
  year: string;
  items: AchievementItem[];
  index: number;
}

export default function AchievementYear({ year, items, index }: AchievementYearProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Year header */}
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold text-sky-600 mr-4">{year}</div>
        <div className="flex-grow h-0.5 bg-gradient-to-r from-sky-400/60 to-transparent"></div>
        <div className="ml-4 px-3 py-1 bg-sky-100 rounded-full text-sm text-sky-700">
          {items.length} {items.length === 1 ? 'Achievement' : 'Achievements'}
        </div>
      </div>

      {/* Achievements grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:border-sky-400 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-grow min-w-0">
                <h4 className="font-semibold text-slate-900 mb-1 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}