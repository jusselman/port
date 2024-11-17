export default function About() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-gray-300">
              I'm a software developer with a diverse professional journey that blends technical expertise with a passion for problem-solving. Skilled in creating innovative, user-focused solutions, I specialize in full-stack development, curriculum design, and improving digital experiences.
            With hands-on experience as a Full Stack Developer, I've led impactful projects, such as building a MERN stack social media application to expand global reach and optimizing e-commerce platforms for better functionality and customer experience. My previous roles have also involved curriculum development for Google's Grasshopper app, where I contributed to educating over ten million users and collaborating across teams to drive technical excellence.
            Beyond my technical acumen, I bring a rich understanding of cultural nuance, communication, and a commitment to continuous learning, reinforced by my multilingual background and international experience.
              </p>
            </section>
  
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>Full-Stack Development: MERN stack (MongoDB, Express.js, React.js, Node.js), Redux, TypeScript</li>
                <li>Mobile Development: Flutter framework (Dart, Material Design, Firebase)</li>
                <li>CMS Platforms: WordPress, Squarespace, Shopify</li>
                <li>Tools & Processes: Version control (Git, Piper, Gerrit), web debugging, testing, and Google Analytics</li>
                <li>Additional Expertise: Curriculum development, Storyline 360SEO audits, graphic design, and multilingual communication</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    )
  }