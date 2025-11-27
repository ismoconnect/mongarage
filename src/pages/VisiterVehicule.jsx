import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Video, MapPin, Calendar, Phone, Mail, CheckCircle, Camera, Clock, MessageCircle } from 'lucide-react';

const VisiterVehicule = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState('virtual');

    const visitOptions = [
        {
            id: 'virtual',
            icon: Video,
            title: t('visit.options.virtual.title'),
            description: t('visit.options.virtual.description'),
            color: "blue",
            features: [
                t('visit.options.virtual.features.0'),
                t('visit.options.virtual.features.1'),
                t('visit.options.virtual.features.2'),
                t('visit.options.virtual.features.3'),
                t('visit.options.virtual.features.4')
            ],
            advantages: [
                t('visit.options.virtual.advantages.0'),
                t('visit.options.virtual.advantages.1'),
                t('visit.options.virtual.advantages.2'),
                t('visit.options.virtual.advantages.3')
            ]
        },
        {
            id: 'video',
            icon: Camera,
            title: t('visit.options.video.title'),
            description: t('visit.options.video.description'),
            color: "green",
            features: [
                t('visit.options.video.features.0'),
                t('visit.options.video.features.1'),
                t('visit.options.video.features.2'),
                t('visit.options.video.features.3'),
                t('visit.options.video.features.4')
            ],
            advantages: [
                t('visit.options.video.advantages.0'),
                t('visit.options.video.advantages.1'),
                t('visit.options.video.advantages.2'),
                t('visit.options.video.advantages.3')
            ]
        },
        {
            id: 'physical',
            icon: MapPin,
            title: t('visit.options.physical.title'),
            description: t('visit.options.physical.description'),
            color: "purple",
            features: [
                t('visit.options.physical.features.0'),
                t('visit.options.physical.features.1'),
                t('visit.options.physical.features.2'),
                t('visit.options.physical.features.3'),
                t('visit.options.physical.features.4')
            ],
            advantages: [
                t('visit.options.physical.advantages.0'),
                t('visit.options.physical.advantages.1'),
                t('visit.options.physical.advantages.2'),
                t('visit.options.physical.advantages.3')
            ]
        }
    ];

    const locations = [
        {
            city: "Berlin",
            country: t('visit.locations.germany'),
            flag: "🇩🇪",
            address: "Kurfürstendamm 123, 10719 Berlin",
            hours: t('visit.locations.hours_berlin')
        },
        {
            city: "Paris",
            country: t('visit.locations.france'),
            flag: "🇫🇷",
            address: "Avenue des Champs-Élysées 75, 75008 Paris",
            hours: t('visit.locations.hours_paris')
        },
        {
            city: "Bruxelles",
            country: t('visit.locations.belgium'),
            flag: "🇧🇪",
            address: "Avenue Louise 250, 1050 Bruxelles",
            hours: t('visit.locations.hours_brussels')
        }
    ];

    const steps = [
        {
            number: "1",
            title: t('visit.steps.1.title'),
            description: t('visit.steps.1.description')
        },
        {
            number: "2",
            title: t('visit.steps.2.title'),
            description: t('visit.steps.2.description')
        },
        {
            number: "3",
            title: t('visit.steps.3.title'),
            description: t('visit.steps.3.description')
        },
        {
            number: "4",
            title: t('visit.steps.4.title'),
            description: t('visit.steps.4.description')
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600', button: 'bg-blue-600' },
            green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-600', button: 'bg-green-600' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600', button: 'bg-purple-600' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <Video className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('visit.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            {t('visit.hero.subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Visit Options */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('visit.options_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('visit.options_subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {visitOptions.map((option) => {
                            const colors = getColorClasses(option.color);
                            const isSelected = selectedOption === option.id;
                            return (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`${colors.bg} border-2 ${isSelected ? colors.border : 'border-transparent'} rounded-2xl p-8 cursor-pointer transition-all hover:shadow-xl ${isSelected ? 'shadow-xl scale-105' : ''
                                        }`}
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <div className={`p-4 bg-white rounded-xl shadow-lg`}>
                                            <option.icon className={`h-12 w-12 ${colors.text}`} />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3 text-center">{option.title}</h3>
                                    <p className="text-gray-700 mb-6 text-center">{option.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-bold text-primary mb-3">{t('visit.included')}</h4>
                                        <ul className="space-y-2">
                                            {option.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className={`h-4 w-4 ${colors.text} flex-shrink-0 mt-0.5`} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className={`w-full ${colors.button} text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity`}>
                                        {t('visit.choose_option')}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Selected Option Details */}
                    {selectedOption && (
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                {t('visit.advantages_prefix')} {visitOptions.find(o => o.id === selectedOption)?.title}
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {visitOptions.find(o => o.id === selectedOption)?.advantages.map((advantage, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Steps */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('visit.how_it_works_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('visit.how_it_works_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Locations */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t('visit.locations_title')}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t('visit.locations_subtitle')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {locations.map((location, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="text-center mb-4">
                                    <div className="text-6xl mb-3">{location.flag}</div>
                                    <h3 className="text-2xl font-bold text-primary">{location.city}</h3>
                                    <p className="text-gray-600">{location.country}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2">
                                        <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm">{location.address}</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 text-sm">{location.hours}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">{t('visit.cta.title')}</h2>
                        <p className="text-xl text-white/90 mb-8">
                            {t('visit.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+33123456789"
                                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="h-5 w-5" />
                                {t('visit.cta.call')}
                            </a>
                            <a
                                href="/contact"
                                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <Mail className="h-5 w-5" />
                                {t('visit.cta.email')}
                            </a>
                            <a
                                href="https://wa.me/33123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="h-5 w-5" />
                                {t('visit.cta.whatsapp')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        {t('visit.faq_title')}
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: t('visit.faq.0.q'),
                                a: t('visit.faq.0.a')
                            },
                            {
                                q: t('visit.faq.1.q'),
                                a: t('visit.faq.1.a')
                            },
                            {
                                q: t('visit.faq.2.q'),
                                a: t('visit.faq.2.a')
                            },
                            {
                                q: t('visit.faq.3.q'),
                                a: t('visit.faq.3.a')
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="font-bold text-lg text-primary mb-3">{faq.q}</h3>
                                <p className="text-gray-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisiterVehicule;
