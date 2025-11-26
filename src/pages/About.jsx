import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Globe, Shield, TrendingUp, Heart, CheckCircle, Target } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const stats = [
        { icon: Users, value: "10,000+", label: t('about_page.stats.clients') },
        { icon: Globe, value: "15+", label: t('about_page.stats.countries') },
        { icon: Award, value: "15 ans", label: t('about_page.stats.experience') },
        { icon: TrendingUp, value: "98%", label: t('about_page.stats.satisfaction') }
    ];

    const values = [
        {
            icon: Shield,
            title: t('about_page.values.transparency_title'),
            description: t('about_page.values.transparency_desc')
        },
        {
            icon: Heart,
            title: t('about_page.values.passion_title'),
            description: t('about_page.values.passion_desc')
        },
        {
            icon: CheckCircle,
            title: t('about_page.values.quality_title'),
            description: t('about_page.values.quality_desc')
        },
        {
            icon: Target,
            title: t('about_page.values.excellence_title'),
            description: t('about_page.values.excellence_desc')
        }
    ];

    const team = [
        {
            name: "Jean Dupont",
            role: t('about_page.team.member1_role'),
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
            description: t('about_page.team.member1_desc')
        },
        {
            name: "Marie Schmidt",
            role: t('about_page.team.member2_role'),
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            description: t('about_page.team.member2_desc')
        },
        {
            name: "Thomas Weber",
            role: t('about_page.team.member3_role'),
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            description: t('about_page.team.member3_desc')
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('about_page.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('about_page.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white py-16 border-b">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                                    <stat.icon className="h-8 w-8 text-accent" />
                                </div>
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notre Histoire */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('about_page.history.title')}</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    {t('about_page.history.p1')}
                                </p>
                                <p>
                                    {t('about_page.history.p2')}
                                </p>
                                <p>
                                    {t('about_page.history.p3')}
                                </p>
                                <p>
                                    {t('about_page.history.p4')}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80"
                                alt="Notre showroom"
                                className="rounded-2xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-xl">
                                <div className="text-3xl font-bold">15 ans</div>
                                <div className="text-sm">{t('about_page.history.years_excellence')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nos Valeurs */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('about_page.values.title')}</h2>
                        <p className="text-xl text-gray-600">{t('about_page.values.subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notre Équipe */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('about_page.team.title')}</h2>
                        <p className="text-xl text-gray-600">{t('about_page.team.subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                                    <p className="text-accent font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('about_page.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('about_page.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/vehicules"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('about_page.cta.btn_vehicles')}
                        </a>
                        <a
                            href="/contact"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('about_page.cta.btn_contact')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
