import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Palette, Smartphone, Video, Zap } from 'lucide-react';
import { useState, useRef } from 'react';

const skillCategories = [
  {
    id: 1,
    title: 'Création Numérique',
    icon: Palette,
    color: 'from-cyan-500 to-blue-600',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    skills: [
      { name: 'Photoshop', icon: '🎨', description: 'Retouche photo, composition' },
      { name: 'Illustrator', icon: '✏️', description: 'Illustration vectorielle' },
      { name: 'InDesign', icon: '📄', description: 'Mise en page, PAO' },
      { name: 'Figma', icon: '🎯', description: 'UI/UX Design, prototypage' },
      { name: 'Blender', icon: '🎲', description: 'Modélisation 3D' },
    ],
  },
  {
    id: 2,
    title: 'Audiovisuel',
    icon: Video,
    color: 'from-blue-500 to-cyan-600',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    skills: [
      { name: 'Premiere Pro', icon: '🎬', description: 'Montage vidéo professionnel' },
      { name: 'After Effects', icon: '✨', description: 'Motion design, effets visuels' },
      { name: 'OBS Studio', icon: '📹', description: 'Capture et streaming vidéo' },
    ],
  },
  {
    id: 3,
    title: 'Communication',
    icon: Smartphone,
    color: 'from-cyan-600 to-blue-500',
    borderColor: 'border-cyan-500/30',
    glowColor: 'shadow-cyan-500/20',
    skills: [
      { name: 'Canva', icon: '🎨', description: 'Design rapide' },
      { name: 'Notion', icon: '📝', description: 'Organisation' },
      { name: 'WordPress', icon: '📱', description: 'CMS et sites web' },
    ],
  },
  {
    id: 4,
    title: 'Développement Web',
    icon: Code2,
    color: 'from-blue-600 to-cyan-500',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/20',
    skills: [
      { name: 'HTML', icon: '🌐', description: 'Structure web' },
      { name: 'CSS', icon: '🎨', description: 'Styles et animations' },
      { name: 'JavaScript', icon: '⚡', description: 'Interactivité' },
      { name: 'PHP', icon: '🐘', description: 'Backend dynamique' },
      { name: 'SQL', icon: '🗄️', description: 'Bases de données' },
    ],
  },
];

const softSkills = [
  { 
    name: 'Créativité', 
    description: 'Innovation et originalité dans chaque projet',
    learnedFrom: ['Projets personnels', 'Design thinking', 'Brainstorming'],
    color: 'from-cyan-500 to-blue-500' 
  },
  { 
    name: 'Curiosité', 
    description: 'Apprentissage continu des nouvelles technologies',
    learnedFrom: ['Veille techno', 'Auto-formation', 'Expérimentation'],
    color: 'from-blue-500 to-cyan-500' 
  },
  { 
    name: 'Adaptabilité', 
    description: 'Flexibilité face aux changements et défis',
    learnedFrom: ['Projets variés', 'Travail en équipe', 'Challenges'],
    color: 'from-cyan-600 to-blue-600' 
  },
  { 
    name: 'Collaboration', 
    description: 'Esprit d\'équipe et communication efficace',
    learnedFrom: ['Projets groupe', 'Workshops', 'Partage'],
    color: 'from-blue-600 to-cyan-600' 
  },
  { 
    name: 'Rigueur', 
    description: 'Attention aux détails et qualité du travail',
    learnedFrom: ['Code reviews', 'Tests qualité', 'Documentation'],
    color: 'from-cyan-500 to-blue-500' 
  },
  { 
    name: 'Passion', 
    description: 'Engagement total dans mes créations',
    learnedFrom: ['Side projects', 'Communauté', 'Créations perso'],
    color: 'from-blue-500 to-cyan-500' 
  },
];

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={sectionRef} className="min-h-screen relative overflow-hidden py-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-sm shadow-blue-500/30">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-cyan-400">Compétences & Expertise</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mes Compétences
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Une combinaison de compétences techniques et créatives pour donner vie à vos projets multimédia.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`relative bg-black/40 backdrop-blur-sm border ${category.borderColor} rounded-3xl p-8 overflow-hidden hover:border-cyan-500/50 transition-all duration-500`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Category Header */}
                <div className="relative flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} ${category.glowColor} shadow-2xl`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="relative space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ x: 10 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group/skill">
                        <span className="text-3xl">{skill.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-white">{skill.name}</h4>
                          <p className="text-gray-400 text-sm">{skill.description}</p>
                        </div>
                        
                        {/* Hover indicator */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ 
                            opacity: hoveredSkill === skill.name ? 1 : 0,
                            scale: hoveredSkill === skill.name ? 1 : 0
                          }}
                          className="w-2 h-2 rounded-full bg-cyan-400"
                        />
                      </div>

                      {/* Shimmer effect on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                          initial={{ x: '-100%' }}
                          animate={{ x: '200%' }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Glow */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-2xl -z-10 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
