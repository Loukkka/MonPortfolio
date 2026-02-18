import { motion } from 'motion/react';
import { ExternalLink, Zap } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const projectFilters = ['Tous', 'UI/UX', 'Web design', 'Vidéo', '3D', 'Com. visuelle'];

// Assigns { col, row } spans: only 2×1 (wide) or 1×2 (tall).
// Uses a seeded pseudo-random to vary layout per filter.
// CSS grid-auto-flow:dense fills all gaps automatically.
type GridCell = { col: number; row: number };

function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function computeGridLayout(count: number): GridCell[] {
  if (count === 0) return [];
  if (count === 1) return [{ col: 2, row: 1 }];

  const rng = seededRandom(count * 7 + 42);
  const layout: GridCell[] = [];

  for (let i = 0; i < count; i++) {
    if (rng() > 0.5) {
      layout.push({ col: 2, row: 1 }); // wide
    } else {
      layout.push({ col: 1, row: 2 }); // tall
    }
  }

  return layout;
}

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState('Tous');
  const navigate = useNavigate();

  const visible = filter === 'Tous' ? projects : projects.filter((p) => p.group === filter);
  const gridLayout = computeGridLayout(visible.length);

  return (
    <div className="min-h-screen relative overflow-hidden py-32">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-sm shadow-blue-500/30">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-cyan-400">Mes Réalisations</span>
          </div>
          <h2 className="mb-4 text-5xl font-title">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Mes Projets
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une sélection de mes projets récents réalisés durant ma formation et mes projets personnels.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-300 ${
                filter === f
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/50'
                  : 'bg-black/40 text-gray-300 border-white/10 hover:border-cyan-500 hover:text-white hover:shadow-lg hover:shadow-cyan-500/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: '240px',
            gridAutoFlow: 'dense',
            gap: '20px',
          }}
        >
          {visible.map((project, index) => (
            <div
              key={project.id}
              style={{
                gridColumn: `span ${gridLayout[index]?.col || 2}`,
                gridRow: `span ${gridLayout[index]?.row || 1}`,
              }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => navigate(`/projet/${project.slug}`)}
            >
              <div className="relative h-full bg-black/60 border border-white/10 rounded-2xl overflow-hidden transition-all duration-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:bg-black/40">
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    hoveredId === project.id ? 'scale-105 blur-[2px]' : 'scale-100 blur-0'
                  }`}
                />

                {/* Overlay — subtle darken by default, slightly lighter on hover */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  hoveredId === project.id 
                    ? 'bg-black/50' 
                    : 'bg-black/40'
                }`} />

                {/* Tags — visible by default, hidden on hover */}
                <div className={`absolute top-4 left-4 z-20 flex flex-wrap gap-1.5 transition-all duration-700 ${
                  hoveredId === project.id ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold bg-black/90 backdrop-blur-md border border-white/20 rounded-lg text-white shadow-lg"
                      style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover — "Voir le projet" button overlaid on top */}
                <div
                  className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-700 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); navigate(`/projet/${project.slug}`); }}
                    animate={hoveredId === project.id ? { scale: 1, y: 0 } : { scale: 0.9, y: 10 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 rounded-xl text-base font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all cursor-pointer flex items-center gap-2 bg-blue-500 hover:bg-blue-400 backdrop-blur-md"
                  >
                    <ExternalLink className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white font-medium">Voir le projet</span>
                  </motion.button>
                </div>

                {/* Content — visible by default, hidden on hover */}
                <div className={`absolute bottom-0 left-0 right-0 z-20 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-all duration-700 ${
                  hoveredId === project.id 
                    ? 'opacity-0 translate-y-4' 
                    : 'opacity-100 translate-y-0'
                }`}>
                  <div className="inline-block px-4 py-1.5 mb-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    style={{
                      boxShadow: '0 4px 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)'
                    }}
                  >
                    <p className="text-xs text-white font-bold uppercase tracking-wider drop-shadow-lg">{project.category}</p>
                  </div>
                  <h3 
                    className="text-white text-lg font-bold leading-tight mb-2"
                    style={{
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 4px 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-gray-100 text-sm leading-relaxed line-clamp-2"
                    style={{
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.8)'
                    }}
                  >{project.description}</p>
                </div>

                {/* Bottom glow */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 z-20 transition-all duration-300 origin-left ${
                    hoveredId === project.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
