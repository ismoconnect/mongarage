import React from 'react';
import { Shield, Truck, FileText, Wrench, Search, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: Search,
            title: t('services_page.search_title'),
            description: t('services_page.search_desc'),
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Wrench,
            title: t('services_page.inspection_title'),
            description: t('services_page.inspection_desc'),
            color: "bg-green-100 text-green-600"
        },
        {
            icon: FileText,
            title: t('services_page.admin_title'),
            description: t('services_page.admin_desc'),
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: Truck,
            title: t('services_page.transport_title'),
            description: t('services_page.transport_desc'),
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: Shield,
            title: t('services_page.warranty_title'),
            description: t('services_page.warranty_desc'),
            color: "bg-red-100 text-red-600"
        },
        {
            icon: FileText,
            title: t('services_page.registration_title'),
            description: t('services_page.registration_desc'),
            color: "bg-teal-100 text-teal-600"
        }
    ];

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-primary text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('services_page.title')}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        {t('services_page.subtitle')}
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">{t('services_page.process_title')}</h2>
                        <p className="text-gray-600">{t('services_page.process_subtitle')}</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: 1, title: t('services_page.step1_title'), desc: t('services_page.step1_desc') },
                                { step: 2, title: t('services_page.step2_title'), desc: t('services_page.step2_desc') },
                                { step: 3, title: t('services_page.step3_title'), desc: t('services_page.step3_desc') },
                                { step: 4, title: t('services_page.step4_title'), desc: t('services_page.step4_desc') }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 text-center">
                                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg ring-4 ring-white">
                                        {item.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-accent py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">{t('services_page.cta_title')}</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link to="/contact" className="bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition-colors">
                            {t('services_page.cta_contact')}
                        </Link>
                        <a href="tel:+49123456789" className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full font-bold transition-colors">
                            <Phone className="h-5 w-5" />
                            +49 123 456 789
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
