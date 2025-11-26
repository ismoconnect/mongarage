import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Heart, Share2, MapPin, Calendar, Gauge, Fuel, Settings,
    CheckCircle, Shield, FileText, Phone, Mail, MessageCircle, ChevronLeft,
    ChevronRight, X, Zap, Car, Wrench, Award, Truck, Battery,
    ClipboardCheck, Star, TrendingUp
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VehicleDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showImageModal, setShowImageModal] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('france');

    // Coûts de livraison par pays
    const deliveryCosts = {
        france: { cost: 590, days: '5-7' },
        belgium: { cost: 490, days: '4-6' },
        switzerland: { cost: 790, days: '6-8' },
        luxembourg: { cost: 520, days: '4-6' },
        italy: { cost: 690, days: '7-9' },
        spain: { cost: 890, days: '8-10' },
        portugal: { cost: 990, days: '9-11' },
        romania: { cost: 1190, days: '10-12' }
    };

    // Mock data
    const allVehicles = [
        {
            id: 1,
            images: [
                "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1200&q=80"
            ],
            brand: "Audi",
            model: "RS3 Sportback",
            price: 42900,
            year: 2020,
            km: 45000,
            fuel: "Essence",
            transmission: "Automatique",
            power: 400,
            color: "Noir Mythos",
            doors: 5,
            seats: 5,
            co2: 189,
            consumption: "8.3",
            vin: "WAUZZZ8V8KA123456",
            firstRegistration: "03/2020",
            warranty: "12 mois",
            extendedWarrantyAvailable: true,
            extendedWarrantyPrice: 1290,
            technicalInspection: {
                status: "Valide",
                date: "11/2024",
                nextDue: "11/2026"
            },
            batteryDiagnostic: null,
            badges: ["Certifié Premium", "Carnet d'entretien complet", "Non fumeur", "1 seul propriétaire"],
            description: "Magnifique Audi RS3 Sportback en parfait état. Véhicule entretenu en concession avec carnet complet. Configuration sportive avec pack RS Design, sièges sport, système audio Bang & Olufsen. Pneus récents, révision effectuée. Véhicule non fumeur, jamais accidenté.",
            features: [
                "Sièges sport RS", "Bang & Olufsen Sound System", "Toit panoramique",
                "Caméra de recul", "Détecteur d'angle mort", "Régulateur de vitesse adaptatif",
                "Phares LED Matrix", "Jantes 19 pouces", "Système de navigation",
                "Apple CarPlay / Android Auto", "Sièges chauffants", "Volant chauffant",
                "Climatisation automatique tri-zone", "Système de parking automatique", "Affichage tête haute"
            ],
            technicalSpecs: {
                engine: "2.5 TFSI", cylinders: 5, displacement: "2480 cm³",
                maxSpeed: "280 km/h", acceleration: "4.1 s (0-100 km/h)", torque: "480 Nm",
                gearbox: "S tronic 7 vitesses", drive: "Quattro (4x4)"
            }
        },
        {
            id: 2,
            images: [
                "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1617886903355-9354bb57751f?auto=format&fit=crop&w=1200&q=80"
            ],
            brand: "BMW",
            model: "M4 Competition",
            price: 68500,
            year: 2021,
            km: 28000,
            fuel: "Essence",
            transmission: "Automatique",
            power: 510,
            color: "Bleu San Marino",
            doors: 2,
            seats: 4,
            co2: 209,
            consumption: "9.1",
            vin: "WBS8M9C09MCE12345",
            firstRegistration: "06/2021",
            warranty: "24 mois",
            extendedWarrantyAvailable: true,
            extendedWarrantyPrice: 1890,
            technicalInspection: {
                status: "Valide",
                date: "10/2024",
                nextDue: "10/2026"
            },
            batteryDiagnostic: null,
            badges: ["Certifié BMW", "Garantie constructeur", "Configuration unique", "Entretien BMW"],
            description: "BMW M4 Competition dans une configuration exceptionnelle. Pack M Performance, échappement Akrapovic, sièges M Carbon. Véhicule comme neuf, entretien BMW complet. Garantie constructeur transférable.",
            features: [
                "Pack M Performance", "Échappement Akrapovic", "Sièges M Carbon",
                "Harman Kardon", "Toit carbone", "Caméra 360°",
                "Head-Up Display", "Jantes M 20 pouces", "M Drive Professional",
                "Freins M Carbone-Céramique", "Différentiel M actif", "Suspension adaptative M"
            ],
            technicalSpecs: {
                engine: "3.0 Twin-Turbo", cylinders: 6, displacement: "2993 cm³",
                maxSpeed: "290 km/h", acceleration: "3.9 s (0-100 km/h)", torque: "650 Nm",
                gearbox: "M Steptronic 8 vitesses", drive: "Propulsion"
            }
        }
    ];

    const vehicle = allVehicles.find(v => v.id === parseInt(id)) || allVehicles[0];
    const deliveryInfo = deliveryCosts[selectedCountry];

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${vehicle.brand} ${vehicle.model}`,
                    text: t('vehicle_detail.share_title', { brand: vehicle.brand, model: vehicle.model, price: vehicle.price.toLocaleString() }),
                    url: window.location.href
                });
            } catch (err) {
                console.log(t('vehicle_detail.share_cancelled'));
            }
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert(t('vehicle_detail.share_success'));
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container mx-auto px-6 max-w-7xl py-4">
                    <div className="flex items-center justify-between">
                        <button onClick={() => navigate('/vehicules')} className="flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                            <span className="hidden md:inline">{t('vehicle_detail.back_to_list')}</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <button onClick={() => setIsFavorite(!isFavorite)} className={`p-2 rounded-lg transition-colors ${isFavorite ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
                            </button>
                            <button onClick={handleShare} className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl py-8">
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {vehicle.badges.map((badge, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary/90 text-white px-4 py-2 rounded-full shadow-lg">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="font-bold text-sm">{badge}</span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Colonne principale */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Galerie */}
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="relative aspect-video bg-gray-900">
                                <img src={vehicle.images[currentImageIndex]} alt={`${vehicle.brand} ${vehicle.model}`} className="w-full h-full object-cover cursor-pointer" onClick={() => setShowImageModal(true)} />
                                {vehicle.images.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                                            <ChevronLeft className="h-6 w-6 text-gray-900" />
                                        </button>
                                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                                            <ChevronRight className="h-6 w-6 text-gray-900" />
                                        </button>
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                            {vehicle.images.map((_, idx) => (
                                                <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'}`} />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="grid grid-cols-4 gap-2 p-4">
                                {vehicle.images.map((img, idx) => (
                                    <button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${idx === currentImageIndex ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-300'}`}>
                                        <img src={img} alt={`Vue ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Infos principales */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                            <div className="mb-6">
                                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">{vehicle.brand}</p>
                                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{vehicle.model}</h1>
                                <div className="flex flex-wrap items-center gap-3 text-gray-600">
                                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg"><Calendar className="h-4 w-4" />{vehicle.year}</span>
                                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg"><Gauge className="h-4 w-4" />{vehicle.km.toLocaleString()} km</span>
                                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg"><Fuel className="h-4 w-4" />{vehicle.fuel}</span>
                                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-lg"><Settings className="h-4 w-4" />{vehicle.transmission}</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-gray-200">
                                <div className="text-center p-4 bg-gray-50 rounded-xl"><Zap className="h-6 w-6 text-accent mx-auto mb-2" /><p className="text-2xl font-bold text-primary">{vehicle.power}</p><p className="text-sm text-gray-600">{t('vehicle_detail.horses')}</p></div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl"><Car className="h-6 w-6 text-accent mx-auto mb-2" /><p className="text-2xl font-bold text-primary">{vehicle.doors}</p><p className="text-sm text-gray-600">{t('vehicle_detail.doors')}</p></div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl"><MapPin className="h-6 w-6 text-accent mx-auto mb-2" /><p className="text-2xl font-bold text-primary">DE</p><p className="text-sm text-gray-600">{t('vehicle_detail.germany')}</p></div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl"><Shield className="h-6 w-6 text-accent mx-auto mb-2" /><p className="text-2xl font-bold text-primary">{vehicle.warranty}</p><p className="text-sm text-gray-600">{t('vehicle_detail.warranty')}</p></div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-4">{t('vehicle_detail.description')}</h2>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{vehicle.description}</p>
                            </div>
                        </div>

                        {/* Contrôles & Diagnostics */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                <ClipboardCheck className="h-6 w-6 text-accent" />
                                {t('vehicle_detail.controls_diagnostics')}
                            </h2>
                            <div className="space-y-4">
                                <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-green-600 p-2 rounded-lg"><FileText className="h-5 w-5 text-white" /></div>
                                            <div>
                                                <h3 className="font-bold text-green-900">{t('vehicle_detail.technical_control')}</h3>
                                                <p className="text-sm text-green-700">{t('vehicle_detail.status')}: {vehicle.technicalInspection.status}</p>
                                            </div>
                                        </div>
                                        <CheckCircle className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div><p className="text-green-700 font-medium">{t('vehicle_detail.last_control')}</p><p className="text-green-900 font-bold">{vehicle.technicalInspection.date}</p></div>
                                        <div><p className="text-green-700 font-medium">{t('vehicle_detail.next_control')}</p><p className="text-green-900 font-bold">{vehicle.technicalInspection.nextDue}</p></div>
                                    </div>
                                </div>
                                {vehicle.batteryDiagnostic ? (
                                    <div className="p-5 bg-blue-50 border-2 border-blue-200 rounded-xl">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-blue-600 p-2 rounded-lg"><Battery className="h-5 w-5 text-white" /></div>
                                                <div>
                                                    <h3 className="font-bold text-blue-900">{t('vehicle_detail.battery_diagnostic')}</h3>
                                                    <p className="text-sm text-blue-700">{t('vehicle_detail.health_state')}: {vehicle.batteryDiagnostic.health}%</p>
                                                </div>
                                            </div>
                                            <TrendingUp className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div><p className="text-blue-700 font-medium">{t('vehicle_detail.remaining_capacity')}</p><p className="text-blue-900 font-bold">{vehicle.batteryDiagnostic.capacity} kWh</p></div>
                                            <div><p className="text-blue-700 font-medium">{t('vehicle_detail.charge_cycles')}</p><p className="text-blue-900 font-bold">{vehicle.batteryDiagnostic.cycles}</p></div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-5 bg-gray-50 border-2 border-gray-200 rounded-xl">
                                        <div className="flex items-center gap-3">
                                            <Fuel className="h-5 w-5 text-gray-600" />
                                            <p className="text-gray-700 font-medium">{t('vehicle_detail.thermal_vehicle')}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="p-5 bg-purple-50 border-2 border-purple-200 rounded-xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="bg-purple-600 p-2 rounded-lg"><Award className="h-5 w-5 text-white" /></div>
                                        <h3 className="font-bold text-purple-900">{t('vehicle_detail.complete_maintenance_book')}</h3>
                                    </div>
                                    <p className="text-sm text-purple-700">{t('vehicle_detail.maintenance_history')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Équipements */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Award className="h-6 w-6 text-accent" />{t('vehicle_detail.equipments')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {vehicle.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Caractéristiques techniques */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2"><Wrench className="h-6 w-6 text-accent" />{t('vehicle_detail.technical_specs')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(vehicle.technicalSpecs).map(([key, value]) => (
                                    <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                        <span className="text-gray-600 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                        <span className="text-primary font-bold">{value}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><span className="text-gray-600 font-medium">{t('vehicle_detail.color')}:</span><span className="text-primary font-bold">{vehicle.color}</span></div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><span className="text-gray-600 font-medium">CO2:</span><span className="text-primary font-bold">{vehicle.co2} g/km</span></div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><span className="text-gray-600 font-medium">{t('vehicle_detail.consumption')}:</span><span className="text-primary font-bold">{vehicle.consumption} L/100km</span></div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"><span className="text-gray-600 font-medium">VIN:</span><span className="text-primary font-bold text-sm">{vehicle.vin}</span></div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border-2 border-primary/10 space-y-6">
                            <div className="text-center pb-6 border-b border-gray-200">
                                <p className="text-sm text-gray-500 font-medium mb-2">{t('vehicle_detail.price')}</p>
                                <p className="text-4xl md:text-5xl font-bold text-accent mb-2">{vehicle.price.toLocaleString()} €</p>
                                <p className="text-sm text-gray-600">{t('vehicle_detail.vat_recoverable')}</p>
                            </div>

                            {/* Estimation Livraison */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-200">
                                <div className="flex items-center gap-2 mb-4">
                                    <Truck className="h-5 w-5 text-blue-600" />
                                    <h3 className="font-bold text-blue-900">{t('vehicle_detail.delivery_estimation')}</h3>
                                </div>
                                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full p-3 border-2 border-blue-300 rounded-lg mb-3 font-medium bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option value="france">🇫🇷 {t('countries.france')}</option>
                                    <option value="belgium">🇧🇪 {t('countries.belgium')}</option>
                                    <option value="switzerland">🇨🇭 {t('countries.switzerland')}</option>
                                    <option value="luxembourg">🇱🇺 {t('countries.luxembourg')}</option>
                                    <option value="italy">🇮🇹 {t('countries.italy')}</option>
                                    <option value="spain">🇪🇸 {t('countries.spain')}</option>
                                    <option value="portugal">🇵🇹 {t('countries.portugal')}</option>
                                    <option value="romania">🇷🇴 {t('countries.romania')}</option>
                                </select>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white p-3 rounded-lg border border-blue-200"><p className="text-xs text-blue-700 font-medium mb-1">{t('vehicle_detail.cost')}</p><p className="text-xl font-bold text-blue-900">{deliveryInfo.cost}€</p></div>
                                    <div className="bg-white p-3 rounded-lg border border-blue-200"><p className="text-xs text-blue-700 font-medium mb-1">{t('vehicle_detail.delay')}</p><p className="text-xl font-bold text-blue-900">{deliveryInfo.days}j</p></div>
                                </div>
                                <div className="mt-3 p-3 bg-white/50 rounded-lg">
                                    <p className="text-sm font-bold text-blue-900 mb-1">{t('vehicle_detail.total_estimated')}: {(vehicle.price + deliveryInfo.cost).toLocaleString()}€</p>
                                    <p className="text-xs text-blue-700">{t('vehicle_detail.vehicle_price_delivery')}</p>
                                </div>
                            </div>

                            {/* Garantie Étendue */}
                            {vehicle.extendedWarrantyAvailable && (
                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border-2 border-green-200">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Shield className="h-5 w-5 text-green-600" />
                                        <h3 className="font-bold text-green-900">{t('vehicle_detail.extended_warranty')}</h3>
                                    </div>
                                    <p className="text-sm text-green-700 mb-3">{t('vehicle_detail.extended_warranty_desc')}</p>
                                    <div className="bg-white p-3 rounded-lg border border-green-200">
                                        <p className="text-xs text-green-700 font-medium mb-1">{t('vehicle_detail.price')}</p>
                                        <p className="text-2xl font-bold text-green-900">+{vehicle.extendedWarrantyPrice}€</p>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-xs text-green-800">
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-600" />{t('vehicle_detail.full_coverage')}</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-600" />{t('vehicle_detail.assistance_24_7')}</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="h-3 w-3 text-green-600" />{t('vehicle_detail.replacement_vehicle')}</li>
                                    </ul>
                                </div>
                            )}

                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-600 text-sm font-medium">{t('vehicle_detail.first_registration')}</span><span className="text-primary font-bold">{vehicle.firstRegistration}</span></div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-600 text-sm font-medium">{t('vehicle_detail.mileage')}</span><span className="text-primary font-bold">{vehicle.km.toLocaleString()} km</span></div>
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"><span className="text-gray-600 text-sm font-medium">{t('vehicle_detail.warranty_included')}</span><span className="text-primary font-bold">{vehicle.warranty}</span></div>
                            </div>

                            <div className="space-y-3">
                                <Link to={`/contact?vehicle=${vehicle.id}`} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                    <Mail className="h-5 w-5" />{t('vehicle_detail.ask_info')}
                                </Link>
                                <a href="tel:+33123456789" className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5" />{t('vehicle_detail.call_now')}
                                </a>
                                <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                                    <MessageCircle className="h-5 w-5" />{t('vehicle_detail.whatsapp')}
                                </a>
                            </div>

                            <div className="pt-6 border-t border-gray-200 space-y-3">
                                <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><div><p className="font-bold text-primary text-sm">{t('vehicle_detail.certified_vehicle')}</p><p className="text-xs text-gray-600">{t('vehicle_detail.quality_control')}</p></div></div>
                                <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><div><p className="font-bold text-primary text-sm">{t('vehicle_detail.europe_delivery')}</p><p className="text-xs text-gray-600">{t('vehicle_detail.europe_wide')}</p></div></div>
                                <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><div><p className="font-bold text-primary text-sm">{t('vehicle_detail.warranty_included')}</p><p className="text-xs text-gray-600">{t('vehicle_detail.warranty_duration', { duration: vehicle.warranty })}</p></div></div>
                                <div className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" /><div><p className="font-bold text-primary text-sm">{t('vehicle_detail.financing_available')}</p><p className="text-xs text-gray-600">{t('vehicle_detail.custom_solutions')}</p></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal image */}
            {showImageModal && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                    <button onClick={() => setShowImageModal(false)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                        <X className="h-6 w-6 text-white" />
                    </button>
                    <button onClick={prevImage} className="absolute left-4 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                        <ChevronLeft className="h-8 w-8 text-white" />
                    </button>
                    <img src={vehicle.images[currentImageIndex]} alt={`${vehicle.brand} ${vehicle.model}`} className="max-h-full max-w-full object-contain" />
                    <button onClick={nextImage} className="absolute right-4 bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors">
                        <ChevronRight className="h-8 w-8 text-white" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-medium">{currentImageIndex + 1} / {vehicle.images.length}</div>
                </div>
            )}
        </div>
    );
};

export default VehicleDetail;
