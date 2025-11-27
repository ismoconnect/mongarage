import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Building, Award, Shield, CheckCircle, TrendingUp, FileText, Users } from 'lucide-react';

const Provenance = () => {
    const { t } = useTranslation();

    const sources = [
        {
            icon: Building,
            title: t('sourcing.sources.fleet_title'),
            percentage: "40%",
            description: t('sourcing.sources.fleet_desc'),
            color: "blue",
            advantages: [
                t('sourcing.sources.fleet_adv1'),
                t('sourcing.sources.fleet_adv2'),
                t('sourcing.sources.fleet_adv3'),
                t('sourcing.sources.fleet_adv4')
            ]
        },
        {
            icon: Award,
            title: t('sourcing.sources.leasing_title'),
            percentage: "35%",
            description: t('sourcing.sources.leasing_desc'),
            color: "green",
            advantages: [
                t('sourcing.sources.leasing_adv1'),
                t('sourcing.sources.leasing_adv2'),
                t('sourcing.sources.leasing_adv3'),
                t('sourcing.sources.leasing_adv4')
            ]
        },
        {
            icon: Users,
            title: t('sourcing.sources.trade_in_title'),
            percentage: "25%",
            description: t('sourcing.sources.trade_in_desc'),
            color: "purple",
            advantages: [
                t('sourcing.sources.trade_in_adv1'),
                t('sourcing.sources.trade_in_adv2'),
                t('sourcing.sources.trade_in_adv3'),
                t('sourcing.sources.trade_in_adv4')
            ]
        }
    ];

    const countries = [
        {
            name: t('countries.germany'),
            flag: "🇩🇪",
            percentage: "85%",
            description: t('sourcing.countries.germany_desc'),
            reasons: [
                t('sourcing.countries.germany_reason1'),
                t('sourcing.countries.germany_reason2'),
                t('sourcing.countries.germany_reason3'),
                t('sourcing.countries.germany_reason4')
            ]
        },
        {
            name: t('sourcing.countries.austria'),
            flag: "🇦🇹",
            percentage: "10%",
            description: t('sourcing.countries.austria_desc'),
            reasons: [
                t('sourcing.countries.austria_reason1'),
                t('sourcing.countries.austria_reason2'),
                t('sourcing.countries.austria_reason3')
            ]
        },
        {
            name: t('sourcing.countries.netherlands'),
            flag: "🇳🇱",
            percentage: "5%",
            description: t('sourcing.countries.netherlands_desc'),
            reasons: [
                t('sourcing.countries.netherlands_reason1'),
                t('sourcing.countries.netherlands_reason2'),
                t('sourcing.countries.netherlands_reason3')
            ]
        }
    ];

    const quality = [
        {
            icon: Shield,
            title: t('sourcing.quality.control_title'),
            description: t('sourcing.quality.control_desc')
        },
        {
            icon: FileText,
            title: t('sourcing.quality.history_title'),
            description: t('sourcing.quality.history_desc')
        },
        {
            icon: CheckCircle,
            title: t('sourcing.quality.certification_title'),
            description: t('sourcing.quality.certification_desc')
        },
        {
            icon: TrendingUp,
            title: t('sourcing.quality.transparency_title'),
            description: t('sourcing.quality.transparency_desc')
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
            green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <MapPin className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('sourcing.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('sourcing.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">{t('sourcing.intro.title')}</h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        {t('sourcing.intro.desc')}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">1er</div>
                            <p className="text-gray-700">{t('sourcing.intro.stat1')}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">85%</div>
                            <p className="text-gray-700">{t('sourcing.intro.stat2')}</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <p className="text-gray-700">{t('sourcing.intro.stat3')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sources */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('sourcing.sources.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('sourcing.sources.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sources.map((source, index) => {
                            const colors = getColorClasses(source.color);
                            return (
                                <div key={index} className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8`}>
                                    <div className="flex items-center justify-between mb-6">
                                        <source.icon className={`h-12 w-12 ${colors.text}`} />
                                        <div className={`text-4xl font-bold ${colors.text}`}>{source.percentage}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{source.title}</h3>
                                    <p className="text-gray-700 mb-6">{source.description}</p>
                                    <ul className="space-y-3">
                                        {source.advantages.map((advantage, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                                <span className="text-gray-700 text-sm">{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Countries */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('sourcing.countries.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('sourcing.countries.subtitle')}
                        </p>
                    </div>
                    <div className="space-y-8">
                        {countries.map((country, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3 text-center">
                                    <div className="text-8xl mb-4">{country.flag}</div>
                                    <h3 className="text-3xl font-bold text-primary mb-2">{country.name}</h3>
                                    <div className="text-5xl font-bold text-accent">{country.percentage}</div>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl text-gray-700 mb-6">{country.description}</p>
                                    <ul className="space-y-3">
                                        {country.reasons.map((reason, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-lg">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quality Control */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('sourcing.quality.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('sourcing.quality.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {quality.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        {t('sourcing.process.title')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: t('sourcing.process.step1_title'),
                                description: t('sourcing.process.step1_desc')
                            },
                            {
                                step: "2",
                                title: t('sourcing.process.step2_title'),
                                description: t('sourcing.process.step2_desc')
                            },
                            {
                                step: "3",
                                title: t('sourcing.process.step3_title'),
                                description: t('sourcing.process.step3_desc')
                            },
                            {
                                step: "4",
                                title: t('sourcing.process.step4_title'),
                                description: t('sourcing.process.step4_desc')
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-700">{item.description}</p>
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
                        {t('sourcing.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('sourcing.cta.subtitle')}
                    </p>
                    <a
                        href="/vehicules"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                    >
                        {t('sourcing.cta.btn')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Provenance;
