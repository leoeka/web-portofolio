function Contact() {
    return (
        <section id="contact" className="px-8 py-24 max-w-2xl mx-auto text-center">

            <div className="flex justify-center mb-4">
                <span className="text-sm font-medium text-blue-700 bg-grey-100 px-4 py-1 rounded-full">
                    🟢 Open for Internship
                </span>
            </div>
            <h2 className="text-3xl font-bold text-blue mb-4">
                Mari Berkolaborasi
            </h2>

            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                Saya aktif mencari kesempatan magang. Unduh CV saya
                dan hubungi saya - saya siap berkontribusi
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">💼 Bidang</p>
                    <p className="text-white font-medium">Web Development</p>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">📍 Lokasi</p>
                    <p className="text-white font-medium">Onsite / Remote</p>
                </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
                <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-green-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-500 no-underline"
                >
                    Download CV
                </a>
                <a href="mailto:leoekamatra47770@gmail.com"
                    className="inline-flex items-center gap-2 bg-red-400 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-500 no-underline"
                >
                    📧 Kirim Email
                </a>

            </div>
        </section>
    );
}

export default Contact;