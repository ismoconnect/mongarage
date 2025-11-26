import React from 'react';
import { Wrench, CheckCircle, Shield, FileText, Camera, Award, AlertTriangle, TrendingUp } from 'lucide-react';

const Expertises = () => {
    const inspectionPoints = [
        {
            category: "Mécanique",
            icon: Wrench,
            color: "blue",
            points: [
                "Moteur et transmission",
                "Système de refroidissement",
                "Échappement et catalyseur",
                "Embrayage et boîte de vitesses",
                "Courroie de distribution"
            ]
        },
        {
            category: "Électronique",
            icon: TrendingUp,
            color: "purple",
            points: [
                "Batterie et alternateur",
                "Système électrique complet",
                "Électronique embarquée",
                "Capteurs et calculateurs",
                "Système multimédia"
            ]
        },
        {
            category: "Sécurité",
            icon: Shield,
            color: "red",
            points: [
                "Freins (disques, plaquettes, liquide)",
                "Suspension et amortisseurs",
                "Direction et rotules",
                "Pneus et géométrie",
                "Airbags et ceintures"
            ]
        },
        {
            category: "Carrosserie",
            icon: Camera,
            color: "green",
            points: [
                "État de la peinture",
                "Absence de corrosion",
                "Vitres et pare-brise",
                "Éclairage complet",
                "Étanchéité"
            ]
        }
    ];

    const process = [
        {
            step: "1",
            title: "Inspection Visuelle Complète",
            description: "Examen détaillé de l'extérieur et de l'intérieur du véhicule",
            icon: "👁️",
            details: [
                "Photos HD sous tous les angles",
                "Vérification de la peinture",
                "État de l'intérieur",
                "Contrôle des équipements"
            ]
        },
        {
            step: "2",
            title: "Contrôle Technique Approfondi",
            description: "Test de tous les systèmes mécaniques et électroniques",
            icon: "🔧",
            details: [
                "Diagnostic électronique complet",
                "Test sur route",
                "Mesure des performances",
                "Vérification des niveaux"
            ]
        },
        {
            step: "3",
            title: "Vérification Documentaire",
            description: "Contrôle de l'historique et des documents",
            icon: "📄",
            details: [
                "Historique d'entretien",
                "Vérification VIN",
                "Contrôle des factures",
                "Recherche d'accidents"
            ]
        },
        {
            step: "4",
            title: "Rapport d'Expertise",
            description: "Génération d'un rapport détaillé avec photos",
            icon: "📊",
            details: [
                "Rapport en 150 points",
                "Photos détaillées",
                "Recommandations",
                "Estimation de valeur"
            ]
        }
    ];

    const certifications = [
        {
            icon: Award,
            title: "Experts Certifiés",
            description: "Nos inspecteurs sont certifiés et possèdent plus de 15 ans d'expérience dans l'automobile."
        },
        {
            icon: Shield,
            title: "Indépendance Totale",
            description: "Nos expertises sont réalisées de manière totalement indépendante et objective."
        },
        {
            icon: FileText,
            title: "Rapport Détaillé",
            description: "Chaque véhicule dispose d'un rapport d'inspection complet disponible sur demande."
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
                            Expertises des Véhicules
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Un contrôle rigoureux en 150 points pour votre tranquillité d'esprit
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Notre Engagement Qualité</h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Chaque véhicule que nous proposons passe par une expertise complète réalisée par nos
                        techniciens certifiés. Cette inspection en 150 points garantit que vous recevez un
                        véhicule en parfait état, sans mauvaise surprise.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">150</div>
                            <p className="text-gray-700">Points de contrôle</p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <p className="text-gray-700">Véhicules inspectés</p>
                        </div>
                        <div className="bg-primary/10 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">15+</div>
                            <p className="text-gray-700">Années d'expérience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inspection Points */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Points de Contrôle
                        </h2>
                        <p className="text-xl text-gray-600">
                            Une inspection complète de tous les systèmes
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
                            Notre Processus d'Expertise
                        </h2>
                        <p className="text-xl text-gray-600">
                            4 étapes pour une inspection complète
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
                            Nos Certifications
                        </h2>
                        <p className="text-xl text-gray-600">
                            Des experts reconnus pour leur professionnalisme
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
                        Ce Que Nous Vérifions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                icon: CheckCircle,
                                title: "Absence d'Accidents",
                                description: "Vérification complète de l'historique et recherche de traces de réparation"
                            },
                            {
                                icon: CheckCircle,
                                title: "Kilométrage Certifié",
                                description: "Validation du kilométrage réel via l'historique et les bases de données"
                            },
                            {
                                icon: CheckCircle,
                                title: "État Mécanique",
                                description: "Test complet de tous les systèmes mécaniques et électroniques"
                            },
                            {
                                icon: CheckCircle,
                                title: "Conformité Légale",
                                description: "Vérification de la conformité aux normes européennes et documents"
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
                                <h3 className="text-2xl font-bold text-yellow-900 mb-4">Notre Engagement Transparence</h3>
                                <p className="text-yellow-800 mb-4">
                                    Si lors de notre expertise nous détectons un problème majeur ou un défaut caché,
                                    nous refusons le véhicule. Nous ne proposons que des véhicules qui passent avec
                                    succès notre contrôle qualité rigoureux.
                                </p>
                                <p className="text-yellow-800 font-medium">
                                    Votre satisfaction et votre sécurité sont notre priorité absolue.
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
                        Des Véhicules Expertisés et Certifiés
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Découvrez notre sélection de véhicules ayant passé avec succès notre expertise complète
                    </p>
                    <a
                        href="/vehicules"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                    >
                        Voir les véhicules disponibles
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Expertises;
