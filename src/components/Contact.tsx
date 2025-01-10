import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-cream mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-cream mb-6">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm currently looking for new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <a href="mailto:hemanthponugothi@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-cream transition-colors">
                <Mail className="w-5 h-5" />
                hemanthponugothi@gmail.com
              </a>
              <a href="tel:+33775712398" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-cream transition-colors">
                <Phone className="w-5 h-5" />
                +33 775 712 398
              </a>
              <a href="https://www.linkedin.com/in/ponugothi-hemanth-11876517b/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-900 dark:hover:text-cream transition-colors">
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <Github className="w-5 h-5" />
                GitHub Profile (Coming Soon)
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-cream"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-cream"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-900 dark:focus:ring-cream"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-900 dark:bg-cream text-white dark:text-blue-900 rounded-lg hover:bg-blue-800 dark:hover:bg-cream/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}