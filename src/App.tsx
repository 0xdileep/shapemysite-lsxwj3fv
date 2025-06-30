import React from 'react';
import { ChevronRightIcon, BeakerIcon, AcademicCapIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-40`}></div>
      
      <div className="relative z-10">
        <header className="px-6 py-8">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              Mark
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Connect</a>
            </div>
          </nav>
        </header>

        <main>
          <section className="px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">M</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                MIT Scientist &
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Researcher
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Exploring the frontiers of science through innovative research and breakthrough discoveries
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  View Research
                  <ChevronRightIcon className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </section>

          <section id="about" className="px-6 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-6">
                    <AcademicCapIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <p className="text-gray-300">MIT graduate with advanced degrees in scientific research and innovation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg flex items-center justify-center mb-6">
                    <BeakerIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Research</h3>
                  <p className="text-gray-300">Leading cutting-edge research initiatives across multiple scientific disciplines</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center mb-6">
                    <CodeBracketIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                  <p className="text-gray-300">Developing breakthrough solutions that push the boundaries of scientific knowledge</p>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="px-6 py-16 bg-black/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">Research Projects</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-white">Quantum Computing</h3>
                    <StarIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Advancing quantum algorithms and computational methods for next-generation processing systems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm">Quantum</span>
                    <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-sm">Computing</span>
                    <span className="px-3 py-1 bg-pink-600/30 text-pink-300 rounded-full text-sm">Research</span>
                  </div>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-white">AI & Machine Learning</h3>
                    <StarIcon className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Developing intelligent systems that can learn, adapt, and solve complex scientific problems
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">AI</span>
                    <span className="px-3 py-1 bg-teal-600/30 text-teal-300 rounded-full text-sm">ML</span>
                    <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-sm">Innovation</span>
                  </div>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-white">Biotech Solutions</h3>
                    <StarIcon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Pioneering biotechnology applications that bridge science and human health advancement
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 rounded-full text-sm">Biotech</span>
                    <span className="px-3 py-1 bg-lime-600/30 text-lime-300 rounded-full text-sm">Health</span>
                    <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-sm">Science</span>
                  </div>
                </div>
                
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold text-white">Materials Science</h3>
                    <StarIcon className="w-6 h-6 text-orange-400" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Creating revolutionary materials with enhanced properties for future technological applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-600/30 text-orange-300 rounded-full text-sm">Materials</span>
                    <span className="px-3 py-1 bg-red-600/30 text-red-300 rounded-full text-sm">Innovation</span>
                    <span className="px-3 py-1 bg-yellow-600/30 text-yellow-300 rounded-full text-sm">Future</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Let's Collaborate</h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Interested in scientific collaboration, research partnerships, or innovative projects? Let's connect and explore possibilities together.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="mailto:mark@mit.edu" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Email Me
                </a>
                <a href="https://linkedin.com" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  LinkedIn
                </a>
                <a href="https://github.com" className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="px-6 py-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">
              © 2024 Mark - MIT Scientist & Researcher. Advancing science through innovation.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
