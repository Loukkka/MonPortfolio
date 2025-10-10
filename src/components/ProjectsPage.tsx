import { motion } from 'motion/react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Dashboard Analytics',
    description: 'Plateforme d\'analytics en temps réel avec visualisation de données avancée et interface intuitive.',
    image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5OTA3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'Application Mobile E-commerce',
    description: 'Application mobile moderne avec paiements intégrés, gestion de panier et expérience utilisateur fluide.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTQzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React Native', 'Redux', 'Firebase', 'Stripe'],
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Créatif',
    description: 'Site portfolio interactif avec animations immersives et navigation fluide pour un artiste digital.',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTkzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Next.js', 'Three.js', 'GSAP', 'Tailwind'],
    featured: false,
  },
  {
    id: 4,
    title: 'SaaS Platform',
    description: 'Plateforme SaaS complète avec authentification, paiements récurrents et tableau de bord personnalisé.',
    image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5OTA3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL', 'AWS'],
    featured: false,
  },
  {
    id: 5,
    title: 'Réseau Social',
    description: 'Plateforme sociale avec messagerie instantanée, partage de contenu et profils personnalisables.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTQzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'GraphQL', 'MongoDB', 'Socket.io'],
    featured: false,
  },
  {
    id: 6,
    title: 'Outil de Collaboration',
    description: 'Application collaborative en temps réel pour équipes créatives avec gestion de projets intégrée.',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTkzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Angular', 'Nest.js', 'Redis', 'Docker'],
    featured: false,
  },
];

export function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden pt-24 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Mes Réalisations</span>
          </motion.div>
          
          <h1 className="mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Projets Récents
            </span>
          </h1>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes projets les plus récents et innovants, 
            démontrant mon expertise en design et développement web.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    <span className="text-white">Featured</span>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  {/* Hover Overlay with Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 border border-cyan-500/50 hover:bg-cyan-500/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-cyan-400" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-black/80 border border-cyan-500/50 hover:bg-cyan-500/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-cyan-400" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                />
              </div>

              {/* Card Shadow Glow */}
              <motion.div
                animate={{
                  opacity: hoveredProject === project.id ? 0.4 : 0,
                  scale: hoveredProject === project.id ? 1 : 0.8,
                }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-2xl -z-10 rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
