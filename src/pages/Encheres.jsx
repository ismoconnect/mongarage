import React from 'react';
import { useTranslation } from 'react-i18next';
import { Gavel, TrendingUp, Shield, Clock, Award, AlertCircle, CheckCircle, DollarSign } from 'lucide-react';

const Encheres = () => {
    const { t } = useTranslation();

    const advantages = [
        {
            icon: DollarSign,
            title: t('auctions.advantages.price_title'),
            description: t('auctions.advantages.price_desc')
        },
        {
            icon: Shield,
            title: t('auctions.advantages.verified_title'),
            description: t('auctions.advantages.verified_desc')
        },
        {
            icon: Award,
            title: t('auctions.advantages.selection_title'),
            description: t('auctions.advantages.selection_desc')
        },
        {
            icon: TrendingUp,
            title: t('auctions.advantages.transparency_title'),
            description: t('auctions.advantages.transparency_desc')
        }
    ];

    const howItWorks = [
        {
            step: "1",
            title: t('auctions.how_it_works.step1_title'),
            description: t('auctions.how_it_works.step1_desc'),
            icon: "🔍"
        },
        {
            step: "2",
            title: t('auctions.how_it_works.step2_title'),
            description: t('auctions.how_it_works.step2_desc'),
            icon: "📊"
        },
        {
            step: "3",
            title: t('auctions.how_it_works.step3_title'),
            description: t('auctions.how_it_works.step3_desc'),
            icon: "🎯"
        },
        {
            step: "4",
            title: t('auctions.how_it_works.step4_title'),
            description: t('auctions.how_it_works.step4_desc'),
            icon: "✅"
        },
        {
            step: "5",
            title: t('auctions.how_it_works.step5_title'),
            description: t('auctions.how_it_works.step5_desc'),
            icon: "🚚"
        }
    ];

    const types = [
        {
            title: t('auctions.types.fleet_title'),
            description: t('auctions.types.fleet_desc'),
            percentage: "40%",
            color: "blue"
        },
        {
            title: t('auctions.types.leasing_title'),
            description: t('auctions.types.leasing_desc'),
            percentage: "35%",
            color: "green"
        },
        {
            title: t('auctions.types.trade_in_title'),
            description: t('auctions.types.trade_in_desc'),
            percentage: "25%",
            color: "purple"
        }
    ];

    const tips = [
        {
            icon: CheckCircle,
            title: t('auctions.tips.budget_title'),
            description: t('auctions.tips.budget_desc')
        },
        {
            icon: CheckCircle,
            title: t('auctions.tips.flexible_title'),
            description: t('auctions.tips.flexible_desc')
        },
        {
            icon: CheckCircle,
            title: t('auctions.tips.experts_title'),
            description: t('auctions.tips.experts_desc')
        },
        {
            icon: CheckCircle,
            title: t('auctions.tips.act_fast_title'),
            description: t('auctions.tips.act_fast_desc')
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <Gavel className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('auctions.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('auctions.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-6">{t('auctions.intro.title')}</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            {t('auctions.intro.desc')}
                        </p>
                    </div>
                    <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 flex items-start gap-4">
                        <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-yellow-900 mb-2">{t('auctions.intro.important_title')}</h3>
                            <p className="text-yellow-800">
                                {t('auctions.intro.important_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advantages */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('auctions.advantages.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('auctions.advantages.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <advantage.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{advantage.title}</h3>
                                <p className="text-gray-600">{advantage.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('auctions.how_it_works.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('auctions.how_it_works.subtitle')}
                        </p>
                    </div>
                    <div className="space-y-8">
                        {howItWorks.map((item, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-2xl p-8">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                        {item.step}
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-4xl">{item.icon}</span>
                                        <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-lg">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Types of Vehicles */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('auctions.types.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('auctions.types.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {types.map((type, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                                <div className="text-5xl font-bold text-primary mb-4">{type.percentage}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{type.title}</h3>
                                <p className="text-gray-600">{type.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tips */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('auctions.tips.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('auctions.tips.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {tips.map((tip, index) => (
                            <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                                <tip.icon className="h-8 w-8 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{tip.title}</h3>
                                    <p className="text-gray-700">{tip.description}</p>
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
                        {t('auctions.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('auctions.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('auctions.cta.btn_contact')}
                        </a>
                        <a
                            href="/vehicules"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('auctions.cta.btn_vehicles')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Encheres;
