import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    role: 'CEO, StartupTech',
    content: 'Louka a réalisé un travail exceptionnel sur notre site web. Son sens du design et sa maîtrise technique sont impressionnants pour son âge. Très professionnel et à l\'écoute.',
    rating: 5,
    avatar: 'MD',
  },
  {
    id: 2,
    name: 'Thomas Martin',
    role: 'Directeur Marketing',
    content: 'Excellent travail sur notre identité visuelle et nos supports de communication. Créatif, réactif et force de proposition. Je recommande vivement !',
    rating: 5,
    avatar: 'TM',
  },
  {
    id: 3,
    name: 'Sophie Laurent',
    role: 'Fondatrice, Design Studio',
    content: 'Collaboration très agréable sur plusieurs projets. Louka allie créativité et rigueur technique. Ses compétences en UI/UX sont remarquables.',
    rating: 5,
    avatar: 'SL',
  },
  {
    id: 4,
    name: 'Lucas Bernard',
    role: 'Chef de projet Web',
    content: 'Un vrai talent ! Louka a su comprendre nos besoins et proposer des solutions innovantes. Son portfolio parle de lui-même.',
    rating: 5,
    avatar: 'LB',
  },
];

export function TestimonialsSection() {
  return (
    <div className="min-h-screen relative overflow-hidden py-32 flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6"
          >
            <Quote className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Témoignages</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ce qu'ils disent de moi
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Les retours de mes clients et collaborateurs sur nos projets réalisés ensemble.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-20">
                  <Quote className="w-16 h-16 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-white text-white"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-cyan-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-gray-100">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Decorative Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-2xl -z-10 rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '10+', label: 'Projets réalisés' },
            { value: '8+', label: 'Clients satisfaits' },
            { value: '100%', label: 'Satisfaction' },
            { value: '3', label: 'Ans d\'expérience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl -z-10 rounded-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
