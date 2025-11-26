import React from 'react';
import { Shield, CheckCircle, Clock, Phone, Wrench, Car, Award, TrendingUp } from 'lucide-react';

const Garanties = () => {
    const warranties = [
        {
            name: "Garantie Standard",
            duration: "12 mois",
            price: "Incluse",
            color: "primary",
            features: [
                "Couverture mécanique de base",
                "Assistance routière 24/7",
                "Réparations dans notre réseau",
                "Pièces d'origine garanties",
                "Transfert de propriété possible"
            ],
            popular: false
        },
        {
            name: "Garantie Étendue",
            duration: "24 mois",
            price: "1,290€",
            color: "accent",
            features: [
                "Couverture complète mécanique et électrique",
                "Assistance routière 24/7 en Europe",
                "Véhicule de remplacement inclus",
                "Réparations dans tout réseau agréé",
                "Prise en charge des frais de remorquage",
                "Extension possible jusqu'à 36 mois",
                "Pas de franchise"
            ],
            popular: true
        },
        {
            name: "Garantie Premium",
            duration: "36 mois",
            price: "1,890€",
            color: "primary",
            features: [
                "Couverture intégrale tous risques",
                "Assistance routière 24/7 internationale",
                "Véhicule de remplacement premium",
                "Réparations dans tous les centres agréés",
                "Prise en charge totale des frais",
                "Entretien préventif inclus",
                "Garantie carrosserie et peinture",
                "Service de conciergerie"
            ],
            popular: false
        }
    ];

    const coverage = [
        {
            icon: Wrench,
            title: "Moteur et Transmission",
            description: "Couverture complète du groupe motopropulseur, boîte de vitesses et embrayage"
        },
        {
            icon: Car,
            title: "Système Électrique",
            description: "Électronique embarquée, batterie, alternateur et démarreur"
        },
        {
            icon: Shield,
            title: "Suspension et Direction",
            description: "Amortisseurs, ressorts, direction assistée et rotules"
        },
        {
            icon: TrendingUp,
            title: "Système de Freinage",
            description: "Freins, ABS, ESP et tous les composants de sécurité"
        }
    ];

    const advantages = [
        {
            icon: Clock,
            title: "Activation Immédiate",
            description: "Votre garantie est active dès la livraison du véhicule"
        },
        {
            icon: Phone,
            title: "Assistance 24/7",
            description: "Une équipe disponible jour et nuit pour vous assister"
        },
        {
            icon: Award,
            title: "Réseau Européen",
            description: "Plus de 5,000 garages agréés dans toute l'Europe"
        },
        {
            icon: CheckCircle,
            title: "Procédure Simple",
            description: "Déclaration en ligne et prise en charge rapide"
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
                            Nos Garanties
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Roulez l'esprit tranquille avec nos garanties complètes et notre assistance 24/7
                        </p>
                    </div>
                </div>
            </div>

            {/* Plans de Garantie */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Choisissez Votre Protection
                        </h2>
                        <p className="text-xl text-gray-600">
                            Des formules adaptées à tous les besoins
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
                                        POPULAIRE
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
                                        Choisir cette garantie
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
                            Ce Qui Est Couvert
                        </h2>
                        <p className="text-xl text-gray-600">
                            Une protection complète pour votre tranquillité d'esprit
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
                            Nos Avantages
                        </h2>
                        <p className="text-xl text-gray-600">
                            Un service premium pour votre sérénité
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
                        Questions Fréquentes
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Puis-je étendre ma garantie après l'achat ?",
                                a: "Oui, vous pouvez souscrire à une garantie étendue dans les 30 jours suivant l'achat du véhicule."
                            },
                            {
                                q: "La garantie est-elle valable dans toute l'Europe ?",
                                a: "Oui, nos garanties sont valables dans tous les pays européens avec notre réseau de garages agréés."
                            },
                            {
                                q: "Que faire en cas de panne ?",
                                a: "Contactez notre assistance 24/7 au numéro indiqué sur votre certificat de garantie. Nous organiserons le dépannage et la réparation."
                            },
                            {
                                q: "Y a-t-il une franchise à payer ?",
                                a: "La garantie standard peut inclure une franchise. Les garanties étendue et premium n'ont aucune franchise."
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
                        Besoin de Plus d'Informations ?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Notre équipe est à votre disposition pour vous conseiller
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            Nous contacter
                        </a>
                        <a
                            href="tel:+33123456789"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            Appeler maintenant
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Garanties;
