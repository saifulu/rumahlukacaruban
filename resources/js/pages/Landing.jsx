import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';

const Landing = () => {
    const layananList = [
        {
            title: 'Pemeriksaan Dokter',
            image: '/images/services/dokter.webp',
            description: 'Konsultasi dan pemeriksaan oleh dokter spesialis wound care berpengalaman'
        },
        {
            title: 'Rawat Luka',
            image: '/images/services/rawatluka.webp',
            description: 'Perawatan luka modern dengan metode moist wound healing'
        },
        {
            title: 'Home Care',
            image: '/images/services/home-care.jpg',
            description: 'Layanan perawatan luka dengan kunjungan ke rumah pasien'
        },
        {
            title: 'Facial Kecantikan',
            image: '/images/services/facial.jpg',
            description: 'Perawatan wajah profesional untuk kulit sehat dan cantik'
        }
    ];

    const keunggulanList = [
        {
            title: 'Professional Wound Clinician',
            desc: 'Ditangani oleh tenaga ahli profesional dalam bidang wound care'
        },
        {
            title: 'Metode Moist Management',
            desc: 'Menggunakan metode perawatan luka modern untuk hasil optimal'
        },
        {
            title: 'Meminimalkan Rasa Nyeri',
            desc: 'Prosedur perawatan yang nyaman dan minim rasa sakit'
        },
        {
            title: 'Proses Penyembuhan Cepat',
            desc: 'Pemulihan luka yang lebih cepat dengan teknologi terkini'
        }
    ];

    const serviceCategories = [
        {
            id: 'team',
            name: 'Team',
            description: 'Tim profesional wound care specialist kami siap memberikan perawatan terbaik',
            image: '/images/team-wound-care.jpg'
        },
        {
            id: 'luka-bakar',
            name: 'Luka Bakar',
            description: 'Penanganan luka bakar dengan metode modern untuk pemulihan optimal',
            image: '/images/burn-treatment.jpg'
        },
        {
            id: 'luka-diabetes',
            name: 'Luka Diabetes',
            description: 'Perawatan khusus untuk luka diabetes dengan pendekatan komprehensif',
            image: '/images/diabetic-wound.jpg'
        },
        {
            id: 'luka-operasi',
            name: 'Luka Operasi',
            description: 'Perawatan luka pasca operasi untuk penyembuhan yang lebih cepat',
            image: '/images/surgical-wound.jpg'
        }
    ];

    const [activeCategory, setActiveCategory] = useState('team');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update array warna untuk button dengan solid colors
    const buttonColors = {
        'Perawatan Luka Diabetes': 'bg-blue-500 hover:bg-blue-600',
        'Perawatan Luka Bakar': 'bg-red-500 hover:bg-red-600',
        'Perawatan Luka Trauma': 'bg-emerald-500 hover:bg-emerald-600',
        'Luka Sesudah Operasi': 'bg-violet-500 hover:bg-violet-600',
        'Perawatan STOMA': 'bg-rose-500 hover:bg-rose-600',
        'Perawatan Luka Kanker': 'bg-amber-500 hover:bg-amber-600'
    };

    return (
        <>
            <Head>
                <title>Rumah Luka Caruban - Perawatan Luka Profesional</title>
                <meta name="description" content="Rumah Luka Caruban adalah ahlinya perawatan luka dengan metode dan teknologi terkini untuk solusi terbaik masalah luka" />
            </Head>

            {/* Navbar Sticky */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-md shadow-nav border-b border-white/20' 
                    : 'bg-transparent'
            } py-4`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img 
                                src="/images/logo2.png" 
                                alt="Rumah Luka Caruban" 
                                className={`transition-all duration-300 ${
                                    isScrolled ? 'h-12 brightness-90' : 'h-16 md:h-20'
                                }`}
                            />
                        </div>

                        {/* Menu Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Layanan', 'Keunggulan', 'Kontak'].map((item) => (
                                <a 
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className={`font-medium transition-all duration-300 relative group ${
                                        isScrolled 
                                            ? 'text-primary hover:text-primary-dark' 
                                            : 'text-white hover:text-white/80'
                                    }`}
                                >
                                    {item}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                                        isScrolled ? 'bg-primary' : 'bg-white'
                                    }`}></span>
                                </a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <div className="flex items-center space-x-4">
                            <a 
                                href="tel:0812-2442-3770"
                                className={`transition-all duration-300 flex items-center px-4 py-2 rounded-lg font-medium 
                                    ${isScrolled
                                        ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                                        : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
                                    }`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" 
                                     className="h-5 w-5 mr-2" 
                                     viewBox="0 0 20 20" 
                                     fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span className="hidden md:inline">0812-2442-3770</span>
                            </a>

                            {/* Mobile Menu Button */}
                            <button 
                                className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                                    isScrolled
                                        ? 'hover:bg-gray-100'
                                        : 'hover:bg-white/10'
                                }`}
                                onClick={() => {/* Toggle mobile menu */}}
                            >
                                <svg className={`w-6 h-6 ${
                                    isScrolled ? 'text-primary' : 'text-white'
                                }`} 
                                     fill="none" 
                                     stroke="currentColor" 
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          strokeWidth={2} 
                                          d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-300 via-orange-500 to-red-600 min-h-screen overflow-hidden pt-24">
                {/* Decorative Elements dengan warna yang lebih kontras */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
                    <div className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-red-400 rounded-full opacity-30 blur-3xl"></div>
                </div>

                {/* Tambahkan overlay gradient untuk depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                {/* Content */}
                <div className="relative container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between pt-8">
                        <div className="lg:w-1/2 mb-10 lg:mb-0">
                            {/* Title dengan efek shadow 3D pada huruf */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6
                                           text-white
                                           tracking-tight leading-tight
                                           [text-shadow:_0_1px_0_rgb(255_255_255_/_40%),_0_2px_0_rgb(255_255_255_/_30%),_0_3px_0_rgb(255_255_255_/_20%),_0_4px_0_rgb(255_255_255_/_10%),_0_4px_5px_rgba(0_0_0_/_40%)]
                                           hover:translate-y-[-2px] transition-transform duration-300">
                                Rumah Luka Caruban
                            </h1>

                            {/* Subtitle dengan efek yang lebih dinamis */}
                            <div className="relative">
                                <h2 className="text-2xl md:text-3xl font-bold mb-6
                                              [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)]">
                                    <span className="text-white">Cegah</span>{" "}
                                    <span className="text-yellow-300 animate-pulse">AMPUTASI</span>{" "}
                                    <span className="text-white">- Cegah Sejak Dini</span>
                                </h2>
                                {/* Garis dekoratif di bawah subtitle */}
                                <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></div>
                            </div>

                            {/* Deskripsi dengan opacity yang disesuaikan untuk hierarchy */}
                            <p className="text-white/90 text-lg mb-8 mt-12 leading-relaxed max-w-2xl
                                          drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                                Solusi perawatan luka profesional dengan metode dan teknologi terkini untuk mengatasi berbagai jenis luka kronis dan akut.
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                {layananList.map((layanan, index) => (
                                    <span 
                                        key={index} 
                                        className={`${buttonColors[layanan.title]} text-white px-4 py-2 rounded-full 
                                                   text-sm font-bold tracking-tight shadow-sm
                                                   transition-all duration-300 hover:scale-105 cursor-pointer`}
                                    >
                                        {layanan.title}
                                    </span>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center text-white">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Luka Anda Sulit Sembuh?</span>
                                </div>
                                <div className="flex items-center text-white">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Luka Anda Menahun?</span>
                                </div>
                                <div className="flex items-center text-white">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Kesulitan Transportasi?</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a href="https://wa.me/081224423770" 
                                   className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold inline-flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                                    </svg>
                                    Konsultasi Gratis
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/2 lg:pl-12">
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                                <div className="relative">
                                    {/* Main Image */}
                                    {serviceCategories.map((category) => (
                                        <div
                                            key={category.id}
                                            className={`transition-opacity duration-300 ${
                                                activeCategory === category.id ? 'opacity-100' : 'opacity-0 hidden'
                                            }`}
                                        >
                                            <img 
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-[400px] object-cover"
                                            />
                                        </div>
                                    ))}
                                    
                                    {/* Category Navigation */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-transparent p-4">
                                        <div className="flex justify-center space-x-4">
                                            {serviceCategories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => setActiveCategory(category.id)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                                        ${activeCategory === category.id 
                                                            ? 'bg-primary text-white shadow-lg scale-105' 
                                                            : 'bg-white/80 text-gray-700 hover:bg-white'}`}
                                                >
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Description Box */}
                                <div className="p-6">
                                    {serviceCategories.map((category) => (
                                        <div
                                            key={category.id}
                                            className={`transition-all duration-300 ${
                                                activeCategory === category.id 
                                                    ? 'opacity-100 translate-y-0' 
                                                    : 'opacity-0 translate-y-4 hidden'
                                            }`}
                                        >
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-600">
                                                {category.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Button */}
                <a href="https://wa.me/081224423770" 
                   className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 flex items-center space-x-2 z-50">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                    </svg>
                    <span>Hubungi Kami</span>
                </a>
            </section>

            {/* Layanan Section */}
            <section id="layanan" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tingkatkan efisiensi operasional dan akselerasi pertumbuhan dengan layanan profesional kami
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {layananList.map((layanan, index) => (
                            <div key={index} 
                                 className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex h-full">
                                    {/* Image Section */}
                                    <div className="w-1/3 relative overflow-hidden">
                                        <img 
                                            src={layanan.image}
                                            alt={layanan.title}
                                            className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="w-2/3 p-6">
                                        <div className="flex items-center mb-2">
                                            <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                                Produk Prime
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {layanan.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {layanan.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-10">
                        <a href="#kontak" 
                           className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span>Pelajari Lebih Lanjut</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Keunggulan Section dengan gradient yang lebih lembut */}
            <section id="keunggulan" className="bg-gradient-to-b from-orange-50 to-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4 text-orange-600">Keunggulan Kami</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Kami memberikan pelayanan terbaik dengan standar profesional untuk kesembuhan optimal
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {keunggulanList.map((keunggulan, index) => (
                            <div key={index} 
                                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300
                                            border border-orange-100 hover:border-orange-200">
                                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-orange-900">{keunggulan.title}</h3>
                                <p className="text-gray-600">{keunggulan.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kontak Section */}
            <section id="kontak" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Informasi Kontak */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">Rumah Luka Caruban</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium">Alamat:</p>
                                        <p className="text-gray-600">Jl. Panglima Sudirman No.45, Caruban, Madiun</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium">Telepon:</p>
                                        <a href="tel:0812-2442-3770" className="text-primary hover:text-primary-dark">
                                            0812-2442-3770
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="font-medium">Jam Operasional:</p>
                                        <p className="text-gray-600">Senin - Sabtu: 07:00 - 19:30</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.11930245422962!2d111.61591671081496!3d-7.551482405211454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79c6b2d2a6c6a1%3A0x8c4c1a9d5d9d9d9d!2sRumah%20Luka%20Caruban!5e0!3m2!1sid!2sid!4v1709697234567!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>

                    {/* Tombol Navigasi */}
                    <div className="mt-4 text-center">
                        <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=-7.551482405211454,111.61591671081496"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Petunjuk Arah
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-12 text-center">
                        <a 
                            href="https://wa.me/081224423770" 
                            className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                            </svg>
                            Hubungi Kami via WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p>&copy; 2024 Rumah Luka Caruban. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Landing; 