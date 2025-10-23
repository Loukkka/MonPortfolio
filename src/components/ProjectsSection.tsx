import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Zap, X, Calendar, Tag } from 'lucide-react';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

const projects = [
  {
    id: 1,
    title: "Stage chez SND Digital",
    description: "Participation à plusieurs missions liées à la communication visuelle et au développement web.",
    fullDescription: "Durant mon stage chez SND Digital, j'ai travaillé sur la refonte du site web de l'entreprise, la création de supports de communication (affiches, présentations, vidéos), l'analyse SEO et la réalisation de maquettes interactives et d'animations. Ce stage m'a permis d'allier design, stratégie digitale et esprit d'entreprise tout en utilisant des outils professionnels tels que Figma, WordPress, Illustrator et After Effects.",
    image: "/assets/1.png",
    tags: ["Figma", "WordPress", "Illustrator", "After Effects"],
    date: "Avril 2025 - Juin 2025",
    category: "Stage",
  },
  {
    id: 2,
    title: "Projet ENU Trocs  Site e-commerce fictif",
    description: "Création d'un site web complet de vente et d'échange autour d'un jeu vidéo.",
    fullDescription: "Projet consistant à développer un site e-commerce inspiré de l'univers de Dofus, avec recherche sur le public cible, création de maquettes sur Figma, développement sur WordPress (HTML, CSS, JavaScript, PHP), mise en place de fonctionnalités dynamiques comme barre de recherche, tri des articles et panier d'achat, et intégration d'objets 3D sur Blender pour renforcer l'immersion.",
    image: "/assets/2.png",
    tags: ["Figma", "WordPress", "Blender", "HTML", "CSS", "JavaScript", "PHP"],
    date: "2025",
    category: "Site e-commerce",
  },
  {
    id: 3,
    title: "Projet One Fruit Application mobile prototype",
    description: "Prototype d'une application mobile pour acheter, vendre et échanger des objets entre utilisateurs.",
    fullDescription: "Conception d'une application mobile interactive inspirée de l'univers de One Piece, dans l'esprit de Vinted. Réalisation de wireframes, création d'un style graphique fidèle à l'univers, conception des pages principales (accueil, recherche, profil, commande) et développement d'un prototype fonctionnel sur Figma avec composants et animations pour simuler une navigation réaliste.",
    image: "/assets/3.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    date: "2025",
    category: "Application mobile",
  },
  {
    id: 4,
    title: "Projet Kermesse des Animaux Refonte de site web",
    description: "Refonte complète du site web d'une kermesse à Limoges dédiée aux animaux.",
    fullDescription: "Projet de groupe comprenant l'audit du site existant, la définition d'une nouvelle arborescence, la création de maquettes sur Figma avec illustrations et style graphique adapté, et un travail collaboratif pour assurer cohérence et accessibilité. Ce projet a permis de développer mes compétences en UX design et travail d'équipe tout en adaptant le contenu à différents profils d'utilisateurs.",
    image: "/assets/4.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    date: "2025",
    category: "Design UI/UX",
  },
  {
    id: 5,
    title: "Projet Livre de recettes pour étudiants sportifs",
    description: "Création d'un livre de recettes équilibrées pour étudiants sportifs.",
    fullDescription: "Recherche et sélection de recettes simples et économiques, définition d'une ligne éditoriale, mise en page sur InDesign avec charte graphique sportive et moderne, tests utilisateurs pour améliorer lisibilité et compréhension. Ce projet a permis de combiner design graphique et contenu pratique pour un support pédagogique et attractif.",
    image: "/assets/5.png",
    tags: ["InDesign", "Graphisme", "UX"],
    date: "2025",
    category: "Édition / Design",
  },
  {
    id: 6,
    title: "Icône spatiale Illustration pour application",
    description: "Conception d'une icône sur le thème de l'espace pour une application mobile.",
    fullDescription: "Création d'un moodboard pour définir l'identité visuelle, réalisation finale sur Illustrator en flat design, minimaliste et lisible. Projet orienté sur la synthèse visuelle, l'impact graphique et la symbolique, tout en garantissant reconnaissance et lisibilité à petite taille.",
    image: "/assets/6.png",
    tags: ["Illustrator", "Flat Design", "Graphisme"],
    date: "2025",
    category: "Illustration",
  },
  {
    id: 7,
    title: "Site e-commerce  Basic Fit",
    description: "Création d'un site e-commerce attractif et responsive.",
    fullDescription: "Conception de l'arborescence et de la navigation pour une expérience utilisateur fluide, design responsive adapté à tous les supports, optimisation UX pour clarifier les parcours et améliorer la conversion. Projet combinant web design, UX et performance.",
    image: "/assets/7.png",
    tags: ["HTML", "CSS", "Responsive", "UX"],
    date: "2025",
    category: "Site e-commerce",
  },
{
  id: 8,
  title: "Scène 3D interactive A-Frame",
  description: "Création d'un environnement 3D interactif immersif directement dans le navigateur.",
  fullDescription: "Développement d'une scène 3D interactive avec A-Frame pour explorer le design immersif sur le web. Ajout de lumières et d'objets interactifs, conception d'un ciel rose et d'objets sombres reflétant la lumière pour créer une atmosphère visuelle marquante. Programmation HTML/JS pour gérer l'interaction et l'immersion. Ce projet m'a permis d'expérimenter l'expérience utilisateur dans un espace virtuel, la spatialisation visuelle et la manipulation d'éléments 3D dans un environnement web.",
  image: "/assets/8.png",
  tags: ["A-Frame", "3D", "HTML", "JavaScript", "UX"],
  date: "2025",
  category: "Application Web VR",
  featured: false
}
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
