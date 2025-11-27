import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench, CheckCircle, Shield, FileText, Camera, Award, AlertTriangle, TrendingUp } from 'lucide-react';

const Expertises = () => {
    const { t } = useTranslation();

    const inspectionPoints = [
        {
            category: t('expertises.categories.mechanical'),
            icon: Wrench,
            color: "blue",
            points: [
                t('expertises.points.mechanical_1'),
                t('expertises.points.mechanical_2'),
                t('expertises.points.mechanical_3'),
                t('expertises.points.mechanical_4'),
                t('expertises.points.mechanical_5')
            ]
        },
        {
            category: t('expertises.categories.electronic'),
            icon: TrendingUp,
            color: "purple",
            points: [
                t('expertises.points.electronic_1'),
                t('expertises.points.electronic_2'),
                t('expertises.points.electronic_3'),
                t('expertises.points.electronic_4'),
                t('expertises.points.electronic_5')
            ]
        },
        {
            category: t('expertises.categories.security'),
            icon: Shield,
            color: "red",
            points: [
                t('expertises.points.security_1'),
                t('expertises.points.security_2'),
                t('expertises.points.security_3'),
                t('expertises.points.security_4'),
                t('expertises.points.security_5')
            ]
        },
        {
            category: t('expertises.categories.bodywork'),
            icon: Camera,
            color: "green",
            points: [
                t('expertises.points.bodywork_1'),
                t('expertises.points.bodywork_2'),
                t('expertises.points.bodywork_3'),
                t('expertises.points.bodywork_4'),
                t('expertises.points.bodywork_5')
            ]
        }
    ];

    const process = [
        {
            step: "1",
            title: t('expertises.process.step1_title'),
            description: t('expertises.process.step1_desc'),
            icon: "👁️",
            details: [
                t('expertises.process.step1_detail1'),
                t('expertises.process.step1_detail2'),
                t('expertises.process.step1_detail3'),
                t('expertises.process.step1_detail4')
            ]
        },
        {
            step: "2",
            title: t('expertises.process.step2_title'),
            description: t('expertises.process.step2_desc'),
            icon: "🔧",
            details: [
                t('expertises.process.step2_detail1'),
                t('expertises.process.step2_detail2'),
                t('expertises.process.step2_detail3'),
                t('expertises.process.step2_detail4')
            ]
        },
        {
            step: "3",
            title: t('expertises.process.step3_title'),
            description: t('expertises.process.step3_desc'),
            icon: "📄",
            details: [
                t('expertises.process.step3_detail1'),
                t('expertises.process.step3_detail2'),
                t('expertises.process.step3_detail3'),
                t('expertises.process.step3_detail4')
            ]
        },
        {
            step: "4",
            title: t('expertises.process.step4_title'),
            description: t('expertises.process.step4_desc'),
            icon: "📊",
            details: [
                t('expertises.process.step4_detail1'),
                t('expertises.process.step4_detail2'),
                t('expertises.process.step4_detail3'),
                t('expertises.process.step4_detail4')
            ]
        }
    ];

    const certifications = [
        {
            icon: Award,
            title: t('expertises.certifications.certified_title'),
            description: t('expertises.certifications.certified_desc')
        },
        {
            icon: Shield,
            title: t('expertises.certifications.independent_title'),
            description: t('expertises.certifications.independent_desc')
        },
        {
            icon: FileText,
            title: t('expertises.certifications.report_title'),
            description: t('expertises.certifications.report_desc')
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600' },
            red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600' },
            green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <Wrench className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('expertises.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('expertises.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">{t('expertises.intro_title')}</h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        {t('expertises.intro_desc')}
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">150</div>
                            <p className="text-gray-700">{t('expertises.stats.points')}</p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <p className="text-gray-700">{t('expertises.stats.inspected')}</p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">15+</div>
                            <p className="text-gray-700">{t('expertises.stats.experience')}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inspection Points */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('expertises.points_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('expertises.points_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {inspectionPoints.map((category, index) => {
                            const colors = getColorClasses(category.color);
                            return (
                                <div key={index} className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8`}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 bg-white rounded-xl`}>
                                            <category.icon className={`h-8 w-8 ${colors.icon}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {category.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className={`h-5 w-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                                                <span className="text-gray-700">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('expertises.process_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('expertises.process_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {process.map((item, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <div className="text-4xl mb-2">{item.icon}</div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                        <p className="text-gray-700 mb-4">{item.description}</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 ml-16">
                                    {item.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600 text-sm">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('expertises.certifications_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('expertises.certifications_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <cert.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{cert.title}</h3>
                                <p className="text-gray-600">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* What We Check */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        {t('expertises.check_title')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                icon: CheckCircle,
                                title: t('expertises.checks.accidents_title'),
                                description: t('expertises.checks.accidents_desc')
                            },
                            {
                                icon: CheckCircle,
                                title: t('expertises.checks.mileage_title'),
                                description: t('expertises.checks.mileage_desc')
                            },
                            {
                                icon: CheckCircle,
                                title: t('expertises.checks.mechanical_title'),
                                description: t('expertises.checks.mechanical_desc')
                            },
                            {
                                icon: CheckCircle,
                                title: t('expertises.checks.legal_title'),
                                description: t('expertises.checks.legal_desc')
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 items-start bg-gray-50 p-6 rounded-xl">
                                <item.icon className="h-8 w-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Warning */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl font-bold text-yellow-900 mb-4">{t('expertises.warning.title')}</h3>
                                <p className="text-yellow-800 mb-4">
                                    {t('expertises.warning.desc1')}
                                </p>
                                <p className="text-yellow-800 font-medium">
                                    {t('expertises.warning.desc2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('expertises.cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('expertises.cta_subtitle')}
                    </p>
                    <a
                        href="/vehicules"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                    >
                        {t('expertises.cta_btn')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Expertises;
