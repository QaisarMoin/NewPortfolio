import React from 'react';
import "./ProjectCard.css"

function ProjectCard({
  projectName,
  imageUrl,
  videoUrl,
  isHovered,
  hoveredCardIndex,
  index,
  onMouseEnter,
  onMouseLeave,
  className = ''
}) {
//   const distance = hoveredCardIndex === null ? 0 : Math.abs(index - hoveredCardIndex);

  let scale = 1;
  if (isHovered) {
    scale = 1.5;
  } 

  const cardStyle = {
    transform: `scale(${scale}, ${scale})`, // Explicitly set both x and y scale
    zIndex: isHovered ? 10 : 1,
    transformOrigin: 'center center',
    transition: 'transform 0.3s ease-in-out', // ✅ smooth scaling
  };

  return (
    <div
      className={`${className}`}
      style={cardStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-card-media w-full h-40 rounded-lg overflow-hidden">
        {isHovered && videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            playsInline
          />
        ) : imageUrl ? (
          <img src={imageUrl} alt={projectName} className="w-full h-full object-cover" />
        ) : (
          <span>Project Preview</span>
        )}
      </div>

      <div className="project-card-name mt-2">
        <h3 className="text-[#9b9b9b] text-xs font-thin uppercase text-left font-mono">
          {projectName || 'Project Name'}
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;
