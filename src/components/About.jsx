function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Tentang Saya</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">Saya memiliki ketertarikan pada dunia teknologi dan pengembangan web. Ketertarikan tersebut mendorong saya untuk terus mempelajari berbagai teknologi frontend dan backend melalui proyek pribadi, perkuliahan, serta eksplorasi mandiri.
                Saya menikmati proses mengubah ide menjadi solusi digital yang dapat digunakan oleh banyak orang. Bagi saya, pengembangan perangkat lunak bukan hanya tentang menulis kode, tetapi juga tentang memecahkan masalah dan menciptakan pengalaman yang bermanfaat bagi pengguna.</p>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Keahlian Teknis</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    React.js
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    JavaScript
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    Node.js
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    PHP
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    Laravel
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    PostgreSQL
                </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Keahlian Non-Teknis</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    Manajemen Proyek
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    Teamwork
                </li>
                <li className="px-4 py-2 bg-blue-700 rounded-full text-sm font-medium text-white">
                    Problem Solving
                </li>
            </ul>
        </section>
    );
}

export default About;