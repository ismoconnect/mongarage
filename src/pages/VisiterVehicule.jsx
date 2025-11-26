import React, { useState } from 'react';
import { Video, MapPin, Calendar, Phone, Mail, CheckCircle, Camera, Clock, MessageCircle } from 'lucide-react';

const VisiterVehicule = () => {
    const [selectedOption, setSelectedOption] = useState('virtual');

    const visitOptions = [
        {
            id: 'virtual',
            icon: Video,
            title: "Visite Virtuelle 360°",
            description: "Explorez le véhicule en détail depuis chez vous",
            color: "blue",
            features: [
                "Visite interactive à 360°",
                "Photos HD de tous les angles",
                "Zoom sur les détails",
                "Vidéo de présentation",
                "Disponible 24/7"
            ],
            advantages: [
                "Gratuit et immédiat",
                "Aucun déplacement nécessaire",
                "Prenez votre temps",
                "Partagez avec votre famille"
            ]
        },
        {
            id: 'video',
            icon: Camera,
            title: "Visite en Visioconférence",
            description: "Un expert vous présente le véhicule en direct",
            color: "green",
            features: [
                "Appel vidéo avec un expert",
                "Présentation personnalisée",
                "Posez toutes vos questions",
                "Durée : 30-45 minutes",
                "Sur rendez-vous"
            ],
            advantages: [
                "Interaction en temps réel",
                "Conseils d'expert",
                "Vérification de points spécifiques",
                "Enregistrement possible"
            ]
        },
        {
            id: 'physical',
            icon: MapPin,
            title: "Visite Physique",
            description: "Venez voir et essayer le véhicule sur place",
            color: "purple",
            features: [
                "Visite dans nos locaux",
                "Essai routier possible",
                "Inspection détaillée",
                "Rencontre avec l'équipe",
                "Sur rendez-vous"
            ],
            advantages: [
                "Expérience complète",
                "Essai sur route",
                "Vérification personnelle",
                "Décision immédiate possible"
            ]
        }
    ];

    const locations = [
        {
            city: "Berlin",
            country: "Allemagne",
            flag: "🇩🇪",
            address: "Kurfürstendamm 123, 10719 Berlin",
            hours: "Lun-Ven: 9h-18h, Sam: 10h-16h"
        },
        {
            city: "Paris",
            country: "France",
            flag: "🇫🇷",
            address: "Avenue des Champs-Élysées 75, 75008 Paris",
            hours: "Lun-Ven: 9h-18h, Sam: 10h-15h"
        },
        {
            city: "Bruxelles",
            country: "Belgique",
            flag: "🇧🇪",
            address: "Avenue Louise 250, 1050 Bruxelles",
            hours: "Lun-Ven: 9h-17h30, Sam: 10h-14h"
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Choisissez Votre Véhicule",
            description: "Parcourez notre catalogue et sélectionnez le véhicule qui vous intéresse"
        },
        {
            number: "2",
            title: "Réservez Votre Visite",
            description: "Choisissez le type de visite et prenez rendez-vous en ligne ou par téléphone"
        },
        {
            number: "3",
            title: "Préparez Vos Questions",
            description: "Notez tous les points que vous souhaitez vérifier ou les questions à poser"
        },
        {
            number: "4",
            title: "Visitez le Véhicule",
            description: "Profitez de votre visite virtuelle, en visio ou physique selon votre choix"
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
                            Visiter un Véhicule
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Plusieurs options pour découvrir votre futur véhicule en détail
                        </p>
                    </div>
                </div>
            </div>

            {/* Visit Options */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Choisissez Votre Type de Visite
                        </h2>
                        <p className="text-xl text-gray-600">
                            Trois façons de découvrir nos véhicules
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
                                        <h4 className="font-bold text-primary mb-3">Inclus :</h4>
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
                                        Choisir cette option
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Selected Option Details */}
                    {selectedOption && (
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Avantages de la {visitOptions.find(o => o.id === selectedOption)?.title}
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
                            Comment Ça Marche ?
                        </h2>
                        <p className="text-xl text-gray-600">
                            4 étapes simples pour visiter votre véhicule
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
                            Nos Points de Visite
                        </h2>
                        <p className="text-xl text-gray-600">
                            Visitez nos showrooms en Europe
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
                        <h2 className="text-3xl font-bold mb-4">Prêt à Visiter Votre Futur Véhicule ?</h2>
                        <p className="text-xl text-white/90 mb-8">
                            Contactez-nous pour planifier votre visite virtuelle, en visio ou physique
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+33123456789"
                                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <Phone className="h-5 w-5" />
                                Appelez-nous
                            </a>
                            <a
                                href="/contact"
                                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <Mail className="h-5 w-5" />
                                Envoyez un email
                            </a>
                            <a
                                href="https://wa.me/33123456789"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        Questions Fréquentes
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "La visite virtuelle est-elle aussi détaillée qu'une visite physique ?",
                                a: "Oui ! Nos visites virtuelles 360° incluent des photos HD de tous les angles, des zooms sur les détails et une vidéo de présentation complète."
                            },
                            {
                                q: "Puis-je faire un essai routier ?",
                                a: "Oui, lors d'une visite physique dans nos locaux, vous pouvez effectuer un essai routier sur rendez-vous."
                            },
                            {
                                q: "Combien de temps dure une visite en visioconférence ?",
                                a: "Une visite en visioconférence dure généralement entre 30 et 45 minutes, selon vos questions et besoins."
                            },
                            {
                                q: "Dois-je payer pour une visite ?",
                                a: "Non, toutes nos visites (virtuelles, visio et physiques) sont entièrement gratuites et sans engagement."
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
