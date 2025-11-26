import React from 'react';
import { MapPin, Building, Award, Shield, CheckCircle, TrendingUp, FileText, Users } from 'lucide-react';

const Provenance = () => {
    const sources = [
        {
            icon: Building,
            title: "Flottes d'Entreprises",
            percentage: "40%",
            description: "Véhicules provenant de grandes entreprises avec entretien régulier et historique complet.",
            color: "blue",
            advantages: [
                "Entretien suivi en concession",
                "Historique complet documenté",
                "Kilométrage certifié",
                "Véhicules récents (2-4 ans)"
            ]
        },
        {
            icon: Award,
            title: "Fin de Leasing",
            percentage: "35%",
            description: "Véhicules en fin de contrat de leasing professionnel, souvent en excellent état.",
            color: "green",
            advantages: [
                "État impeccable",
                "Peu de kilomètres",
                "Entretien garanti",
                "Options premium"
            ]
        },
        {
            icon: Users,
            title: "Reprises Concessionnaires",
            percentage: "25%",
            description: "Véhicules repris par les concessionnaires officiels lors de l'achat d'un véhicule neuf.",
            color: "purple",
            advantages: [
                "Contrôle technique OK",
                "Historique vérifié",
                "Bon état général",
                "Prix compétitifs"
            ]
        }
    ];

    const countries = [
        {
            name: "Allemagne",
            flag: "🇩🇪",
            percentage: "85%",
            description: "Notre marché principal avec les meilleurs véhicules premium",
            reasons: [
                "Qualité de fabrication supérieure",
                "Entretien rigoureux obligatoire",
                "Contrôles techniques stricts",
                "Marché automobile le plus développé d'Europe"
            ]
        },
        {
            name: "Autriche",
            flag: "🇦🇹",
            percentage: "10%",
            description: "Véhicules premium en excellent état",
            reasons: [
                "Standards de qualité élevés",
                "Véhicules bien entretenus",
                "Marché stable et fiable"
            ]
        },
        {
            name: "Pays-Bas",
            flag: "🇳🇱",
            percentage: "5%",
            description: "Opportunités spécifiques sur véhicules électriques",
            reasons: [
                "Leader européen de l'électrique",
                "Infrastructures de charge développées",
                "Véhicules récents"
            ]
        }
    ];

    const quality = [
        {
            icon: Shield,
            title: "Contrôle Qualité Rigoureux",
            description: "Chaque véhicule passe par un contrôle en 150 points avant d'être proposé à la vente."
        },
        {
            icon: FileText,
            title: "Historique Complet",
            description: "Nous vérifions l'historique complet : accidents, entretien, propriétaires précédents."
        },
        {
            icon: CheckCircle,
            title: "Certification Officielle",
            description: "Tous nos véhicules sont certifiés conformes aux normes européennes."
        },
        {
            icon: TrendingUp,
            title: "Transparence Totale",
            description: "Rapport d'inspection détaillé et photos HD disponibles pour chaque véhicule."
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
            green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
            purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <MapPin className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Provenance des Véhicules
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Des véhicules premium sélectionnés avec soin en Allemagne et en Europe
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Pourquoi l'Allemagne ?</h2>
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        L'Allemagne est le berceau de l'automobile premium et possède le marché de véhicules d'occasion
                        le plus développé et le plus fiable d'Europe. Les standards de qualité y sont exceptionnels et
                        l'entretien des véhicules est obligatoire et rigoureusement contrôlé.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">1er</div>
                            <p className="text-gray-700">Marché automobile d'Europe</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">85%</div>
                            <p className="text-gray-700">De nos véhicules viennent d'Allemagne</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <div className="text-4xl font-bold text-primary mb-2">100%</div>
                            <p className="text-gray-700">Contrôlés et certifiés</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sources */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            D'où Proviennent Nos Véhicules ?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Trois sources principales pour une qualité optimale
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {sources.map((source, index) => {
                            const colors = getColorClasses(source.color);
                            return (
                                <div key={index} className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8`}>
                                    <div className="flex items-center justify-between mb-6">
                                        <source.icon className={`h-12 w-12 ${colors.text}`} />
                                        <div className={`text-4xl font-bold ${colors.text}`}>{source.percentage}</div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{source.title}</h3>
                                    <p className="text-gray-700 mb-6">{source.description}</p>
                                    <ul className="space-y-3">
                                        {source.advantages.map((advantage, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <CheckCircle className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                                <span className="text-gray-700 text-sm">{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Countries */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Nos Pays Sources
                        </h2>
                        <p className="text-xl text-gray-600">
                            Une sélection rigoureuse à travers l'Europe
                        </p>
                    </div>
                    <div className="space-y-8">
                        {countries.map((country, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3 text-center">
                                    <div className="text-8xl mb-4">{country.flag}</div>
                                    <h3 className="text-3xl font-bold text-primary mb-2">{country.name}</h3>
                                    <div className="text-5xl font-bold text-accent">{country.percentage}</div>
                                </div>
                                <div className="md:w-2/3">
                                    <p className="text-xl text-gray-700 mb-6">{country.description}</p>
                                    <ul className="space-y-3">
                                        {country.reasons.map((reason, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 text-lg">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quality Control */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Notre Garantie Qualité
                        </h2>
                        <p className="text-xl text-gray-600">
                            Un processus de sélection rigoureux
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {quality.map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
                        Notre Processus de Sélection
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                step: "1",
                                title: "Sourcing",
                                description: "Nous surveillons quotidiennement les meilleures sources en Allemagne et en Europe."
                            },
                            {
                                step: "2",
                                title: "Vérification",
                                description: "Contrôle de l'historique complet, des documents et de la provenance."
                            },
                            {
                                step: "3",
                                title: "Inspection",
                                description: "Inspection technique en 150 points par nos experts certifiés."
                            },
                            {
                                step: "4",
                                title: "Certification",
                                description: "Validation finale et certification avant mise en vente."
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-6 items-start bg-gray-50 p-6 rounded-xl">
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-700">{item.description}</p>
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
                        Découvrez Notre Sélection
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Des véhicules premium soigneusement sélectionnés pour vous
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

export default Provenance;
