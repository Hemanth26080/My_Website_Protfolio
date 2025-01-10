import { Sun, Shield, Scan } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-cream mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <Sun className="w-6 h-6 text-blue-900 dark:text-cream" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-cream mb-4">Solar Tracker System</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Designed and implemented a hardware-based solar tracker system that automatically adjusts solar panels based on light intensity.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">Arduino</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">Embedded C</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">Hardware</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-blue-900 dark:text-cream" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-cream mb-4">Women Safety Device</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Developed a real-time GPS tracking and alert system for emergency situations, featuring location-based notifications.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">Arduino</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">GPS</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">GSM</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
              <Scan className="w-6 h-6 text-blue-900 dark:text-cream" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 dark:text-cream mb-4">Face Recognition Attendance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Built an automated attendance system using machine learning for facial recognition, improving accuracy and efficiency.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">OpenCV</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-gray-800 text-blue-900 dark:text-cream rounded-full text-sm">ML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}