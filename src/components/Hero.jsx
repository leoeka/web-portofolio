function Hero() {
     const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className="flex flex-col items-center justify-center min-h-[90vh] text-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">Halo, saya seorang <span className="text-blue-500">Web Developer</span></h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">Seorang Web Developer yang bersemangat membangun website. Saya berfokus pada pengembangan antarmuka web yang
                modern, responsif, dan mudah digunakan menggunakan
                teknologi web terkini.</p>
            <a className="cursor-pointer no-underline px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Lihat Proyek Saya</a>
        </header>
    );
}

export default Hero;  