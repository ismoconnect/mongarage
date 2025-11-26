import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, Car } from 'lucide-react';

const PointsVente = () => {
    const locations = [
        {
            country: "Allemagne",
            flag: "🇩🇪",
            city: "Berlin",
            type: "Siège Social & Showroom Principal",
            address: "Kurfürstendamm 123, 10719 Berlin",
            phone: "+49 30 1234 5678",
            email: "berlin@auto17.com",
            hours: {
                weekdays: "Lun-Ven: 9h00 - 18h00",
                saturday: "Sam: 10h00 - 16h00",
                sunday: "Dim: Fermé"
            },
            image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=800&q=80",
            features: [
                "Showroom de 2000m²",
                "Plus de 150 véhicules en stock",
                "Atelier de préparation",
                "Service après-vente complet"
            ]
        },
        {
            country: "France",
            flag: "🇫🇷",
            city: "Paris",
            type: "Point de Livraison",
            address: "Avenue des Champs-Élysées 75, 75008 Paris",
            phone: "+33 1 23 45 67 89",
            email: "paris@auto17.com",
            hours: {
                weekdays: "Lun-Ven: 9h00 - 18h00",
                saturday: "Sam: 10h00 - 15h00",
                sunday: "Dim: Fermé"
            },
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
            features: [
                "Point de livraison sécurisé",
                "Inspection avant livraison",
                "Conseiller francophone",
                "Parking client"
            ]
        },
        {
            country: "Belgique",
            flag: "🇧🇪",
            city: "Bruxelles",
            type: "Point de Livraison",
            address: "Avenue Louise 250, 1050 Bruxelles",
            phone: "+32 2 123 45 67",
            email: "bruxelles@auto17.com",
            hours: {
                weekdays: "Lun-Ven: 9h00 - 17h30",
                saturday: "Sam: 10h00 - 14h00",
                sunday: "Dim: Fermé"
            },
            image: "https://images.unsplash.com/photo-1559564484-e48bf5f6b8e3?auto=format&fit=crop&w=800&q=80",
            features: [
                "Centre de livraison moderne",
                "Essais routiers possibles",
                "Support multilingue",
                "Café client"
            ]
        },
        {
            country: "Suisse",
            flag: "🇨🇭",
            city: "Genève",
            type: "Point de Livraison",
            address: "Rue du Rhône 45, 1204 Genève",
            phone: "+41 22 123 45 67",
            email: "geneve@auto17.com",
            hours: {
                weekdays: "Lun-Ven: 9h00 - 18h00",
                saturday: "Sam: 10h00 - 15h00",
                sunday: "Dim: Fermé"
            },
            image: "https://images.unsplash.com/photo-1532778249127-e4e1e6e9c0e1?auto=format&fit=crop&w=800&q=80",
            features: [
                "Emplacement premium",
                "Service VIP disponible",
                "Dédouanement sur place",
                "Immatriculation assistée"
            ]
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <MapPin className="h-16 w-16 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Nos Points de Vente
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Présents dans toute l'Europe pour mieux vous servir
                        </p>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-primary mb-6">Un Réseau Européen à Votre Service</h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        Notre réseau de points de vente et de livraison s'étend à travers l'Europe pour vous offrir
                        un service de proximité. Que vous souhaitiez récupérer votre véhicule directement ou bénéficier
                        d'une livraison à domicile, nous avons la solution adaptée à vos besoins.
                    </p>
                </div>
            </div>

            {/* Locations */}
            <div className="py-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="space-y-12">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex flex-col md:flex`}
                            >
                                {/* Image */}
                                <div className="md:w-1/2">
                                    <img
                                        src={location.image}
                                        alt={location.city}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="md:w-1/2 p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-4xl">{location.flag}</span>
                                        <div>
                                            <h3 className="text-3xl font-bold text-primary">{location.city}</h3>
                                            <p className="text-accent font-medium">{location.type}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                                            <span className="text-gray-700">{location.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-accent" />
                                            <a href={`tel:${location.phone}`} className="text-gray-700 hover:text-primary">
                                                {location.phone}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-accent" />
                                            <a href={`mailto:${location.email}`} className="text-gray-700 hover:text-primary">
                                                {location.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-xl mb-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Clock className="h-5 w-5 text-primary" />
                                            <span className="font-bold text-primary">Horaires d'ouverture</span>
                                        </div>
                                        <div className="space-y-1 text-sm text-gray-700">
                                            <p>{location.hours.weekdays}</p>
                                            <p>{location.hours.saturday}</p>
                                            <p>{location.hours.sunday}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {location.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <Car className="h-4 w-4 text-green-600" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex gap-3">
                                        <a
                                            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                                        >
                                            <Navigation className="h-5 w-5" />
                                            Itinéraire
                                        </a>
                                        <a
                                            href={`mailto:${location.email}`}
                                            className="flex-1 bg-accent hover:bg-accent/90 text-white px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
                                        >
                                            <Mail className="h-5 w-5" />
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            Services Disponibles
                        </h2>
                        <p className="text-xl text-gray-600">
                            Dans tous nos points de vente
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Car,
                                title: "Inspection Gratuite",
                                description: "Inspection complète du véhicule avant livraison"
                            },
                            {
                                icon: Phone,
                                title: "Conseiller Dédié",
                                description: "Un expert à votre écoute pour répondre à vos questions"
                            },
                            {
                                icon: Navigation,
                                title: "Essai Routier",
                                description: "Testez votre véhicule avant la finalisation"
                            }
                        ].map((service, index) => (
                            <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Planifiez Votre Visite
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Prenez rendez-vous dans le point de vente le plus proche de chez vous
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
                    >
                        Prendre rendez-vous
                    </a>
                </div>
            </div>
        </div >
    );
};

export default PointsVente;
