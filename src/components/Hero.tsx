import { Download, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-cream">
            Welcome! I'm Hemanth Ponugothi
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            A cloud computing and data security student with a passion for
            innovative tech solutions.
          </p>

          <div className="flex gap-4">
            <a
              href="/src/components/P_Hemanth_Resume.pdf"
              download="P_Hemanth_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-blue-900 dark:bg-cream text-white dark:text-blue-900 rounded-lg hover:bg-blue-800 dark:hover:bg-cream/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-900 dark:border-cream text-blue-900 dark:text-cream rounded-lg hover:bg-blue-900 hover:text-white dark:hover:bg-cream dark:hover:text-blue-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-900 dark:bg-cream rounded-full blur-3xl opacity-20 animate-blob"></div>
          <img
            src="/src/components/IMG_20240928_140548.jpg"
            alt="Hemanth Ponugothi"
            className="relative w-full max-w-md mx-auto rounded-full border-4 border-blue-900 dark:border-cream shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
