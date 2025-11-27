import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Clock, Map, Shield, Euro, Truck, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BrandCarousel from '../components/BrandCarousel';

const Home = () => {
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Carousel images - desktop and mobile versions
    const heroImages = [
        { desktop: '/hero-car.png', mobile: '/hero-car-mobile.png' }, // BMW
        { desktop: '/hero-car-2.png', mobile: '/hero-car-mobile-2.png' }, // Mercedes
        { desktop: '/hero-audi-mobile.png', mobile: '/hero-audi-mobile.png' }, // Audi
        { desktop: '/hero-vw-mobile.png', mobile: '/hero-vw-mobile.png' }, // VW
        { desktop: '/hero-porsche-mobile.png', mobile: '/hero-porsche-mobile.png' } // Porsche
    ];

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-background text-gray-900 flex flex-col">
            {/* Hero Section */}
            <section
                className="relative h-[450px] md:h-[600px] flex items-center justify-center bg-primary text-white overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=1200&q=80)'
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                {/* Car Image Carousel */}
                <div className="absolute inset-0 flex items-end md:items-center justify-center z-1 pointer-events-none">
                    {heroImages.map((image, index) => (
                        <picture
                            key={index}
                            className={`absolute w-auto h-full transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <source media="(min-width: 768px)" srcSet={image.desktop} />
                            <img
                                src={image.mobile}
                                alt="Luxury Car"
                                className="w-auto h-full object-contain transform transition-transform duration-700 mix-blend-lighten"
                            />
                        </picture>
                    ))}
                </div>
                <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10 text-center flex flex-col justify-center h-full pb-8 md:pb-0">
                    <h1
                        className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                        style={{
                            textShadow:
                                '0 0 10px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)'
                        }}
                    >
                        {t('hero.title')}<br />
                        {t('hero.subtitle')}
                    </h1>
                    <p
                        className="text-base md:text-xl lg:text-2xl text-gray-200 mb-6 md:mb-10 max-w-3xl mx-auto px-4"
                        style={{
                            textShadow:
                                '0 0 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,1)'
                        }}
                    >
                        {t('hero.description')}
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 px-4 w-full md:w-auto">
                        <Link
                            to="/vehicules"
                            className="bg-accent hover:bg-accent/90 text-white px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-transform transform hover:scale-105 w-full md:w-auto shadow-lg shadow-accent/20"
                        >
                            {t('hero.cta_vehicles')}
                        </Link>
                        <Link
                            to="/contact"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 md:px-8 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg transition-colors w-full md:w-auto shadow-lg"
                        >
                            {t('hero.cta_quote')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="relative -mt-10 mb-4 md:mb-6 z-20">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    {/* Desktop Search - Hidden on Mobile */}
                    <div className="hidden md:block bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20">
                        <div className="grid grid-cols-5 gap-6">
                            {/* Marque */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                    {t('search.brand')}
                                </label>
                                <div className="relative">
                                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none font-medium text-gray-700 transition-all hover:bg-gray-100">
                                        <option>{t('search.all_brands')}</option>
                                        <option>Audi</option>
                                        <option>BMW</option>
                                        <option>Mercedes-Benz</option>
                                        <option>Volkswagen</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Modèle */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                    {t('search.model')}
                                </label>
                                <div className="relative">
                                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none font-medium text-gray-700 transition-all hover:bg-gray-100">
                                        <option>{t('search.all_models')}</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Prix Max */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                    {t('search.max_price')}
                                </label>
                                <div className="relative">
                                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none font-medium text-gray-700 transition-all hover:bg-gray-100">
                                        <option>{t('search.no_limit')}</option>
                                        <option>10 000 €</option>
                                        <option>20 000 €</option>
                                        <option>30 000 €</option>
                                        <option>50 000 €</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Pays de livraison */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">
                                    {t('search.delivery_country')}
                                </label>
                                <div className="relative">
                                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none appearance-none font-medium text-gray-700 transition-all hover:bg-gray-100">
                                        <option>{t('countries.france')}</option>
                                        <option>{t('countries.belgium')}</option>
                                        <option>{t('countries.switzerland')}</option>
                                        <option>{t('countries.luxembourg')}</option>
                                        <option>{t('countries.italy')}</option>
                                        <option>{t('countries.spain')}</option>
                                        <option>{t('countries.portugal')}</option>
                                        <option>{t('countries.romania')}</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            {/* Bouton Rechercher */}
                            <div className="flex items-end">
                                <button className="w-full bg-primary hover:bg-primary/90 text-white p-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5">
                                    <Search className="h-6 w-6" />
                                    {t('search.search')}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Search - Simplified & Attractive */}
                    <div className="md:hidden bg-white rounded-2xl shadow-xl p-4 -mt-4 mx-2 border border-gray-100 relative z-30">
                        <div className="flex flex-col gap-3">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    placeholder="Rechercher (ex: BMW X5)"
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-0 rounded-xl text-gray-800 font-medium placeholder-gray-400 focus:ring-2 focus:ring-accent/20 transition-all"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="relative">
                                    <select className="w-full p-3.5 bg-gray-50 border-0 rounded-xl text-gray-700 font-medium text-sm appearance-none">
                                        <option>{t('search.all_brands')}</option>
                                        <option>Audi</option>
                                        <option>BMW</option>
                                        <option>Mercedes</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <select className="w-full p-3.5 bg-gray-50 border-0 rounded-xl text-gray-700 font-medium text-sm appearance-none">
                                        <option>{t('search.max_price')}</option>
                                        <option>20 000 €</option>
                                        <option>30 000 €</option>
                                        <option>50 000 €</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" /></svg>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-accent text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-accent/20 flex items-center justify-center gap-2 active:scale-95 transition-transform">
                                <Search className="h-5 w-5" />
                                {t('search.search')}
                            </button>
                        </div>
                    </div>
                </div>
            </section>



            {/* Véhicules en Vedette - order-1 pour apparaître en premier sur mobile */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                                {t('featured.title')}
                            </h2>
                            <p className="text-gray-600 text-lg">
                                {t('featured.description')}
                            </p>
                        </div>
                        <Link
                            to="/vehicules"
                            className="hidden md:flex items-center text-accent font-bold text-lg hover:text-accent/80 transition-colors group"
                        >
                            {t('featured.view_all')} <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                        {[
                            { img: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80', brand: 'Audi', model: 'RS3 Sportback', price: '42 900 €', year: '2020', km: '45 000 km' },
                            { img: 'https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=800&q=80', brand: 'BMW', model: 'M4 Competition', price: '68 500 €', year: '2021', km: '28 000 km' },
                            { img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80', brand: 'Mercedes-Benz', model: 'C63 AMG', price: '55 000 €', year: '2019', km: '52 000 km' }
                        ].map((car, i) => (
                            <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                                <div className="relative h-72 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img src={car.img} alt={car.model} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-lg z-20">
                                        {car.year}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="text-left">
                                            <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                                                {car.brand}
                                            </p>
                                            <h3 className="text-2xl font-bold text-primary">
                                                {car.model}
                                            </h3>
                                        </div>
                                        <p className="text-2xl font-bold text-accent">
                                            {car.price}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-6">
                                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                                            <Clock className="h-4 w-4 text-accent" /> {car.km}
                                        </span>
                                        <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                                            <Map className="h-4 w-4 text-accent" /> {t('featured.germany')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <Link
                            to="/vehicules"
                            className="inline-flex items-center justify-center bg-white border-2 border-accent text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-accent hover:text-white transition-all w-full"
                        >
                            {t('featured.view_all')} <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Avantages - order-2 pour apparaître après les véhicules sur mobile */}
            <section className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                            {t('why_us.title')}
                        </h2>
                        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            {t('why_us.description')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {[
                            { icon: Shield, titleKey: 'why_us.certified_title', descKey: 'why_us.certified_desc', color: 'text-blue-600 bg-blue-100' },
                            { icon: Euro, titleKey: 'why_us.transparent_title', descKey: 'why_us.transparent_desc', color: 'text-green-600 bg-green-100' },
                            { icon: Truck, titleKey: 'why_us.delivery_title', descKey: 'why_us.delivery_desc', color: 'text-orange-600 bg-orange-100' },
                            { icon: CheckCircle, titleKey: 'why_us.warranty_title', descKey: 'why_us.warranty_desc', color: 'text-purple-600 bg-purple-100' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100">
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${item.color} shadow-inner`}>
                                    <item.icon className="h-10 w-10" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">
                                    {t(item.titleKey)}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t(item.descKey)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Marques les plus demandées */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                        {t('home.most_requested_brands') || "Les plus demandées"}
                    </h2>

                    {/* Conteneur défilant avec effet de loupe JS */}
                    <BrandCarousel />
                </div>
            </section>

            {/* How It Works */}
            <section className="py-12 md:py-20 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            {t('how_it_works.title')}
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            {t('how_it_works.description')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { step: '01', titleKey: 'how_it_works.step1_title', descKey: 'how_it_works.step1_desc' },
                            { step: '02', titleKey: 'how_it_works.step2_title', descKey: 'how_it_works.step2_desc' },
                            { step: '03', titleKey: 'how_it_works.step3_title', descKey: 'how_it_works.step3_desc' },
                            { step: '04', titleKey: 'how_it_works.step4_title', descKey: 'how_it_works.step4_desc' }
                        ].map((item, i) => (
                            <div key={i} className="relative flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-3xl font-bold text-accent mb-6 bg-primary group-hover:bg-white group-hover:text-primary transition-all duration-300 shadow-lg relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold mb-4">
                                    {t(item.titleKey)}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {t(item.descKey)}
                                </p>
                                {i < 3 && (
                                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -z-0" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Europe Delivery */}
            <section className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 text-center md:text-left">
                            <div className="inline-block bg-accent/10 text-accent font-bold px-4 py-2 rounded-full mb-6 text-sm uppercase tracking-wider">
                                International
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                                {t('europe_delivery.title')}
                            </h2>
                            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                                {t('europe_delivery.description')}
                            </p>
                            <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                                {['france', 'belgium', 'switzerland', 'luxembourg', 'italy', 'spain', 'portugal', 'romania'].map((c, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                        <span className="w-3 h-3 bg-accent rounded-full shadow-sm" />{t(`countries.${c}`)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="bg-white p-4 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                                <div className="aspect-video bg-blue-50 rounded-2xl flex items-center justify-center text-blue-300 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/1024px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png')] bg-cover bg-center opacity-20" />
                                    <div className="relative z-10 text-center">
                                        <Map className="h-20 w-20 mb-4 mx-auto text-accent" />
                                        <span className="block font-bold text-xl text-primary">
                                            {t('europe_delivery.map_placeholder')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-8 bg-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { number: '+500', labelKey: 'stats.vehicles' },
                            { number: '8', labelKey: 'stats.countries' },
                            { number: '98%', labelKey: 'stats.satisfaction' },
                            { number: '15', labelKey: 'stats.experience' }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-4xl md:text-6xl font-bold mb-3 tracking-tight">
                                    {stat.number}
                                </div>
                                <div className="text-white/90 font-medium text-lg">
                                    {t(stat.labelKey)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-8 md:py-12 bg-white order-6 md:order-6">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                {t('cta.title')}
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                                {t('cta.description')}
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Link
                                    to="/vehicules"
                                    className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto"
                                >
                                    {t('cta.browse')}
                                </Link>
                                <Link
                                    to="/contact"
                                    className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xl transition-all hover:border-white w-full md:w-auto"
                                >
                                    {t('cta.contact_us')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
