import { motion } from 'motion/react';
import { Code2, Palette, Database, Rocket } from 'lucide-react';
import { Progress } from './ui/progress';
import { useState, useEffect } from 'react';

const skillCategories = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: Code2,
    color: 'cyan',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Motion / GSAP', level: 85 },
    ],
  },
  {
    id: 2,
    title: 'UI/UX Design',
    icon: Palette,
    color: 'blue',
    skills: [
      { name: 'Figma', level: 93 },
      { name: 'Adobe XD', level: 88 },
      { name: 'Prototyping', level: 90 },
      { name: 'Design System', level: 87 },
    ],
  },
  {
    id: 3,
    title: 'Backend Development',
    icon: Database,
    color: 'purple',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'GraphQL', level: 82 },
      { name: 'REST APIs', level: 90 },
    ],
  },
];

const tools = [
  'VS Code',
  'Git',
  'Docker',
  'Webpack',
  'Vite',
  'Postman',
  'Figma',
  'Photoshop',
  'Illustrator',
  'Slack',
  'Jira',
  'AWS',
];

export function SkillsPage() {
  const [progressValues, setProgressValues] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Animate progress bars on mount
    const timer = setTimeout(() => {
      const values: { [key: string]: number } = {};
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          values[skill.name] = skill.level;
        });
      });
      setProgressValues(values);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

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
          className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6, 182, 212, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
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
            <Rocket className="w-4 h-4 text-white" />
            <span className="text-cyan-400">Mon Expertise</span>
          </motion.div>

          <h1 className="mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Compétences & Technologies
            </span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et des technologies 
            que je maîtrise pour créer des expériences digitales exceptionnelles.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute inset-0 bg-${category.color}-500/30 blur-xl rounded-full`}
                      />
                      <div className={`relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-${category.color}-500/20 to-${category.color}-600/20 border border-${category.color}-500/30`}>
                        <Icon className={`w-7 h-7 text-${category.color}-400`} />
                      </div>
                    </div>
                    <h3 className="text-gray-100">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressValues[skill.name] || 0}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full relative"
                          >
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="absolute inset-0 bg-white/30"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Card Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500 to-${category.color}-600 blur-2xl -z-10 rounded-2xl`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-gray-100">Outils & Technologies</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="relative group"
                >
                  <div className="relative px-6 py-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-all cursor-default">
                    <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {tool}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                    className="absolute inset-0 bg-cyan-500 blur-xl rounded-lg -z-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { value: '5+', label: 'Années d\'expérience' },
            { value: '50+', label: 'Projets réalisés' },
            { value: '30+', label: 'Clients satisfaits' },
            { value: '15+', label: 'Technologies maîtrisées' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
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
