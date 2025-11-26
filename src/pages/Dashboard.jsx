import React, { useState } from 'react';
import { User, Heart, ShoppingCart, FileText, Settings, LogOut, Bell, Car, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { currentUser, userProfile, logout } = useAuth();
    const navigate = useNavigate();

    // Données utilisateur depuis Firebase ou valeurs par défaut
    const user = userProfile || {
        firstName: currentUser?.displayName?.split(' ')[0] || 'Utilisateur',
        lastName: currentUser?.displayName?.split(' ')[1] || '',
        email: currentUser?.email || '',
        phone: '',
        memberSince: new Date().getFullYear().toString()
    };

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const stats = [
        { icon: ShoppingCart, label: t('dashboard.orders'), value: '3', color: 'blue' },
        { icon: Heart, label: t('dashboard.favorites'), value: '12', color: 'red' },
        { icon: FileText, label: t('dashboard.documents'), value: '8', color: 'green' },
        { icon: Bell, label: t('dashboard.notifications'), value: '5', color: 'yellow' }
    ];

    const recentOrders = [
        {
            id: '001',
            vehicle: 'BMW Série 3 320d',
            date: '2024-11-15',
            status: t('dashboard.in_delivery'),
            statusColor: 'blue',
            price: '28,900€'
        },
        {
            id: '002',
            vehicle: 'Audi A4 2.0 TDI',
            date: '2024-10-20',
            status: t('dashboard.delivered'),
            statusColor: 'green',
            price: '32,500€'
        }
    ];

    const favorites = [
        {
            id: 1,
            brand: 'Mercedes-Benz',
            model: 'Classe C 220d',
            year: 2022,
            price: '35,900€',
            image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=400&q=80'
        },
        {
            id: 2,
            brand: 'Volkswagen',
            model: 'Golf 8 GTI',
            year: 2023,
            price: '38,500€',
            image: 'https://images.unsplash.com/photo-1622353219448-46a009f0d44f?auto=format&fit=crop&w=400&q=80'
        }
    ];

    const menuItems = [
        { id: 'overview', icon: User, label: t('dashboard.overview') },
        { id: 'orders', icon: ShoppingCart, label: t('dashboard.my_orders') },
        { id: 'favorites', icon: Heart, label: t('dashboard.my_favorites') },
        { id: 'documents', icon: FileText, label: t('dashboard.my_documents') },
        { id: 'settings', icon: Settings, label: t('dashboard.settings') }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: 'bg-blue-50 text-blue-600',
            red: 'bg-red-50 text-red-600',
            green: 'bg-green-50 text-green-600',
            yellow: 'bg-yellow-50 text-yellow-600'
        };
        return colors[color] || colors.blue;
    };

    const getStatusColor = (color) => {
        const colors = {
            blue: 'bg-blue-100 text-blue-800',
            green: 'bg-green-100 text-green-800',
            yellow: 'bg-yellow-100 text-yellow-800'
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            {/* Fixed Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg">
                <div className="px-4 md:px-6 py-4 md:py-6">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        {/* User Info - Hidden on mobile */}
                        <div className="hidden lg:flex items-center gap-3 md:gap-4">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center">
                                <User className="h-6 w-6 md:h-8 md:w-8" />
                            </div>
                            <div>
                                <h1 className="text-lg md:text-2xl font-bold">{t('dashboard.hello')}, {user.firstName} !</h1>
                                <p className="text-white/80 text-sm">{t('dashboard.member_since')} {user.memberSince}</p>
                            </div>
                        </div>

                        {/* Profile Icon Button */}
                        <button className="p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors ml-auto lg:ml-0">
                            <User className="h-5 w-5 md:h-6 md:w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Layout with Fixed Sidebar and Scrollable Content */}
            <div className="flex flex-1 overflow-hidden relative">
                {/* Mobile Sidebar Backdrop */}
                {isSidebarOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Sidebar - Hidden on mobile, overlay when open */}
                <div className={`
                    fixed lg:static inset-y-0 left-0 z-50
                    w-64 bg-white shadow-lg lg:shadow-sm 
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                    overflow-y-auto flex flex-col
                `}>
                    <div className="p-6 flex-1">
                        {/* Close button for mobile */}
                        <div className="lg:hidden flex justify-end mb-4">
                            <button
                                onClick={() => setIsSidebarOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X className="h-6 w-6 text-gray-600" />
                            </button>
                        </div>

                        <nav className="space-y-2">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        setIsSidebarOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                            ? 'bg-primary text-white'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Logout Button at bottom */}
                    <div className="p-6 border-t border-gray-200">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
                        >
                            <LogOut className="h-5 w-5" />
                            <span className="font-medium">{t('dashboard.logout')}</span>
                        </button>
                    </div>
                </div>

                {/* Scrollable Main Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="p-4 md:p-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6 md:space-y-8">
                                {/* Stats */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${getColorClasses(stat.color)} flex items-center justify-center mb-3 md:mb-4`}>
                                                <stat.icon className="h-5 w-5 md:h-6 md:w-6" />
                                            </div>
                                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                            <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Recent Orders */}
                                <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('dashboard.recent_orders')}</h2>
                                    <div className="space-y-3 md:space-y-4">
                                        {recentOrders.map((order) => (
                                            <div key={order.id} className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl gap-3">
                                                <div className="flex items-center gap-3 md:gap-4">
                                                    <Car className="h-8 w-8 md:h-10 md:w-10 text-primary flex-shrink-0" />
                                                    <div>
                                                        <h3 className="font-bold text-sm md:text-base text-gray-800">{order.vehicle}</h3>
                                                        <p className="text-xs md:text-sm text-gray-600">{t('dashboard.order')} #{order.id} • {order.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between md:text-right">
                                                    <div className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(order.statusColor)}`}>
                                                        {order.status}
                                                    </div>
                                                    <div className="text-lg md:text-xl font-bold text-primary ml-4">{order.price}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/dashboard/orders" className="block text-center mt-4 md:mt-6 text-primary hover:underline font-medium text-sm md:text-base">
                                        {t('dashboard.view_all_orders')} →
                                    </Link>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('dashboard.my_orders')}</h2>
                                <div className="space-y-4">
                                    {recentOrders.map((order) => (
                                        <div key={order.id} className="border-2 border-gray-200 rounded-xl p-4 md:p-6 hover:border-primary transition-colors">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{order.vehicle}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{t('dashboard.order')} #{order.id}</p>
                                                    <p className="text-sm md:text-base text-gray-600">Date: {order.date}</p>
                                                </div>
                                                <div className="flex items-center justify-between md:text-right">
                                                    <div className={`inline-block px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium ${getStatusColor(order.statusColor)}`}>
                                                        {order.status}
                                                    </div>
                                                    <div className="text-xl md:text-2xl font-bold text-primary ml-4">{order.price}</div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-3">
                                                <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 md:py-3 rounded-xl font-medium transition-colors text-sm md:text-base">
                                                    {t('dashboard.track_order')}
                                                </button>
                                                <button className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 md:py-3 rounded-xl font-medium transition-colors text-sm md:text-base">
                                                    {t('dashboard.download_invoice')}
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'favorites' && (
                            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('dashboard.my_favorites')}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                    {favorites.map((vehicle) => (
                                        <div key={vehicle.id} className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-colors">
                                            <img src={vehicle.image} alt={vehicle.model} className="w-full h-48 object-cover" />
                                            <div className="p-4">
                                                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1">{vehicle.brand}</h3>
                                                <p className="text-sm md:text-base text-gray-600 mb-3">{vehicle.model} • {vehicle.year}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xl md:text-2xl font-bold text-primary">{vehicle.price}</span>
                                                    <div className="flex gap-2">
                                                        <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100">
                                                            <Heart className="h-5 w-5 fill-current" />
                                                        </button>
                                                        <Link to={`/vehicules/${vehicle.id}`} className="px-3 md:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 text-sm md:text-base">
                                                            {t('dashboard.view')}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'documents' && (
                            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('dashboard.my_documents')}</h2>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Facture BMW Série 3', date: '15/11/2024', type: 'PDF' },
                                        { name: 'Certificat de conformité', date: '15/11/2024', type: 'PDF' },
                                        { name: 'Garantie étendue', date: '15/11/2024', type: 'PDF' },
                                        { name: 'Contrat de vente', date: '15/11/2024', type: 'PDF' }
                                    ].map((doc, index) => (
                                        <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors gap-3">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <FileText className="h-8 w-8 md:h-10 md:w-10 text-primary flex-shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-sm md:text-base text-gray-800">{doc.name}</h3>
                                                    <p className="text-xs md:text-sm text-gray-600">{doc.date} • {doc.type}</p>
                                                </div>
                                            </div>
                                            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 text-sm md:text-base">
                                                {t('dashboard.download')}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6">
                                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">{t('dashboard.account_settings')}</h2>
                                <div className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('login.first_name')}</label>
                                            <input
                                                type="text"
                                                defaultValue={user.firstName}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">{t('login.last_name')}</label>
                                            <input
                                                type="text"
                                                defaultValue={user.lastName}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('login.email')}</label>
                                        <input
                                            type="email"
                                            defaultValue={user.email}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('login.phone')}</label>
                                        <input
                                            type="tel"
                                            defaultValue={user.phone}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                                        />
                                    </div>
                                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 md:py-4 rounded-xl font-bold transition-all text-sm md:text-base">
                                        {t('dashboard.save_changes')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
