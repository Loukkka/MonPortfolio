import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Tag, Lightbulb, Wrench, AlertTriangle, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { FloatingParticles } from './FloatingParticles';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-cyan-400">Projet introuvable</h1>
          <p className="text-gray-400 text-lg">Ce projet n'existe pas ou a été déplacé.</p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    {
      icon: BookOpen,
      title: 'Contexte du projet',
      content: project.detailedSections.context,
      color: 'from-cyan-500 to-blue-500',
      shadow: 'shadow-cyan-500/20',
    },
    {
      icon: Wrench,
      title: 'Processus & méthodologie',
      content: project.detailedSections.process,
      color: 'from-blue-500 to-indigo-500',
      shadow: 'shadow-blue-500/20',
    },
    {
      icon: Lightbulb,
      title: 'Ce que j\'ai appris',
      content: project.detailedSections.learnings,
      color: 'from-cyan-500 to-teal-500',
      shadow: 'shadow-teal-500/20',
    },
    {
      icon: AlertTriangle,
      title: 'Difficultés rencontrées',
      content: project.detailedSections.difficulties,
      color: 'from-amber-500 to-orange-500',
      shadow: 'shadow-amber-500/20',
    },
    {
      icon: CheckCircle,
      title: 'Comment je les ai surmontées',
      content: project.detailedSections.overcome,
      color: 'from-emerald-500 to-green-500',
      shadow: 'shadow-emerald-500/20',
    },
    {
      icon: Sparkles,
      title: 'Impact personnel & professionnel',
      content: project.detailedSections.impact,
      color: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/20',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <FloatingParticles count={8} />

      {/* Back button - fixed */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => navigate('/#projects')}
        className="fixed top-6 left-6 z-50 flex items-center gap-3 px-6 py-3.5 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-cyan-500/40 hover:bg-black/90 transition-all duration-300 group shadow-lg shadow-black/30"
      >
        <ArrowLeft className="w-5 h-5 text-cyan-400 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">Retour</span>
      </motion.button>

      {/* Hero image */}
      <div className={`relative overflow-hidden ${
        project.slug === 'recettes-etudiants-sportifs' 
          ? 'h-[24vh] min-h-[200px]' 
          : 'h-[32vh] min-h-[240px]'
      }`}>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full scale-105 ${
            project.slug === 'recettes-etudiants-sportifs'
              ? 'object-cover object-center'
              : 'object-cover'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

        {project.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-24 right-8 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50"
          >
            <span className="text-white font-bold text-sm">Projet Vedette</span>
          </motion.div>
        )}
      </div>

      {/* Main content wrapper */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 pb-32">
        
        {/* Project header - pulled up over the hero */}
        <div className="-mt-28 relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50"
          >
            {/* Category badge */}
            <div className="inline-block px-6 py-2.5 mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
              <p className="text-xs text-white font-bold uppercase tracking-wider">{project.category}</p>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/15 flex-shrink-0">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                </div>
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-cyan-500/15 flex-shrink-0">
                  <Tag className="w-5 h-5 text-cyan-400" />
                </div>
                <span>{project.category}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 text-sm font-medium bg-cyan-500/10 border border-cyan-500/25 rounded-xl text-cyan-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Introduction card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-cyan-500/8 to-blue-500/8 border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/20 flex-shrink-0">
                <BookOpen className="w-[22px] h-[22px] text-white" />
              </div>
              À propos du projet
            </h2>
            <p className="text-gray-300 leading-[1.85] text-[15px] pl-[60px]">{project.fullDescription}</p>
          </div>
        </motion.div>

        {/* Detailed sections */}
        <div className="space-y-5 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:border-white/15 transition-all duration-300 group overflow-hidden">
                  {/* Subtle gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Section header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-lg ${section.shadow} flex-shrink-0`}>
                        <Icon className="w-[22px] h-[22px] text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-white">{section.title}</h3>
                    </div>
                    
                    {/* Section content */}
                    <p className="text-gray-400 leading-[1.85] text-[14.5px] pl-[60px]">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills developed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gray-900/50 border border-white/[0.07] rounded-3xl p-8 md:p-12">
            <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 flex-shrink-0">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              Compétences développées
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.detailedSections.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.04, y: -1 }}
                  className="px-6 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-sm text-gray-300 hover:border-cyan-500/40 hover:text-white hover:bg-cyan-500/[0.06] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video section */}
        {project.video && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20">
              <video
                src={project.video}
                controls
                autoPlay
                loop
                muted
                className="w-full aspect-video bg-black"
              />
            </div>
          </motion.div>
        )}

        {/* CTA Button(s) */}
        {project.links ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            {project.links.map((linkItem, index) => (
              <motion.a
                key={index}
                href={linkItem.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 border border-cyan-300/60 hover:border-cyan-200 transition-all duration-300 group relative overflow-hidden"
                style={{ padding: '0.6rem' }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                <ExternalLink className="w-6 h-6 flex-shrink-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="relative z-10 font-semibold tracking-wide">{linkItem.label}</span>
              </motion.a>
            ))}
          </motion.div>
        ) : project.link ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 border border-cyan-300/60 hover:border-cyan-200 transition-all duration-300 group relative overflow-hidden"
              style={{ padding: '0.6rem' }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <ExternalLink className="w-6 h-6 flex-shrink-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <span className="relative z-10 font-semibold tracking-wide">Voir le projet</span>
            </motion.a>
          </motion.div>
        ) : null}

        {project.illustrations && project.illustrations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gray-900/50 border border-white/[0.07] rounded-3xl p-8 md:p-12">
              <h2 className="text-xl font-bold text-white mb-8">Illustrations du projet</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.illustrations.map((illustration, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                    <img
                      src={illustration}
                      alt={`${project.title} illustration ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Back button bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-4"
        >
          <button
            onClick={() => navigate('/#projects')}
            className="flex items-center gap-3 px-8 py-4 bg-white/[0.04] border border-white/10 rounded-2xl text-sm text-gray-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/[0.06] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </button>
        </motion.div>
      </div>
    </div>
  );
}
