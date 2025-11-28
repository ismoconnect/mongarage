// src/components/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Menu, X, Globe, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const languages = [
        { code: 'fr', name: 'Français', flagCode: 'fr' },
        { code: 'en', name: 'English', flagCode: 'gb' },
        { code: 'de', name: 'Deutsch', flagCode: 'de' },
        { code: 'es', name: 'Español', flagCode: 'es' },
        { code: 'it', name: 'Italiano', flagCode: 'it' },
        { code: 'pt', name: 'Português', flagCode: 'pt' },
        { code: 'ro', name: 'Română', flagCode: 'ro' },
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];
    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsLangMenuOpen(false);
    };

    const menuItems = [
        { nameKey: 'nav.home', path: '/', hasDropdown: false },
        {
            nameKey: 'nav.vehicles',
            path: '/vehicules',
            hasDropdown: true,
            submenu: [
                { nameKey: 'nav.all_vehicles', path: '/vehicules' },
                { nameKey: 'nav.auctions', path: '/encheres' },
                { nameKey: 'nav.sourcing', path: '/provenance' },
            ],
        },
        {
            nameKey: 'nav.services_trust',
            path: '/services',
            hasDropdown: true,
            submenu: [
                { nameKey: 'nav.our_services', path: '/services' },
                { nameKey: 'nav.guarantees', path: '/garanties' },
                { nameKey: 'nav.inspections', path: '/expertises' },
                { nameKey: 'nav.visit_vehicle', path: '/visiter-vehicule' },
            ],
        },
        {
            nameKey: 'nav.buying_guide',
            path: '/comment-acheter',
            hasDropdown: true,
            submenu: [
                { nameKey: 'nav.how_to_buy', path: '/comment-acheter' },
                { nameKey: 'nav.faq', path: '/faq' },
            ],
        },
        {
            nameKey: 'nav.company',
            path: '/about',
            hasDropdown: true,
            submenu: [
                { nameKey: 'nav.about_us', path: '/about' },
                { nameKey: 'nav.commitments', path: '/engagements' },
                { nameKey: 'nav.locations', path: '/points-vente' },
                { nameKey: 'nav.contact_us', path: '/contact' },
            ],
        },
    ];

    // Close dropdowns when clicking outside (only for desktop)
    useEffect(() => {
        const handleClickOutside = (e) => {
            // Don't close dropdowns if mobile menu is open
            if (isMenuOpen) return;

            if (!e.target.closest('.dropdown-container') && !e.target.closest('.mobile-menu-dropdown')) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    const toggleDropdown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src="/logo.png" alt="AUTO17" className="h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {menuItems.map((item, idx) => (
                            <div key={idx} className="relative dropdown-container">
                                {item.hasDropdown ? (
                                    <button
                                        onClick={() => toggleDropdown(item.nameKey)}
                                        className="text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-1"
                                    >
                                        {t(item.nameKey)}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${openDropdown === item.nameKey ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className={`${item.nameKey === 'nav.home' ? 'bg-primary/10 text-primary hover:bg-primary/20 font-bold' : 'text-gray-600 hover:text-primary hover:bg-gray-50 font-medium'} transition-colors px-4 py-2 rounded-lg`}
                                    >
                                        {t(item.nameKey)}
                                    </Link>
                                )}
                                {item.hasDropdown && openDropdown === item.nameKey && (
                                    <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto">
                                        {item.submenu.map((sub, subIdx) => (
                                            <Link
                                                key={subIdx}
                                                to={sub.path}
                                                onClick={() => setOpenDropdown(null)}
                                                className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                                            >
                                                {t(sub.nameKey)}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA & Language */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link to="/dashboard" className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                            <User className="h-5 w-5" />
                            <span>{t('nav.my_account')}</span>
                        </Link>
                        <Link to="/contact" className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                            {t('hero.cta_quote')}
                        </Link>
                        {/* Language Switcher */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center justify-center text-sm font-medium text-gray-600 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                                title={t('nav.language')}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${currentLang.flagCode}.png`}
                                    srcSet={`https://flagcdn.com/w80/${currentLang.flagCode}.png 2x`}
                                    width="24"
                                    height="16"
                                    alt={currentLang.name}
                                    className="rounded-sm object-cover"
                                />
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 ${i18n.language === lang.code ? 'bg-gray-50 text-primary font-medium' : 'text-gray-700'}`}
                                        >
                                            <img
                                                src={`https://flagcdn.com/w40/${lang.flagCode}.png`}
                                                srcSet={`https://flagcdn.com/w80/${lang.flagCode}.png 2x`}
                                                width="20"
                                                height="15"
                                                alt={lang.name}
                                                className="rounded-sm object-cover"
                                            />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile: Account, Language & Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        {/* Mon Compte Icon */}
                        <Link to="/dashboard" className="p-2 text-gray-600 hover:text-primary transition-colors">
                            <User className="h-6 w-6" />
                        </Link>

                        {/* Language Switcher */}
                        <div className="relative dropdown-container">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center justify-center p-2 text-gray-600 hover:text-primary transition-colors"
                                title={t('nav.language')}
                            >
                                <img
                                    src={`https://flagcdn.com/w40/${currentLang.flagCode}.png`}
                                    srcSet={`https://flagcdn.com/w80/${currentLang.flagCode}.png 2x`}
                                    width="24"
                                    height="16"
                                    alt={currentLang.name}
                                    className="rounded-sm object-cover"
                                />
                            </button>
                            {isLangMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 ${i18n.language === lang.code ? 'bg-gray-50 text-primary font-medium' : 'text-gray-700'}`}
                                        >
                                            <img
                                                src={`https://flagcdn.com/w40/${lang.flagCode}.png`}
                                                srcSet={`https://flagcdn.com/w80/${lang.flagCode}.png 2x`}
                                                width="20"
                                                height="15"
                                                alt={lang.name}
                                                className="rounded-sm object-cover"
                                            />
                                            <span>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Menu Button */}
                        <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 z-40 bg-black/50 animate-fadeIn"
                        onClick={() => setIsMenuOpen(false)}
                    ></div>

                    {/* Menu Panel */}
                    <div className="lg:hidden fixed right-0 top-0 bottom-0 z-50 bg-white w-3/4 shadow-2xl animate-slideInRight">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between h-20 px-6 border-b">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>
                                <img src="/logo.png" alt="AUTO17" className="h-12 w-auto object-contain" />
                            </Link>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2">
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Menu Content */}
                        <div className="overflow-y-auto h-[calc(100vh-80px)]">
                            <div className="px-6 py-6 space-y-1">
                                {menuItems.map((item, idx) => (
                                    <div key={idx} className="border-b border-gray-100 pb-1 mobile-menu-dropdown">
                                        {item.hasDropdown ? (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenDropdown(openDropdown === item.nameKey ? null : item.nameKey);
                                                    }}
                                                    className="w-full text-left text-gray-800 font-semibold py-4 flex items-center justify-between hover:text-primary transition-colors"
                                                >
                                                    <span className="text-base">{t(item.nameKey)}</span>
                                                    <svg
                                                        className={`w-5 h-5 transition-transform ${openDropdown === item.nameKey ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {openDropdown === item.nameKey && (
                                                    <div className="pl-4 pb-3 space-y-1 bg-gray-50 -mx-6 px-10 py-3">
                                                        {item.submenu.map((sub, subIdx) => (
                                                            <Link
                                                                key={subIdx}
                                                                to={sub.path}
                                                                className="block text-gray-600 py-2.5 hover:text-primary transition-colors"
                                                                onClick={() => {
                                                                    setIsMenuOpen(false);
                                                                    setOpenDropdown(null);
                                                                }}
                                                            >
                                                                {t(sub.nameKey)}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                to={item.path}
                                                className="block text-gray-800 font-semibold py-4 hover:text-primary transition-colors text-base"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {t(item.nameKey)}
                                            </Link>
                                        )}
                                    </div>
                                ))}



                                {/* CTA Button */}
                                <div className="pt-6 pb-4">
                                    <Link
                                        to="/contact"
                                        className="block w-full bg-accent hover:bg-accent/90 text-white text-center py-4 rounded-lg font-semibold text-base shadow-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {t('hero.cta_quote')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </header>
    );
};

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-gray-200 py-6 md:py-12">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                {/* Logo */}
                <div className="flex items-center mb-6 md:mb-12">
                    <img src="/logo.png" alt="AUTO17" className="h-8 md:h-14 w-auto object-contain" />
                </div>

                {/* Footer Content - 3 Columns on all screens */}
                <div className="grid grid-cols-3 gap-3 md:gap-8 mb-6 md:mb-12">
                    {/* Liens Rapides */}
                    <div>
                        <h3 className="text-white text-xs md:text-lg font-bold mb-2 md:mb-6">{t('footer.quick_links') || 'Liens Rapides'}</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li><Link to="/vehicules" className="text-gray-400 hover:text-white transition-colors text-[10px] md:text-base leading-tight">{t('footer.available_vehicles') || 'Véhicules Disponibles'}</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-[10px] md:text-base leading-tight">{t('footer.our_services') || 'Nos Services'}</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-[10px] md:text-base leading-tight">{t('footer.about') || 'À Propos'}</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-[10px] md:text-base leading-tight">{t('nav.contact') || 'Contact'}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-xs md:text-lg font-bold mb-2 md:mb-6">{t('nav.services') || 'Services'}</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li className="text-gray-400 text-[10px] md:text-base leading-tight">{t('footer.service1') || 'Importation Allemagne'}</li>
                            <li className="text-gray-400 text-[10px] md:text-base leading-tight">{t('footer.service2') || 'Inspection Technique'}</li>
                            <li className="text-gray-400 text-[10px] md:text-base leading-tight">{t('footer.service3') || 'Transport Sécurisé'}</li>
                            <li className="text-gray-400 text-[10px] md:text-base leading-tight">{t('footer.service4') || 'Dédouanement'}</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white text-xs md:text-lg font-bold mb-2 md:mb-6">{t('nav.contact') || 'Contact'}</h3>
                        <ul className="space-y-1 md:space-y-3">
                            <li className="flex items-start gap-1 md:gap-3 text-gray-400 text-[10px] md:text-base leading-tight">
                                <Phone className="h-3 w-3 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                                <span className="break-all">+33 1 23 45 67 89</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-3 text-gray-400 text-[10px] md:text-base leading-tight">
                                <Mail className="h-3 w-3 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                                <span className="break-all">contact@auto17.fr</span>
                            </li>
                            <li className="flex items-start gap-1 md:gap-3 text-gray-400 text-[10px] md:text-base leading-tight">
                                <MapPin className="h-3 w-3 md:h-5 md:w-5 mt-0.5 flex-shrink-0" />
                                <span>17 Avenue de la République<br />75011 Paris, France</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-4 md:pt-8 text-center text-gray-400 text-[10px] md:text-sm">
                    <p>&copy; {new Date().getFullYear()} AUTO17. {t('footer.rights') || 'Tous droits réservés'}.</p>
                </div>
            </div>
        </footer>
    );
};

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow"><Outlet /></main>
            <Footer />
        </div>
    );
};

export default Layout;
