import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    const scrollToSection = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <footer className="px-8 py-12 border-t border-gray-200 text-gray-400">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Kolom 1: Identitas */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 text-center">Leo Eka Matra</h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                        Seorang Web Developer yang bersemangat membangun solusi digital inovatif dan pengalaman web yang interaktif.
                    </p>
                </div>
                {/* Kolom 2: Navigation cepat */}
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Tautan Cepat</h3>
                    <ul className="space-y-2 text-center">
                        <li className="cursor-pointer">
                            <span onClick={() => scrollToSection('home')} className="text-gray-600 cursor-pointer hover:text-blue-500">
                                Home
                            </span>
                        </li>
                        <li className="cursor-pointer">
                            <span onClick={() => scrollToSection('about')} className="text-gray-600 cursor-pointer hover:text-blue-500">
                                Tentang Saya
                            </span>
                        </li>
                        <li className="cursor-pointer">
                            <span onClick={() => scrollToSection('projects')} className="text-gray-600 cursor-pointer hover:text-blue-500">
                                Proyek
                            </span>
                        </li>
                    </ul>
                </div>
                {/* Kolom 3: Media Sosial */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Media Sosial</h4>
                    <div className="flex gap-4">
                        {/* Tautan Media Sosial */}
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                            <FaGithub className="text-white text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/leo-eka" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                            <FaLinkedin className="text-white text-xl" />
                        </a>
                        <a href="mailto:leekamatra47770@gmail.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1">
                            <FaEnvelope className="text-white text-xl" />
                        </a>
                    </div>
                </div>
                {/* Garis Pembatas & Copyright */}
                <div className="md:col-span-3 border-t border-gray-600 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Leo Eka Matra. Dibangun dengan React & Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;