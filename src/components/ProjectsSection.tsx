import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Zap, X, Calendar, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Plateforme Gaming Communautaire',
    description: 'Réseau social dédié aux gamers avec système de tournois, classements et messagerie en temps réel.',
    fullDescription: 'Création d\'une plateforme communautaire complète pour les joueurs. Inclut un système de tournois avec inscriptions, gestion des équipes, classements en direct, messagerie instantanée et profils personnalisables. Interface moderne avec thème sombre optimisé pour l\'expérience gaming.',
    image: 'https://images.unsplash.com/photo-1759820940702-ad8f5490a88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjAwNzg5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'WebSocket', 'Node.js'],
    date: 'Mars 2024',
    category: 'Application Web',
    featured: true,
  },
  {
    id: 2,
    title: 'Application Réseau Social Créatif',
    description: 'Plateforme de partage de contenus créatifs avec système de likes, commentaires et filtres personnalisés.',
    fullDescription: 'Développement d\'une application sociale orientée création de contenu. Fonctionnalités : upload de photos/vidéos, filtres en temps réel, système de followers, fil d\'actualité personnalisé, stories éphémères et notifications push. Design inspiré des meilleures pratiques UX/UI.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcHxlbnwxfHx8fDE3NjAwNjMzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    date: 'Février 2024',
    category: 'Application Mobile',
    featured: true,
  },
  {
    id: 3,
    title: 'Site Web E-commerce',
    description: 'Conception et développement d\'une boutique en ligne moderne avec système de panier et paiement sécurisé.',
    fullDescription: 'Projet complet de conception et développement d\'une plateforme e-commerce moderne. Inclut un système de panier dynamique, intégration de paiement sécurisé, gestion des produits, et interface d\'administration. Design responsive et optimisé pour une expérience utilisateur fluide sur tous les appareils.',
    image: 'https://images.unsplash.com/photo-1758611974287-8ca7147860a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5OTA3NjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Tailwind CSS', 'Figma'],
    date: 'Janvier 2024',
    category: 'Développement Web',
    featured: true,
  },
  {
    id: 4,
    title: 'Application Mobile de Fitness',
    description: 'Design UI/UX complet d\'une application mobile pour le suivi d\'entraînements et de nutrition.',
    fullDescription: 'Conception complète de l\'interface et de l\'expérience utilisateur d\'une application mobile fitness. Prototypes interactifs, système de design cohérent, parcours utilisateur optimisé et animations fluides. Focus sur l\'accessibilité et l\'engagement utilisateur.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTQzNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Figma', 'UI/UX', 'Prototyping'],
    date: 'Décembre 2023',
    category: 'Design UI/UX',
    featured: true,
  },
  {
    id: 5,
    title: 'Portfolio Photographe',
    description: 'Site vitrine élégant pour un photographe professionnel avec galerie interactive et animations fluides.',
    fullDescription: 'Création d\'un site web portfolio sophistiqué pour un photographe professionnel. Galerie d\'images optimisée avec lazy loading, animations au scroll, lightbox personnalisée et design minimaliste mettant en valeur les photographies.',
    image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5OTQ4NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['HTML', 'CSS', 'JavaScript'],
    date: 'Novembre 2023',
    category: 'Site Vitrine',
    featured: false,
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    description: 'Interface de gestion avec graphiques interactifs et tableaux de bord pour visualiser les données.',
    fullDescription: 'Développement d\'un tableau de bord analytique complet avec visualisations de données en temps réel. Graphiques interactifs, filtres dynamiques, export de données et interface responsive. Optimisé pour la performance et l\'expérience utilisateur.',
    image: 'https://images.unsplash.com/photo-1629494893504-d41e26a02631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc1OTk5NDI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['React', 'Chart.js', 'TypeScript'],
    date: 'Octobre 2023',
    category: 'Application Web',
    featured: false,
  },
  {
    id: 7,
    title: 'Landing Page Startup',
    description: 'Page d\'atterrissage moderne pour une startup tech avec animations et design responsive.',
    fullDescription: 'Création d\'une landing page impactante pour une startup technologique. Design moderne et épuré, animations subtiles, appels à l\'action optimisés et formulaire de contact intégré. Parfaitement optimisée pour la conversion.',
    image: 'https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTkzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['HTML', 'Tailwind CSS', 'Motion'],
    date: 'Septembre 2023',
    category: 'Landing Page',
    featured: false,
  },
  {
    id: 8,
    title: 'Système de Réservation',
    description: 'Application web de réservation en ligne avec calendrier interactif et gestion des disponibilités.',
    fullDescription: 'Développement d\'une application complète de réservation en ligne. Calendrier interactif, gestion des créneaux horaires, notifications par email, interface d\'administration et système de paiement intégré.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1OTkwODgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Vue.js', 'Figma', 'CSS'],
    date: 'Août 2023',
    category: 'Application Web',
    featured: false,
  },
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <Zap className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Mes Réalisations</span>
          </motion.div>
          
          <h2 className="mb-4 text-5xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes projets récents réalisés durant ma formation et mes projets personnels.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <motion.div 
                className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
                whileHover={{ y: -10, rotateX: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
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

                  {/* Hover Overlay - Click to view */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    className="absolute inset-0 bg-cyan-500/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-3 bg-black/80 border border-cyan-500/50 rounded-full text-white"
                    >
                      Voir le projet
                    </motion.div>
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
                    scaleX: hoveredProject === project.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 origin-left"
                />
              </motion.div>

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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-black/80 border border-white/20 rounded-full hover:border-cyan-500/50 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Modal Header - Image */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Featured Badge */}
                {selectedProject.featured && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    <span className="text-white font-medium">Projet Vedette</span>
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-4xl mb-2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {selectedProject.title}
                    </span>
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {selectedProject.category}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h3 className="text-white text-xl">Description du projet</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h3 className="text-white text-xl">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-400"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all">
                    <ExternalLink className="w-5 h-5" />
                    Voir le projet
                  </button>
                  <button className="px-6 py-3 bg-black/40 border border-white/20 hover:border-cyan-500/50 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all">
                    <Github className="w-5 h-5" />
                    Code source
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
