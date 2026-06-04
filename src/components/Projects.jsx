function Projects() {
    //  const scrollToSection = (elementId) => {
    //     const element = document.getElementById(elementId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    return (
        <section id="projects" className="px-8 py-24 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">Proyek Saya</h2>
                <p className="text-gray-400 leading-relaxed mb-8">Beberapa proyek yang telah saya kerjakan:</p>
                    <div className="grid grid-cols-3 gap-4">
                        {/* Kartu Proyek 1 */}
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 transition-all duration-300">
                            <div className="p-6">
                            <img src="https://api.microlink.io/?url=https://codingcamp-7-jul-25-leoeka.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt=" Preview Web Manajemen Tugas" className="w-full h-48 object-cover object-top" style={{ width: 'calc(100% + 48px)' }}/>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Web manajemen Tugas</h3>
                            <p className="text-gray-400 mb-6">Website To-Do List interaktif menggunakan HTML, CSS, dan JavaScript</p>
                            <div className="flex gap-4">
                                <a href="https://codingcamp-7-jul-25-leoeka.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white font-medium no-underline">
                                    Live Demo
                                </a>
                                <a href="https://github.com/Revou-Coding-Camp/codingcamp-7-jul-25-leoeka" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white font-medium no-underline">
                                    GitHub
                                </a>
                            </div>
                            </div>
                        </div>
                        {/* Kartu Proyek 2 */}
                        <div className="bg-gray-800 p-6 rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 transition-all duration-300">
                            <div className="p-6">
                            <img src="https://api.microlink.io/?url=https://capstoneprojek.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt=" Preview Website Rekomendasi Pekerjaan Berbasis AI" className="w-full h-48 object-cover object-top" style={{ width: 'calc(100% + 48px)' }}/>
                            <h3 className="text-2xl font-semibold mb-3 text-white">Website Rekomendasi Pekerjaan Berbasis AI</h3>
                            <p className="text-gray-400 mb-6">Website rekomendasi pekerjaan berbasis kecerdasan buatan</p>
                            <div className="flex gap-4">
                                <a href="https://capstoneprojek.vercel.app/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white font-medium no-underline">
                                    Live Demo
                                </a>
                                <a href="https://github.com/leoeka/capstone_projek" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-white font-medium no-underline">
                                    GitHub
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Projects;