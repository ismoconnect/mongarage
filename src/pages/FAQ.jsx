import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: t('faq.categories.purchase.title'),
            questions: [
                {
                    q: t('faq.categories.purchase.q1'),
                    a: t('faq.categories.purchase.a1')
                },
                {
                    q: t('faq.categories.purchase.q2'),
                    a: t('faq.categories.purchase.a2')
                },
                {
                    q: t('faq.categories.purchase.q3'),
                    a: t('faq.categories.purchase.a3')
                },
                {
                    q: t('faq.categories.purchase.q4'),
                    a: t('faq.categories.purchase.a4')
                }
            ]
        },
        {
            category: t('faq.categories.delivery.title'),
            questions: [
                {
                    q: t('faq.categories.delivery.q1'),
                    a: t('faq.categories.delivery.a1')
                },
                {
                    q: t('faq.categories.delivery.q2'),
                    a: t('faq.categories.delivery.a2')
                },
                {
                    q: t('faq.categories.delivery.q3'),
                    a: t('faq.categories.delivery.a3')
                },
                {
                    q: t('faq.categories.delivery.q4'),
                    a: t('faq.categories.delivery.a4')
                }
            ]
        },
        {
            category: t('faq.categories.warranties.title'),
            questions: [
                {
                    q: t('faq.categories.warranties.q1'),
                    a: t('faq.categories.warranties.a1')
                },
                {
                    q: t('faq.categories.warranties.q2'),
                    a: t('faq.categories.warranties.a2')
                },
                {
                    q: t('faq.categories.warranties.q3'),
                    a: t('faq.categories.warranties.a3')
                },
                {
                    q: t('faq.categories.warranties.q4'),
                    a: t('faq.categories.warranties.a4')
                }
            ]
        },
        {
            category: t('faq.categories.documentation.title'),
            questions: [
                {
                    q: t('faq.categories.documentation.q1'),
                    a: t('faq.categories.documentation.a1')
                },
                {
                    q: t('faq.categories.documentation.q2'),
                    a: t('faq.categories.documentation.a2')
                },
                {
                    q: t('faq.categories.documentation.q3'),
                    a: t('faq.categories.documentation.a3')
                },
                {
                    q: t('faq.categories.documentation.q4'),
                    a: t('faq.categories.documentation.a4')
                }
            ]
        },
        {
            category: t('faq.categories.financing.title'),
            questions: [
                {
                    q: t('faq.categories.financing.q1'),
                    a: t('faq.categories.financing.a1')
                },
                {
                    q: t('faq.categories.financing.q2'),
                    a: t('faq.categories.financing.a2')
                },
                {
                    q: t('faq.categories.financing.q3'),
                    a: t('faq.categories.financing.a3')
                },
                {
                    q: t('faq.categories.financing.q4'),
                    a: t('faq.categories.financing.a4')
                }
            ]
        }
    ];

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        {t('faq.hero_title')}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('faq.hero_subtitle')}
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
                                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                {category.questions.map((item, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={questionIndex} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                                            <button
                                                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                                className="w-full flex items-center justify-between text-left py-4 hover:text-primary transition-colors"
                                            >
                                                <span className="font-bold text-lg pr-4">{item.q}</span>
                                                <ChevronDown
                                                    className={`h-6 w-6 text-accent flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="pb-4 text-gray-700 leading-relaxed">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">{t('faq.cta_title')}</h2>
                    <p className="text-xl mb-8 text-white/90">{t('faq.cta_subtitle')}</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="tel:+33123456789"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Phone className="h-5 w-5" />
                            {t('faq.cta_call')}
                        </a>
                        <a
                            href="mailto:contact@auto17.com"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Mail className="h-5 w-5" />
                            {t('faq.cta_email')}
                        </a>
                        <a
                            href="https://wa.me/33123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                            {t('faq.cta_whatsapp')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
