import React from 'react';
import TechCapsule from '../components/TechCapsule';

function Experience() {
  const experiences = [
    {
      company: 'CloudLex',
      role: 'AI Engineer Intern',
      period: 'Aug 2026 – Present',
      bullets: [
        'Debug and resolve issues in LangGraph and LangChain workflows, including tool orchestration and state management.',
        'Maintain and enhance existing AI backend services using Python, FastAPI, and LLM integrations.',
        'Maintain database operations and schema migrations using SQLAlchemy, PostgreSQL, and Alembic.',
        'Troubleshoot RAG pipelines and document-processing workflows to improve reliability and retrieval accuracy.'
      ],
      skills: ['Python', 'FastAPI', 'LangGraph', 'LangChain', 'RAG', 'SQLAlchemy', 'PostgreSQL', 'Alembic']
    },
    {
      company: 'DoaGuru',
      role: 'Full Stack Developer',
      period: 'Feb 2026 – Aug 2026',
      bullets: [
        'Developed & deployed 1+ AI-based doctor system used by 100+ users with 90%+ response accuracy.',
        'Implemented 10+ core features including symptom analysis, chatbot interaction, and report generation.',
        'Managed 5+ updates, handled 20+ test cases, and improved performance by 40% using optimized workflows.'
      ],
      skills: ['React.js', 'Node.js', 'Express.js', 'AI Integration', 'REST APIs', 'Agile']
    },
    {
      company: 'Isaii Ai',
      role: 'MERN Stack & React Native Developer',
      period: 'June 2025 – Oct 2025',
      bullets: [
        'Built 3+ full-stack web and mobile applications using MERN Stack and React Native, supporting 500+ active users.',
        'Developed 20+ RESTful APIs with complete CRUD operations and delivered 10+ production-ready modules.',
        'Worked in Agile (2-week sprints), conducted 15+ code reviews, and created 20+ pages of technical documentation.'
      ],
      skills: ['MERN Stack', 'React Native', 'Redux', 'MongoDB', 'REST APIs', 'Code Review']
    },
    {
      company: 'Jabalpur Engineering College',
      role: 'Full Stack Web Developer',
      period: 'May 2024 – May 2026',
      bullets: [
        'Designed and developed a centralized scholarship portal using MERN stack, automating workflows for 3+ departments and reducing manual effort by 60%.',
        'Built a real-time tracking system with REST APIs, improving request visibility for 200+ students.'
      ],
      skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Workflow Automation']
    }
  ];

  return (
    <div className="bg-[#0d0d0d] text-white py-12 px-4 sm:px-6 lg:px-8 w-screen flex flex-col items-center">
      {/* Header section matching About / Projects / Skills */}
      <div className="w-full max-w-4xl flex justify-center items-center text-center mb-12">
        <div className="max-w-3xl">
          <h2>
            <span className="text-[30px] text-[#99a1af]">Career Journey</span> <br />
            <span className="font-[Impact] text-[45px] text-white uppercase">Work Experience</span> <br />
            <span className="text-[20px] text-[#99a1af]">
              Proven track record in engineering AI workflows, scalable backend architectures, and production full-stack systems.
            </span>
          </h2>
        </div>
      </div>

      {/* Cards list */}
      <div className="w-full max-w-4xl flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative bg-[#141414] border border-white/20 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:border-white/40 hover:bg-[#181818] overflow-hidden"
          >
            {/* Top subtle highlight line matching the Card.css / Skills glow style */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/70 transition-all duration-300"></div>

            {/* Top row: Company & Role on left, Period badge on right */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4 mb-4">
              <div>
                <h3 className="font-['Impact'] text-2xl sm:text-3xl tracking-wide text-white uppercase">
                  {exp.company}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#99a1af] mt-0.5">
                  {exp.role}
                </p>
              </div>
              <span className="self-start sm:self-center bg-white/10 text-gray-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-full border border-white/20 font-medium whitespace-nowrap">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base leading-relaxed text-left">
              {exp.bullets.map((bullet, bIndex) => (
                <li key={bIndex} className="flex items-start">
                  <span className="text-white mr-2.5 mt-1 font-bold text-sm">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack capsules */}
            <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/10">
              {exp.skills.map((skill) => (
                <TechCapsule key={skill} techName={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
