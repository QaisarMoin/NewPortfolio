import React, { useState } from 'react';
import ProjectCard from '../components/cards/ProjectCard'; // Import ProjectCard
import './Projects.css'; // Import the CSS file for this page

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null); // State to track hovered project object

  const projects = [
    { projectName: "STUDIO FUGU", imageUrl: "https://picsum.photos/seed/studiofugu/400/300", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { projectName: "DESIGN CLUB", imageUrl: "https://picsum.photos/seed/designclub/400/300", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { projectName: "JOYEUX REPAS", imageUrl: "https://picsum.photos/seed/joyeuxrepas/400/300", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { projectName: "FACTOR E", imageUrl: "https://picsum.photos/seed/factore/400/300", videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    // Add other projects here following the pattern
  ];

  return (
    <div className="projects-container">
      {/* Left Section: Intro Text and Project Names */}
      <div >
        <div className="text-xl">
          <h2>Here is a selection of most recent works <span className="icon">📄</span></h2> {/* Placeholder icon */}
        </div>
        <ul className="border">
          {projects.map((project, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              className="project-item"
            >
              {project.projectName}
            </li>
          ))}
        </ul>
        <div className="see-all-works">
            <span>• SEE ALL WORKS</span>
        </div>
      </div>

      {/* Right Section: Project Card Preview */}
      <div className="projects-right">
        {hoveredProject && (
          <ProjectCard
            projectName={hoveredProject.projectName}
            imageUrl={hoveredProject.imageUrl}
            videoUrl={hoveredProject.videoUrl}
            isHovered={true} // Treat as hovered when displayed here
            // No need for index, hoveredCardIndex, onMouseEnter, onMouseLeave props here
          />
        )}
      </div>
    </div>
  );
}

export default Projects; 