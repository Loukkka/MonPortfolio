import { motion } from 'motion/react';
import { Palette, Code, Smartphone, Video, Globe, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Design UI/UX',
    description: 'Conception d\'interfaces utilisateur modernes, intuitives et esthétiques avec une attention particulière à l\'expérience utilisateur.',
    features: ['Wireframing', 'Prototypage', 'Design System', 'Tests utilisateurs'],
  },
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Création de sites web responsive et performants avec les technologies modernes et les meilleures pratiques.',
    features: ['HTML/CSS/JS', 'React', 'Responsive Design', 'SEO'],
  },
  {
    icon: Smartphone,
    title: 'Design Mobile',
    description: 'Conception d\'applications mobiles ergonomiques adaptées aux différentes plateformes et tailles d\'écran.',
    features: ['App Design', 'Mobile First', 'iOS & Android', 'Ergonomie'],
  },
  {
    icon: Video,
    title: 'Motion Design',
    description: 'Création d\'animations et de vidéos captivantes pour dynamiser vos contenus et marquer les esprits.',
    features: ['Animation', 'Montage vidéo', 'After Effects', 'Storytelling'],
  },
  {
    icon: Globe,
    title: 'Webdesign',
    description: 'Design de sites web complets, du wireframe au design final, en passant par la création de l\'identité visuelle.',
    features: ['Landing Pages', 'Sites Vitrine', 'E-commerce', 'CMS'],
  },
  {
    icon: Megaphone,
    title: 'Communication Digitale',
    description: 'Stratégie de communication digitale, gestion des réseaux sociaux et création de contenus engageants.',
    features: ['Social Media', 'Content Creation', 'Branding', 'Stratégie'],
  },
];

export function ServicesSection() {
  return (
    <div className="min-h-screen relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            <Palette className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Ce que je propose</span>
          </motion.div>

          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Services & Expertises
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Une palette de compétences complète pour donner vie à vos projets web et multimédia.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  {/* Icon */}
                  <div className="relative inline-block mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                      className="absolute inset-0 bg-cyan-500/30 blur-xl rounded-full"
                    />
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Line */}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
