import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Heart, Award, Users, Leaf, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Engagements = () => {
    const { t } = useTranslation();

    const engagements = [
        {
            icon: Shield,
            title: t('commitments.items.transparency.title'),
            description: t('commitments.items.transparency.description'),
            color: "blue",
            points: [
                t('commitments.items.transparency.points.0'),
                t('commitments.items.transparency.points.1'),
                t('commitments.items.transparency.points.2'),
                t('commitments.items.transparency.points.3')
            ]
        },
        {
            icon: Award,
            title: t('commitments.items.quality.title'),
            description: t('commitments.items.quality.description'),
            color: "green",
            points: [
                t('commitments.items.quality.points.0'),
                t('commitments.items.quality.points.1'),
                t('commitments.items.quality.points.2'),
                t('commitments.items.quality.points.3')
            ]
        },
        {
            icon: Heart,
            title: t('commitments.items.service.title'),
            description: t('commitments.items.service.description'),
            color: "red",
            points: [
                t('commitments.items.service.points.0'),
                t('commitments.items.service.points.1'),
                t('commitments.items.service.points.2'),
                t('commitments.items.service.points.3')
            ]
        },
        {
            icon: Leaf,
            title: t('commitments.items.ecology.title'),
            description: t('commitments.items.ecology.description'),
            color: "green",
            points: [
                t('commitments.items.ecology.points.0'),
                t('commitments.items.ecology.points.1'),
                t('commitments.items.ecology.points.2'),
                t('commitments.items.ecology.points.3')
            ]
        },
        {
            icon: Users,
            title: t('commitments.items.trust.title'),
            description: t('commitments.items.trust.description'),
            color: "purple",
            points: [
                t('commitments.items.trust.points.0'),
                t('commitments.items.trust.points.1'),
                t('commitments.items.trust.points.2'),
                t('commitments.items.trust.points.3')
            ]
        },
        {
            icon: TrendingUp,
            title: t('commitments.items.innovation.title'),
            description: t('commitments.items.innovation.description'),
            color: "orange",
            points: [
                t('commitments.items.innovation.points.0'),
                t('commitments.items.innovation.points.1'),
                t('commitments.items.innovation.points.2'),
                t('commitments.items.innovation.points.3')
            ]
        }
    ];

    const values = [
        { icon: CheckCircle, text: t('commitments.values.0') },
        { icon: CheckCircle, text: t('commitments.values.1') },
        { icon: CheckCircle, text: t('commitments.values.2') },
        { icon: CheckCircle, text: t('commitments.values.3') }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', title: 'text-blue-900' },
            green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', title: 'text-green-900' },
            red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', title: 'text-red-900' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', title: 'text-purple-900' },
            orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', title: 'text-orange-900' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <Star className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('commitments.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('commitments.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">{t('commitments.promise_title')}</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {t('commitments.promise_text')}
                    </p>
                </div>
            </div>

            {/* Engagements */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {engagements.map((engagement, index) => {
                            const colors = getColorClasses(engagement.color);
                            return (
                                <div
                                    key={index}
                                    className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-shadow`}
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`${colors.bg} p-3 rounded-xl`}>
                                            <engagement.icon className={`h-8 w-8 ${colors.icon}`} />
                                        </div>
                                        <div>
                                            <h3 className={`text-2xl font-bold ${colors.title} mb-2`}>
                                                {engagement.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {engagement.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {engagement.points.map((point, idx) => (
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

            {/* Nos Valeurs */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('commitments.core_values_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('commitments.core_values_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
                                <value.icon className="h-8 w-8 text-green-600 flex-shrink-0" />
                                <span className="text-lg font-medium text-gray-800">{value.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Témoignages */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('commitments.testimonials_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('commitments.testimonials_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sophie Martin",
                                location: t('commitments.testimonials.0.location'),
                                text: t('commitments.testimonials.0.text'),
                                rating: 5
                            },
                            {
                                name: "Marc Dubois",
                                location: t('commitments.testimonials.1.location'),
                                text: t('commitments.testimonials.1.text'),
                                rating: 5
                            },
                            {
                                name: "Laura Rossi",
                                location: t('commitments.testimonials.2.location'),
                                text: t('commitments.testimonials.2.text'),
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-bold text-primary">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.location}</p>
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
                        {t('commitments.cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('commitments.cta_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/vehicules"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('commitments.cta_btn_vehicles')}
                        </a>
                        <a
                            href="/contact"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('commitments.cta_btn_contact')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engagements;
