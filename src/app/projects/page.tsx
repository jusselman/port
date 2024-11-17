export default function Projects() {
    const projects = [
      {
        title: "Project Name",
        description: "Lorem Ipsum",
        technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
        imageUrl: "/path-to-project-image.jpg",
        liveUrl: "https://project-demo.com",
        githubUrl: "https://github.com/username/project",
      },

    ];
  
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8">My Projects</h1>
          
          <div className="space-y-12">
            {/* Introduction */}
            <p className="text-gray-300 text-lg">
              Here are some of the projects I've worked on. Each demonstrates different skills and technologies in my stack.
            </p>
  
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800"
                >
                  {/* Project Image */}
                  <div className="aspect-video bg-gray-700">
                    {/* Add your image here */}
                  </div>
  
                  {/* Project Details */}
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                    
                    <p className="text-gray-300">
                      {project.description}
                    </p>
  
                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
  
                    {/* Project Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }