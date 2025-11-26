import React from 'react';
import { Shield, Heart, Award, Users, Leaf, TrendingUp, CheckCircle, Star } from 'lucide-react';

const Engagements = () => {
    const engagements = [
        {
            icon: Shield,
            title: "Transparence Totale",
            description: "Nous croyons en une communication honnête et transparente. Chaque véhicule est accompagné d'un rapport complet détaillant son historique, son état et toutes les informations pertinentes.",
            color: "blue",
            points: [
                "Historique complet du véhicule",
                "Photos détaillées sous tous les angles",
                "Rapport d'inspection technique",
                "Prix clairs sans frais cachés"
            ]
        },
        {
            icon: Award,
            title: "Qualité Garantie",
            description: "Nous sélectionnons uniquement des véhicules de qualité supérieure. Chaque voiture passe par un contrôle qualité rigoureux avant d'être proposée à la vente.",
            color: "green",
            points: [
                "Contrôle technique approfondi",
                "Vérification de l'historique",
                "Inspection mécanique complète",
                "Garantie incluse sur tous les véhicules"
            ]
        },
        {
            icon: Heart,
            title: "Service Client Exceptionnel",
            description: "Votre satisfaction est notre priorité. Notre équipe dédiée vous accompagne à chaque étape, de la sélection à la livraison et au-delà.",
            color: "red",
            points: [
                "Conseiller personnel dédié",
                "Disponibilité 7j/7",
                "Support multilingue",
                "Suivi personnalisé de votre commande"
            ]
        },
        {
            icon: Leaf,
            title: "Engagement Écologique",
            description: "Nous nous engageons à réduire notre empreinte carbone en optimisant nos transports et en proposant une large sélection de véhicules électriques et hybrides.",
            color: "green",
            points: [
                "Transport optimisé et groupé",
                "Large choix de véhicules électriques",
                "Partenariat avec des transporteurs éco-responsables",
                "Compensation carbone disponible"
            ]
        },
        {
            icon: Users,
            title: "Relation de Confiance",
            description: "Nous construisons des relations durables avec nos clients basées sur la confiance, l'intégrité et le respect mutuel.",
            color: "purple",
            points: [
                "Plus de 10,000 clients satisfaits",
                "Taux de satisfaction de 98%",
                "Programme de parrainage",
                "Suivi après-vente personnalisé"
            ]
        },
        {
            icon: TrendingUp,
            title: "Innovation Continue",
            description: "Nous investissons constamment dans les nouvelles technologies pour améliorer votre expérience d'achat et vous offrir les meilleurs services.",
            color: "orange",
            points: [
                "Plateforme en ligne moderne",
                "Visites virtuelles 360°",
                "Processus d'achat digitalisé",
                "Outils de financement en ligne"
            ]
        }
    ];

    const values = [
        { icon: CheckCircle, text: "Honnêteté dans toutes nos transactions" },
        { icon: CheckCircle, text: "Excellence dans le service client" },
        { icon: CheckCircle, text: "Respect de nos engagements" },
        { icon: CheckCircle, text: "Amélioration continue de nos services" }
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
                            Nos Engagements
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Des valeurs fortes qui guident chacune de nos actions au quotidien
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Notre Promesse</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Chez AUTO17, nous ne vendons pas simplement des véhicules. Nous construisons des relations
                        de confiance basées sur des valeurs solides et des engagements concrets. Chaque décision que
                        nous prenons est guidée par notre volonté de vous offrir la meilleure expérience possible.
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
                            Nos Valeurs Fondamentales
                        </h2>
                        <p className="text-xl text-gray-600">
                            Les principes qui nous définissent
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
                            Ils Nous Font Confiance
                        </h2>
                        <p className="text-xl text-gray-600">
                            Découvrez les témoignages de nos clients satisfaits
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sophie Martin",
                                location: "Paris, France",
                                text: "Service exceptionnel ! L'équipe m'a accompagnée du début à la fin. Mon Audi est arrivée en parfait état.",
                                rating: 5
                            },
                            {
                                name: "Marc Dubois",
                                location: "Bruxelles, Belgique",
                                text: "Transparence totale sur l'état du véhicule. Aucune surprise, que du bonheur !",
                                rating: 5
                            },
                            {
                                name: "Laura Rossi",
                                location: "Milan, Italie",
                                text: "Processus simple et rapide. Je recommande vivement AUTO17 à tous mes amis.",
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
                        Rejoignez Notre Communauté
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Faites l'expérience d'un service automobile différent, basé sur la confiance et l'excellence
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/vehicules"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            Découvrir nos véhicules
                        </a>
                        <a
                            href="/contact"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                        >
                            Nous contacter
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engagements;
