import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert(t('contact.success_message'));
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">{t('contact.title')}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-xl font-bold text-primary mb-6">{t('contact.info_title')}</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t('contact.address_title')}</h4>
                                        <p className="text-gray-600">
                                            Friedrichstraße 123<br />
                                            10117 Berlin, {t('countries.germany')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t('contact.phone_title')}</h4>
                                        <p className="text-gray-600">+49 123 456 789</p>
                                        <p className="text-sm text-gray-500">{t('contact.phone_hours')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-accent/10 p-3 rounded-lg text-accent">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t('contact.email_title')}</h4>
                                        <p className="text-gray-600">contact@auto17.com</p>
                                        <p className="text-sm text-gray-500">{t('contact.email_response')}</p>
                                    </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mb-4">{t('contact.follow_us')}</h4>
                                <div className="flex gap-4">
                                    {/* Social Media Placeholders */}
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">FB</div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">IG</div>
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors cursor-pointer">LN</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary p-8 rounded-2xl shadow-sm text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="h-6 w-6 text-accent" />
                                <h3 className="text-xl font-bold">{t('contact.chat_title')}</h3>
                            </div>
                            <p className="text-gray-300 mb-6">
                                {t('contact.chat_desc')}
                            </p>
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                                {t('contact.chat_btn')}
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-primary mb-6">{t('contact.form_title')}</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.name_label')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder={t('contact.name_placeholder')}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.email_label')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder={t('contact.email_placeholder')}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.phone_label')}</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                            placeholder={t('contact.phone_placeholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.subject_label')}</label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                        >
                                            <option value="">{t('contact.subject_placeholder')}</option>
                                            <option value="devis">{t('contact.subject_quote')}</option>
                                            <option value="info">{t('contact.subject_info')}</option>
                                            <option value="partenariat">{t('contact.subject_partnership')}</option>
                                            <option value="autre">{t('contact.subject_other')}</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.message_label')}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                        placeholder={t('contact.message_placeholder')}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="h-5 w-5" />
                                    {t('contact.send_btn')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
