import React from 'react';
import { useTranslation } from 'react-i18next';
import { Search, FileText, CreditCard, Truck, CheckCircle, Shield, Phone, MessageCircle } from 'lucide-react';

const CommentAcheter = () => {
    const { t } = useTranslation();

    const steps = [
        {
            number: "01",
            icon: Search,
            title: t('how_to_buy.steps.step1.title'),
            description: t('how_to_buy.steps.step1.desc'),
            details: [
                t('how_to_buy.steps.step1.details.0'),
                t('how_to_buy.steps.step1.details.1'),
                t('how_to_buy.steps.step1.details.2'),
                t('how_to_buy.steps.step1.details.3')
            ],
            color: "blue"
        },
        {
            number: "02",
            icon: Phone,
            title: t('how_to_buy.steps.step2.title'),
            description: t('how_to_buy.steps.step2.desc'),
            details: [
                t('how_to_buy.steps.step2.details.0'),
                t('how_to_buy.steps.step2.details.1'),
                t('how_to_buy.steps.step2.details.2'),
                t('how_to_buy.steps.step2.details.3')
            ],
            color: "green"
        },
        {
            number: "03",
            icon: FileText,
            title: t('how_to_buy.steps.step3.title'),
            description: t('how_to_buy.steps.step3.desc'),
            details: [
                t('how_to_buy.steps.step3.details.0'),
                t('how_to_buy.steps.step3.details.1'),
                t('how_to_buy.steps.step3.details.2'),
                t('how_to_buy.steps.step3.details.3')
            ],
            color: "purple"
        },
        {
            number: "04",
            icon: CreditCard,
            title: t('how_to_buy.steps.step4.title'),
            description: t('how_to_buy.steps.step4.desc'),
            details: [
                t('how_to_buy.steps.step4.details.0'),
                t('how_to_buy.steps.step4.details.1'),
                t('how_to_buy.steps.step4.details.2'),
                t('how_to_buy.steps.step4.details.3')
            ],
            color: "orange"
        },
        {
            number: "05",
            icon: Shield,
            title: t('how_to_buy.steps.step5.title'),
            description: t('how_to_buy.steps.step5.desc'),
            details: [
                t('how_to_buy.steps.step5.details.0'),
                t('how_to_buy.steps.step5.details.1'),
                t('how_to_buy.steps.step5.details.2'),
                t('how_to_buy.steps.step5.details.3')
            ],
            color: "red"
        },
        {
            number: "06",
            icon: Truck,
            title: t('how_to_buy.steps.step6.title'),
            description: t('how_to_buy.steps.step6.desc'),
            details: [
                t('how_to_buy.steps.step6.details.0'),
                t('how_to_buy.steps.step6.details.1'),
                t('how_to_buy.steps.step6.details.2'),
                t('how_to_buy.steps.step6.details.3')
            ],
            color: "green"
        }
    ];

    const paymentMethods = [
        {
            title: t('how_to_buy.payment.methods.bank_transfer.title'),
            description: t('how_to_buy.payment.methods.bank_transfer.desc'),
            icon: "🏦"
        },
        {
            title: t('how_to_buy.payment.methods.card.title'),
            description: t('how_to_buy.payment.methods.card.desc'),
            icon: "💳"
        },
        {
            title: t('how_to_buy.payment.methods.financing.title'),
            description: t('how_to_buy.payment.methods.financing.desc'),
            icon: "📊"
        }
    ];

    const guarantees = [
        {
            icon: CheckCircle,
            title: t('how_to_buy.guarantees.money_back.title'),
            description: t('how_to_buy.guarantees.money_back.desc')
        },
        {
            icon: Shield,
            title: t('how_to_buy.guarantees.mechanical.title'),
            description: t('how_to_buy.guarantees.mechanical.desc')
        },
        {
            icon: FileText,
            title: t('how_to_buy.guarantees.documents.title'),
            description: t('how_to_buy.guarantees.documents.desc')
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            purple: 'from-purple-500 to-purple-600',
            orange: 'from-orange-500 to-orange-600',
            red: 'from-red-500 to-red-600'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <CreditCard className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('how_to_buy.hero_title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('how_to_buy.hero_subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Steps */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Number & Icon */}
                                <div className="md:w-1/3 flex flex-col items-center text-center">
                                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${getColorClasses(step.color)} flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-xl`}>
                                        {step.number}
                                    </div>
                                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${getColorClasses(step.color)} bg-opacity-10 flex items-center justify-center mb-4`}>
                                        <step.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 bg-white rounded-2xl shadow-lg p-8">
                                    <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                                    <p className="text-gray-700 mb-6 text-lg">{step.description}</p>
                                    <ul className="space-y-3">
                                        {step.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('how_to_buy.payment.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('how_to_buy.payment.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {paymentMethods.map((method, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                                <div className="text-6xl mb-4">{method.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-3">{method.title}</h3>
                                <p className="text-gray-600">{method.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Guarantees */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('how_to_buy.guarantees.title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('how_to_buy.guarantees.subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {guarantees.map((guarantee, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                    <guarantee.icon className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{guarantee.title}</h3>
                                <p className="text-gray-600">{guarantee.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Quick */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        {t('how_to_buy.faq.title')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: t('how_to_buy.faq.q1'),
                                a: t('how_to_buy.faq.a1')
                            },
                            {
                                q: t('how_to_buy.faq.q2'),
                                a: t('how_to_buy.faq.a2')
                            },
                            {
                                q: t('how_to_buy.faq.q3'),
                                a: t('how_to_buy.faq.a3')
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
                        {t('how_to_buy.cta.title')}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {t('how_to_buy.cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/vehicules"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            {t('how_to_buy.cta.btn_vehicles')}
                        </a>
                        <a
                            href="/contact"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            {t('how_to_buy.cta.btn_contact')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentAcheter;
