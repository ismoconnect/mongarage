import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, CheckCircle, Clock, Phone, Wrench, Car, Award, TrendingUp } from 'lucide-react';

const Garanties = () => {
    const { t } = useTranslation();

    const warranties = [
        {
            name: t('warranties.plans.standard_name'),
            duration: t('warranties.plans.standard_duration'),
            price: t('warranties.plans.standard_price'),
            color: "primary",
            features: [
                t('warranties.plans.standard_feat1'),
                t('warranties.plans.standard_feat2'),
                t('warranties.plans.standard_feat3'),
                t('warranties.plans.standard_feat4'),
                t('warranties.plans.standard_feat5')
            ],
            popular: false
        },
        {
            name: t('warranties.plans.extended_name'),
            duration: t('warranties.plans.extended_duration'),
            price: "1,290€",
            color: "accent",
            features: [
                t('warranties.plans.extended_feat1'),
                t('warranties.plans.extended_feat2'),
                t('warranties.plans.extended_feat3'),
                t('warranties.plans.extended_feat4'),
                t('warranties.plans.extended_feat5'),
                t('warranties.plans.extended_feat6'),
                t('warranties.plans.extended_feat7')
            ],
            popular: true
        },
        {
            name: t('warranties.plans.premium_name'),
            duration: t('warranties.plans.premium_duration'),
            price: "1,890€",
            color: "primary",
            features: [
                t('warranties.plans.premium_feat1'),
                t('warranties.plans.premium_feat2'),
                t('warranties.plans.premium_feat3'),
                t('warranties.plans.premium_feat4'),
                t('warranties.plans.premium_feat5'),
                t('warranties.plans.premium_feat6'),
                t('warranties.plans.premium_feat7'),
                t('warranties.plans.premium_feat8')
            ],
            popular: false
        }
    ];

    const coverage = [
        {
            icon: Wrench,
            title: t('warranties.coverage.engine_title'),
            description: t('warranties.coverage.engine_desc')
        },
        {
            icon: Car,
            title: t('warranties.coverage.electric_title'),
            description: t('warranties.coverage.electric_desc')
        },
        {
            icon: Shield,
            title: t('warranties.coverage.suspension_title'),
            description: t('warranties.coverage.suspension_desc')
        },
        {
            icon: TrendingUp,
            title: t('warranties.coverage.brakes_title'),
            description: t('warranties.coverage.brakes_desc')
        }
    ];

    const advantages = [
        {
            icon: Clock,
            title: t('warranties.advantages.immediate_title'),
            description: t('warranties.advantages.immediate_desc')
        },
        {
            icon: Phone,
            title: t('warranties.advantages.support_title'),
            description: t('warranties.advantages.support_desc')
        },
        {
            icon: Award,
            title: t('warranties.advantages.network_title'),
            description: t('warranties.advantages.network_desc')
        },
        {
            icon: CheckCircle,
            title: t('warranties.advantages.simple_title'),
            description: t('warranties.advantages.simple_desc')
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <Shield className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('warranties.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('warranties.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Plans de Garantie */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('warranties.plans_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('warranties.plans_subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {warranties.map((warranty, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${warranty.popular ? 'ring-4 ring-accent transform md:scale-105' : ''
                                    }`}
                            >
                                {warranty.popular && (
                                    <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                                        {t('warranties.popular')}
                                    </div>
                                )}
                                <div className={`bg-gradient-to-r ${warranty.color === 'accent' ? 'from-accent to-accent/90' : 'from-primary to-primary/90'} text-white p-8 text-center`}>
                                    <h3 className="text-2xl font-bold mb-2">{warranty.name}</h3>
                                    <div className="text-4xl font-bold mb-2">{warranty.duration}</div>
                                    <div className="text-xl">{warranty.price}</div>
                                </div>
                                <div className="p-8">
                                    <ul className="space-y-4">
                                        {warranty.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full mt-8 ${warranty.popular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'} text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl`}>
                                        {t('warranties.choose_plan')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Ce qui est couvert */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('warranties.coverage_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('warranties.coverage_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coverage.map((item, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Avantages */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('warranties.advantages_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('warranties.advantages_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                                    <advantage.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                                <p className="text-gray-600">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Garanties */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        {t('warranties.faq_title')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: t('warranties.faq.q1'),
                                a: t('warranties.faq.a1')
                            },
                            {
                                q: t('warranties.faq.q2'),
                                a: t('warranties.faq.a2')
                            },
                            {
                                q: t('warranties.faq.q3'),
                                a: t('warranties.faq.a3')
                            },
                            {
                                q: t('warranties.faq.q4'),
                                a: t('warranties.faq.a4')
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="font-bold text-lg text-primary mb-3">{faq.q}</h3>
                                <p className="text-gray-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('warranties.cta_title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('warranties.cta_subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('warranties.contact_btn')}
                        </a>
                        <a
                            href="tel:+33123456789"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            {t('warranties.call_btn')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Garanties;
