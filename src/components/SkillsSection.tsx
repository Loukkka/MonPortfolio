import { motion, useScroll, useTransform } from 'motion/react';
import { Code2, Palette, Smartphone, Video, Zap, Code, Globe, Megaphone } from 'lucide-react';
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
      { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', description: 'Retouche photo, composition' },
      { name: 'Illustrator', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg', description: 'Illustration vectorielle' },
      { name: 'InDesign', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg', description: 'Mise en page, PAO' },
      { name: 'Figma', logo: 'https://cdn.simpleicons.org/figma', description: 'UI/UX Design, prototypage' },
      { name: 'Blender', logo: 'https://cdn.simpleicons.org/blender', description: 'Modélisation 3D' },
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
      { name: 'Premiere Pro', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg', description: 'Montage vidéo professionnel' },
      { name: 'After Effects', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg', description: 'Motion design, effets visuels' },
      { name: 'OBS Studio', logo: 'https://cdn.simpleicons.org/obsstudio', description: 'Capture et streaming vidéo' },
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
      { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', description: 'Design rapide' },
      { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/white', description: 'Organisation' },
      { name: 'WordPress', logo: 'https://cdn.simpleicons.org/wordpress', description: 'CMS et sites web' },
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
      { name: 'HTML', logo: 'https://cdn.simpleicons.org/html5', description: 'Structure web' },
      { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', description: 'Styles et animations' },
      { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript', description: 'Interactivité' },
      { name: 'PHP', logo: 'https://cdn.simpleicons.org/php', description: 'Backend dynamique' },
      { name: 'SQL', logo: 'https://cdn.simpleicons.org/mysql/white', description: 'Bases de données' },
    ],
  },
];

const services = [
  {
    icon: Palette,
    title: 'Design UI/UX',
    features: ['Wireframing', 'Prototypage', 'Design System', 'Tests utilisateurs'],
  },
  {
    icon: Code,
    title: 'Développement Web',
    features: ['HTML/CSS/JS', 'React', 'Responsive Design', 'SEO'],
  },
  {
    icon: Video,
    title: 'Motion Design',
    features: ['Animation', 'Montage vidéo', 'Motion vidéo', 'Storytelling'],
  },
  {
    icon: Globe,
    title: 'Webdesign',
    features: ['Landing Pages', 'Sites Vitrine', 'E-commerce', 'CMS'],
  },
  {
    icon: Smartphone,
    title: 'Design Mobile',
    features: ['App Design', 'Mobile First', 'iOS & Android', 'Ergonomie'],
  },
  {
    icon: Megaphone,
    title: 'Communication Digitale',
    features: ['Social Media', 'Content Creation', 'Branding', 'Stratégie'],
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
    <div ref={sectionRef} className="relative overflow-hidden py-32">
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
            <span className="text-cyan-400">Compétences & Services</span>
          </motion.div>

          <h2 className="mb-4 text-5xl font-title">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Compétences & Expertises
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Une palette de compétences techniques et créatives pour donner vie à vos projets multimédia.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 items-start">
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
                        <img src={skill.logo} alt={skill.name} className="w-8 h-8 object-contain" />
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

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-white text-center mb-12 text-2xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ce que je propose
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative"
              >
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="text-gray-100 text-lg font-medium group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h4>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {service.features.map((feature) => (
                      <span key={feature} className="px-6 py-2.5 text-sm text-gray-400 bg-white/5 border border-white/10 rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.3, duration: 0.6 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
