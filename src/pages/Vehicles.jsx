import React, { useState, useMemo } from 'react';
import { Filter, Search, Map, Clock, CheckCircle, ArrowRight, X, SlidersHorizontal, Fuel, Gauge, Calendar, Euro } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Vehicles = () => {
    const { t } = useTranslation();
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [sortBy, setSortBy] = useState('newest');
    const [filters, setFilters] = useState({
        brand: '',
        model: '',
        minPrice: '',
        maxPrice: '',
        minYear: '',
        maxYear: '',
        fuel: '',
        transmission: '',
        minKm: '',
        maxKm: '',
        searchQuery: ''
    });

    // Mock data for vehicles - Plus de véhicules pour une meilleure démo
    const allVehicles = [
        {
            id: 1,
            img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
            brand: "Audi", model: "RS3 Sportback", price: 42900, year: 2020, km: 45000, fuel: "Essence", transmission: "Automatique", power: 400, color: "Noir"
        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&w=800&q=80",
            brand: "BMW", model: "M4 Competition", price: 68500, year: 2021, km: 28000, fuel: "Essence", transmission: "Automatique", power: 510, color: "Bleu"
        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
            brand: "Mercedes-Benz", model: "C63 AMG", price: 55000, year: 2019, km: 52000, fuel: "Essence", transmission: "Automatique", power: 476, color: "Gris"
        },
        {
            id: 4,
            img: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=800&q=80",
            brand: "Volkswagen", model: "Golf 8 R", price: 38900, year: 2021, km: 35000, fuel: "Essence", transmission: "Automatique", power: 320, color: "Blanc"
        },
        {
            id: 5,
            img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
            brand: "BMW", model: "X5 M50d", price: 72000, year: 2020, km: 65000, fuel: "Diesel", transmission: "Automatique", power: 400, color: "Noir"
        },
        {
            id: 6,
            img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
            brand: "Porsche", model: "Macan S", price: 62500, year: 2019, km: 58000, fuel: "Essence", transmission: "Automatique", power: 354, color: "Rouge"
        },
        {
            id: 7,
            img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
            brand: "Audi", model: "A4 Avant", price: 35900, year: 2020, km: 42000, fuel: "Diesel", transmission: "Automatique", power: 190, color: "Gris"
        },
        {
            id: 8,
            img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
            brand: "BMW", model: "Serie 3 320d", price: 32500, year: 2019, km: 68000, fuel: "Diesel", transmission: "Automatique", power: 190, color: "Blanc"
        },
        {
            id: 9,
            img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
            brand: "Mercedes-Benz", model: "GLE 350d", price: 58900, year: 2020, km: 55000, fuel: "Diesel", transmission: "Automatique", power: 272, color: "Noir"
        },
        {
            id: 10,
            img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
            brand: "Audi", model: "Q5 45 TFSI", price: 45900, year: 2021, km: 32000, fuel: "Essence", transmission: "Automatique", power: 245, color: "Gris"
        },
        {
            id: 11,
            img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80",
            brand: "Porsche", model: "Cayenne S", price: 78500, year: 2020, km: 48000, fuel: "Essence", transmission: "Automatique", power: 440, color: "Blanc"
        },
        {
            id: 12,
            img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
            brand: "Volkswagen", model: "Tiguan R-Line", price: 36900, year: 2021, km: 28000, fuel: "Diesel", transmission: "Automatique", power: 200, color: "Bleu"
        }
    ];

    // Filtrer et trier les véhicules
    const filteredAndSortedVehicles = useMemo(() => {
        let result = [...allVehicles];

        // Appliquer les filtres
        if (filters.brand) {
            result = result.filter(v => v.brand === filters.brand);
        }
        if (filters.fuel) {
            result = result.filter(v => v.fuel === filters.fuel);
        }
        if (filters.transmission) {
            result = result.filter(v => v.transmission === filters.transmission);
        }
        if (filters.minPrice) {
            result = result.filter(v => v.price >= parseInt(filters.minPrice));
        }
        if (filters.maxPrice) {
            result = result.filter(v => v.price <= parseInt(filters.maxPrice));
        }
        if (filters.minYear) {
            result = result.filter(v => v.year >= parseInt(filters.minYear));
        }
        if (filters.maxYear) {
            result = result.filter(v => v.year <= parseInt(filters.maxYear));
        }
        if (filters.minKm) {
            result = result.filter(v => v.km >= parseInt(filters.minKm));
        }
        if (filters.maxKm) {
            result = result.filter(v => v.km <= parseInt(filters.maxKm));
        }
        if (filters.searchQuery) {
            const query = filters.searchQuery.toLowerCase();
            result = result.filter(v =>
                v.brand.toLowerCase().includes(query) ||
                v.model.toLowerCase().includes(query)
            );
        }

        // Appliquer le tri
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'year-desc':
                result.sort((a, b) => b.year - a.year);
                break;
            case 'km-asc':
                result.sort((a, b) => a.km - b.km);
                break;
            default: // newest
                result.sort((a, b) => b.year - a.year);
        }

        return result;
    }, [filters, sortBy, allVehicles]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => {
        setFilters({
            brand: '',
            model: '',
            minPrice: '',
            maxPrice: '',
            minYear: '',
            maxYear: '',
            fuel: '',
            transmission: '',
            minKm: '',
            maxKm: '',
            searchQuery: ''
        });
    };

    const activeFiltersCount = Object.values(filters).filter(v => v !== '').length;

    // Helper functions for translations
    const getFuelTranslation = (fuel) => {
        const fuelMap = {
            'Essence': t('vehicles.fuel_types.petrol'),
            'Diesel': t('vehicles.fuel_types.diesel'),
            'Hybride': t('vehicles.fuel_types.hybrid'),
            'Électrique': t('vehicles.fuel_types.electric')
        };
        return fuelMap[fuel] || fuel;
    };

    const getTransmissionTranslation = (transmission) => {
        const transmissionMap = {
            'Manuelle': t('vehicles.transmission_types.manual'),
            'Automatique': t('vehicles.transmission_types.automatic')
        };
        return transmissionMap[transmission] || transmission;
    };

    const getColorTranslation = (color) => {
        const colorMap = {
            'Noir': t('vehicles.colors.black'),
            'Blanc': t('vehicles.colors.white'),
            'Gris': t('vehicles.colors.gray'),
            'Bleu': t('vehicles.colors.blue'),
            'Rouge': t('vehicles.colors.red')
        };
        return colorMap[color] || color;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-16 md:py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                            {t('vehicles.hero_title')}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            {t('vehicles.hero_subtitle')}
                        </p>

                        {/* Barre de recherche rapide */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder={t('vehicles.search_placeholder')}
                                    value={filters.searchQuery}
                                    onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 font-medium focus:ring-2 focus:ring-accent outline-none shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 max-w-7xl py-8 md:py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <SlidersHorizontal className="h-5 w-5 text-primary" />
                                    <h2 className="text-xl font-bold text-primary">{t('vehicles.filters')}</h2>
                                </div>
                                {activeFiltersCount > 0 && (
                                    <button
                                        onClick={resetFilters}
                                        className="text-sm text-accent hover:text-accent/80 font-medium"
                                    >
                                        {t('vehicles.reset')}
                                    </button>
                                )}
                            </div>

                            <div className="space-y-6">
                                {/* Marque */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        {t('vehicles.brand')}
                                    </label>
                                    <select
                                        value={filters.brand}
                                        onChange={(e) => handleFilterChange('brand', e.target.value)}
                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                    >
                                        <option value="">{t('vehicles.all_brands')}</option>
                                        <option value="Audi">Audi</option>
                                        <option value="BMW">BMW</option>
                                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                                        <option value="Volkswagen">Volkswagen</option>
                                        <option value="Porsche">Porsche</option>
                                    </select>
                                </div>

                                {/* Prix */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        <Euro className="inline h-4 w-4 mr-1" />
                                        {t('vehicles.price')} (€)
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.min')}
                                            value={filters.minPrice}
                                            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.max')}
                                            value={filters.maxPrice}
                                            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                    </div>
                                </div>

                                {/* Année */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        <Calendar className="inline h-4 w-4 mr-1" />
                                        {t('vehicles.year')}
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.from')}
                                            value={filters.minYear}
                                            onChange={(e) => handleFilterChange('minYear', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.to')}
                                            value={filters.maxYear}
                                            onChange={(e) => handleFilterChange('maxYear', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                    </div>
                                </div>

                                {/* Kilométrage */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        <Gauge className="inline h-4 w-4 mr-1" />
                                        {t('vehicles.mileage')}
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.min')}
                                            value={filters.minKm}
                                            onChange={(e) => handleFilterChange('minKm', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                        <input
                                            type="number"
                                            placeholder={t('vehicles.max')}
                                            value={filters.maxKm}
                                            onChange={(e) => handleFilterChange('maxKm', e.target.value)}
                                            className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                        />
                                    </div>
                                </div>

                                {/* Carburant */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        <Fuel className="inline h-4 w-4 mr-1" />
                                        {t('vehicles.fuel')}
                                    </label>
                                    <select
                                        value={filters.fuel}
                                        onChange={(e) => handleFilterChange('fuel', e.target.value)}
                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                    >
                                        <option value="">{t('vehicles.all')}</option>
                                        <option value="Essence">{t('vehicles.fuel_types.petrol')}</option>
                                        <option value="Diesel">{t('vehicles.fuel_types.diesel')}</option>
                                        <option value="Hybride">{t('vehicles.fuel_types.hybrid')}</option>
                                        <option value="Électrique">{t('vehicles.fuel_types.electric')}</option>
                                    </select>
                                </div>

                                {/* Transmission */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                        {t('vehicles.transmission')}
                                    </label>
                                    <select
                                        value={filters.transmission}
                                        onChange={(e) => handleFilterChange('transmission', e.target.value)}
                                        className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                    >
                                        <option value="">{t('vehicles.all_feminine')}</option>
                                        <option value="Manuelle">{t('vehicles.transmission_types.manual')}</option>
                                        <option value="Automatique">{t('vehicles.transmission_types.automatic')}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 mb-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl md:text-2xl font-bold text-primary">
                                        {t('vehicles.vehicle_count', { count: filteredAndSortedVehicles.length })}
                                    </h2>
                                    {activeFiltersCount > 0 && (
                                        <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
                                            {activeFiltersCount} {t('vehicles.filter_count', { count: activeFiltersCount })}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-3">
                                    {/* Mobile Filter Button */}
                                    <button
                                        onClick={() => setShowMobileFilters(true)}
                                        className="lg:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                                    >
                                        <SlidersHorizontal className="h-5 w-5" />
                                        {t('vehicles.filters')}
                                        {activeFiltersCount > 0 && (
                                            <span className="bg-accent px-2 py-0.5 rounded-full text-xs">
                                                {activeFiltersCount}
                                            </span>
                                        )}
                                    </button>

                                    {/* Sort */}
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="p-2 md:p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50 font-medium text-sm md:text-base"
                                    >
                                        <option value="newest">{t('vehicles.sort_newest')}</option>
                                        <option value="price-asc">{t('vehicles.sort_price_asc')}</option>
                                        <option value="price-desc">{t('vehicles.sort_price_desc')}</option>
                                        <option value="year-desc">{t('vehicles.sort_year_desc')}</option>
                                        <option value="km-asc">{t('vehicles.sort_km_asc')}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Vehicles Grid */}
                        {filteredAndSortedVehicles.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredAndSortedVehicles.map((car) => (
                                    <div
                                        key={car.id}
                                        className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                                    >
                                        <div className="relative h-56 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <img
                                                src={car.img}
                                                alt={`${car.brand} ${car.model}`}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold text-primary shadow-lg z-20">
                                                {car.year}
                                            </div>
                                            <div className="absolute top-4 left-4 bg-accent/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-bold text-white shadow-lg z-20">
                                                {getFuelTranslation(car.fuel)}
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="mb-4">
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                                                    {car.brand}
                                                </p>
                                                <h3 className="text-xl font-bold text-primary mb-2">
                                                    {car.model}
                                                </h3>
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Gauge className="h-4 w-4 text-accent" />
                                                        {car.power} {t('vehicles.power_unit')}
                                                    </span>
                                                    <span>•</span>
                                                    <span>{getColorTranslation(car.color)}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                                <span className="text-3xl font-bold text-accent">
                                                    {car.price.toLocaleString()} €
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-5">
                                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                                    <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                                                    <span className="font-medium">{car.km.toLocaleString()} km</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                                                    <Map className="h-4 w-4 text-accent flex-shrink-0" />
                                                    <span className="font-medium">{t('countries.germany')}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg col-span-2">
                                                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                                    <span className="font-medium">{getTransmissionTranslation(car.transmission)}</span>
                                                </div>
                                            </div>

                                            <Link
                                                to={`/vehicules/${car.id}`}
                                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                            >
                                                {t('vehicles.view_details')}
                                                <ArrowRight className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
                                <div className="max-w-md mx-auto">
                                    <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {t('vehicles.no_results_title')}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {t('vehicles.no_results_desc')}
                                    </p>
                                    <button
                                        onClick={resetFilters}
                                        className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                                    >
                                        {t('vehicles.reset_filters')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filters Modal */}
            {showMobileFilters && (
                <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
                    <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                            <h2 className="text-xl font-bold text-primary">{t('vehicles.filters')}</h2>
                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Same filters as desktop */}
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    {t('vehicles.brand')}
                                </label>
                                <select
                                    value={filters.brand}
                                    onChange={(e) => handleFilterChange('brand', e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                >
                                    <option value="">{t('vehicles.all_brands')}</option>
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Porsche">Porsche</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <Euro className="inline h-4 w-4 mr-1" />
                                    {t('vehicles.price')} (€)
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.min')}
                                        value={filters.minPrice}
                                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.max')}
                                        value={filters.maxPrice}
                                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <Calendar className="inline h-4 w-4 mr-1" />
                                    {t('vehicles.year')}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.from')}
                                        value={filters.minYear}
                                        onChange={(e) => handleFilterChange('minYear', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.to')}
                                        value={filters.maxYear}
                                        onChange={(e) => handleFilterChange('maxYear', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <Gauge className="inline h-4 w-4 mr-1" />
                                    {t('vehicles.mileage')}
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.min')}
                                        value={filters.minKm}
                                        onChange={(e) => handleFilterChange('minKm', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                    <input
                                        type="number"
                                        placeholder={t('vehicles.max')}
                                        value={filters.maxKm}
                                        onChange={(e) => handleFilterChange('maxKm', e.target.value)}
                                        className="w-1/2 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent outline-none bg-gray-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    <Fuel className="inline h-4 w-4 mr-1" />
                                    {t('vehicles.fuel')}
                                </label>
                                <select
                                    value={filters.fuel}
                                    onChange={(e) => handleFilterChange('fuel', e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                >
                                    <option value="">{t('vehicles.all')}</option>
                                    <option value="Essence">{t('vehicles.fuel_types.petrol')}</option>
                                    <option value="Diesel">{t('vehicles.fuel_types.diesel')}</option>
                                    <option value="Hybride">{t('vehicles.fuel_types.hybrid')}</option>
                                    <option value="Électrique">{t('vehicles.fuel_types.electric')}</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">
                                    {t('vehicles.transmission')}
                                </label>
                                <select
                                    value={filters.transmission}
                                    onChange={(e) => handleFilterChange('transmission', e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-gray-50 font-medium"
                                >
                                    <option value="">{t('vehicles.all_feminine')}</option>
                                    <option value="Manuelle">{t('vehicles.transmission_types.manual')}</option>
                                    <option value="Automatique">{t('vehicles.transmission_types.automatic')}</option>
                                </select>
                            </div>
                        </div>

                        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
                            <button
                                onClick={resetFilters}
                                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                            >
                                {t('vehicles.reset')}
                            </button>
                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="flex-1 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
                            >
                                {t('vehicles.apply')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Vehicles;
