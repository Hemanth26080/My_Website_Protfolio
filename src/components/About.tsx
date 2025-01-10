import { GraduationCap, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-cream mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Hi, I'm Hemanth Ponugothi, a student specializing in cloud computing and data security. I'm passionate about developing innovative tech solutions that create a positive impact, from hardware-based solar trackers to safety devices with real-time GPS tracking. Recently, I built a face recognition-based attendance system using machine learning, designed to streamline attendance tracking and improve accuracy. I love taking on projects that challenge me to learn and grow, and I'm excited to share my work and connect with others in the tech community.
          </p>

          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-blue-900 dark:text-cream" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-cream">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Master of Science in Cloudification and Data Security</h4>
                  <p className="text-gray-600 dark:text-gray-300">Top Tech College | 2024 - 2026</p>
                  <p className="text-gray-600 dark:text-gray-300">Coursework includes Cloud Computing, Cybersecurity and data protection. Focused on designing secure, scalable systems.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-blue-900 dark:text-cream" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-cream">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold">Assistant Manager</h4>
                  <p className="text-gray-600 dark:text-gray-300">Bhavani Boutique | 2022 - 2024</p>
                  <p className="text-gray-600 dark:text-gray-300">Led process improvement initiatives while managing operations, vendor relationships, and customer service excellence.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Analyst (A4)</h4>
                  <p className="text-gray-600 dark:text-gray-300">Capgemini Technology Services India Ltd | 2022</p>
                  <p className="text-gray-600 dark:text-gray-300">Participated in digital transformation projects using mainframe systems and front-end technologies.</p>
                </div>

                <div>
                  <h4 className="font-semibold">Apprentice</h4>
                  <p className="text-gray-600 dark:text-gray-300">Indian National Centre for Ocean Information Services | 2018 - 2019</p>
                  <p className="text-gray-600 dark:text-gray-300">Analyzed oceanographic data using satellite technology and contributed to research initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}