import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, Briefcase } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    year: '2025',
    title: 'Stage de deuxième année',
    organization: 'Lycée A. Renoir',
    type: 'Stage en BUT',
    description: 'Stage de deuxième année en communication et design graphique.',
    icon: '🎓',
    color: 'from-cyan-500 to-blue-500',
    current: true,
  },
  {
    year: '2024',
    title: 'Fin du Lycée Georges Cabanis',
    organization: 'Communication site',
    type: 'Projet SAE - Blason',
    description: 'Réalisation d\'un site de communication avec création d\'un blason personnalisé.',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2024',
    title: 'IUT du Limousin Limoges 87',
    organization: 'Présentation SAE',
    type: 'Projet académique',
    description: 'Présentations de situations d\'apprentissage et d\'évaluation en multimédia.',
    icon: '📊',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    year: '2023',
    title: 'Baccalauréat Technologique',
    organization: 'Lycée',
    type: 'Diplôme',
    description: 'Obtention du baccalauréat avec une orientation vers le numérique et la création.',
    icon: '🎓',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    year: '2022',
    title: 'Lycée Georges Cabanis, Brive 19',
    organization: 'Projet de recherche STDD',
    type: 'Projet scolaire',
    description: 'Premier projet de recherche en sciences et technologies du design.',
    icon: '🔬',
    color: 'from-cyan-500 to-blue-500',
  },
];

const currentEducation = {
  degree: 'BUT Métiers du Multimédia et de l\'Internet',
  school: 'IUT du Limousin',
  location: 'Limoges, 87000, France',
  period: '2023 - 2026',
  description: 'Formation complète en design graphique, motion design, développement web et communication digitale.',
  progress: 60,
  skills: [
    'Design graphique',
    'Motion design',
    'Développement Web',
    'Audiovisuel',
    'Communication',
    'UI/UX Design',
  ],
};

const certifications = [
  {
    name: 'Permis B',
    issuer: 'Permis de conduire',
    icon: '🚗',
    year: '2024',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Bac Technologique',
    issuer: 'Éducation Nationale',
    icon: '🎓',
    year: '2023',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden py-32 flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
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
            <GraduationCap className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Formation & Parcours</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mon Parcours
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            De mes premiers projets au lycée à ma formation actuelle en BUT MMI, 
            découvrez mon évolution dans le monde du multimédia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Current Education - Featured Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group"
          >
            <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>

              {/* Current Badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
              >
                <span className="text-white flex items-center gap-2">
                  En cours
                </span>
              </motion.div>

              {/* Header */}
              <div className="relative mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring' }}
                  className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-2xl shadow-cyan-500/30 mb-4"
                >
                  <GraduationCap className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-white mb-2">{currentEducation.degree}</h3>
                
                <div className="flex flex-wrap gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-white" />
                    {currentEducation.school}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    {currentEducation.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white" />
                    {currentEducation.period}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {currentEducation.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentEducation.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-white" />
                    Progression de la formation
                  </span>
                  <span className="text-cyan-400">{currentEducation.progress}%</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${currentEducation.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 relative overflow-hidden"
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Card Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 blur-3xl -z-10 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
            />
          </motion.div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative group/cert"
              >
                <div className={`relative bg-gradient-to-br ${cert.color} p-6 rounded-2xl overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-2">
                      {cert.icon}
                    </div>
                    <h4 className="text-white mb-1">{cert.name}</h4>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mt-1">{cert.year}</p>
                  </div>
                </div>
                
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} blur-xl -z-10 rounded-2xl opacity-50 group-hover/cert:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className="text-white text-center mb-12 flex items-center justify-center gap-2 text-3xl">
            <Briefcase className="w-5 h-5 text-white" />
            Chronologie des Expériences
          </h3>

          {/* Timeline Line */}
          <div className="absolute left-1/2 top-20 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-30 hidden lg:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? -3 : 3 }}
                  className="flex-1 relative group/exp"
                >
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500">
                    {/* Year Badge */}
                    <motion.div
                      className={`absolute -top-4 ${index % 2 === 0 ? 'right-6' : 'left-6'} px-4 py-2 bg-gradient-to-r ${exp.color} rounded-full shadow-lg`}
                    >
                      <span className="text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </span>
                    </motion.div>

                    <div className="mt-4">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="text-4xl">
                          {exp.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white mb-1">{exp.title}</h4>
                          <p className="text-cyan-400">{exp.organization}</p>
                          <p className="text-gray-500 text-sm">{exp.type}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Current Indicator */}
                    {exp.current && (
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-4 right-4"
                      >
                        <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50" />
                      </motion.div>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} blur-2xl -z-10 rounded-2xl opacity-0 group-hover/exp:opacity-30 transition-opacity duration-500`}
                  />
                </motion.div>

                {/* Timeline Dot (Desktop) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="hidden lg:flex w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-black shadow-2xl shadow-cyan-500/30 z-10"
                >
                  <div className="w-4 h-4 rounded-full bg-white" />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
