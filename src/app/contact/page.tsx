export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
          
          <div className="space-y-12">
            {/* Intro Message */}
            <p className="text-gray-300 text-lg">
              Feel free to contact me about collaboration, opportunities, or just to say hello.
            </p>
  
            {/* Contact Info Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Contact Info</h2>
              <div className="space-y-2 text-gray-300">
                <p>📍 Based in San Francisco, CA</p>
                <p>📧 usselman@gmail.com</p>
                <p>🗓 Open to freelance and full-time opportunities</p>
              </div>
            </section>
  
            {/* Social Links */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Connect With Me</h2>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/joshuausselman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/jusselman" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </section>
  
            {/* Contact Form */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Send Me a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Send Message
                </button>
              </form>
            </section>
  
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Schedule a Call</h2>
              <p className="text-gray-300">
                Prefer to chat? Send me an email with your preferred time and date via{' '}
                <a 
                  href="mailto:usselman@gmail.com?subject=Meeting Request"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  email
                </a>
                {' '}and I'll get back to you promptly.
              </p>
            </section>
          </div>
        </div>
      </main>
    )
  }