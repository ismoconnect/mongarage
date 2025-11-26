import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "Achat de véhicules",
            questions: [
                {
                    q: "Comment puis-je acheter un véhicule ?",
                    a: "Vous pouvez parcourir notre catalogue en ligne, sélectionner le véhicule qui vous intéresse, et nous contacter pour finaliser l'achat. Nous vous accompagnons à chaque étape du processus."
                },
                {
                    q: "Puis-je voir le véhicule avant de l'acheter ?",
                    a: "Oui, nous proposons des visites virtuelles détaillées et vous pouvez également planifier une visite physique dans nos locaux en Allemagne ou dans nos points de vente."
                },
                {
                    q: "Quels sont les modes de paiement acceptés ?",
                    a: "Nous acceptons les virements bancaires, les paiements par carte bancaire et proposons également des solutions de financement personnalisées."
                },
                {
                    q: "Est-il possible de faire un essai routier ?",
                    a: "Oui, vous pouvez effectuer un essai routier sur rendez-vous dans nos locaux en Allemagne ou dans l'un de nos points de vente partenaires."
                }
            ]
        },
        {
            category: "Livraison et transport",
            questions: [
                {
                    q: "Dans quels pays livrez-vous ?",
                    a: "Nous livrons dans toute l'Europe : France, Belgique, Suisse, Luxembourg, Italie, Espagne, Portugal, Roumanie et autres pays sur demande."
                },
                {
                    q: "Quel est le délai de livraison ?",
                    a: "Le délai varie selon votre pays : 5-7 jours pour la France, 4-6 jours pour la Belgique, jusqu'à 10-12 jours pour des destinations plus éloignées."
                },
                {
                    q: "Comment est assuré le transport ?",
                    a: "Tous nos véhicules sont transportés par des professionnels certifiés et sont entièrement assurés pendant le transport."
                },
                {
                    q: "Puis-je venir chercher le véhicule moi-même ?",
                    a: "Oui, vous pouvez récupérer votre véhicule directement dans nos locaux en Allemagne. Nous vous aidons avec toutes les formalités nécessaires."
                }
            ]
        },
        {
            category: "Garanties et services",
            questions: [
                {
                    q: "Quelle garantie est incluse avec le véhicule ?",
                    a: "Tous nos véhicules incluent une garantie de 12 mois minimum. Vous pouvez également souscrire à une garantie étendue de 24 mois."
                },
                {
                    q: "Que couvre la garantie ?",
                    a: "La garantie couvre les défauts mécaniques et électriques majeurs. La garantie étendue offre une couverture complète incluant l'assistance 24/7 et un véhicule de remplacement."
                },
                {
                    q: "Les véhicules sont-ils inspectés ?",
                    a: "Oui, tous nos véhicules passent un contrôle technique complet et une expertise détaillée avant la vente. Nous fournissons un rapport complet."
                },
                {
                    q: "Proposez-vous un service après-vente ?",
                    a: "Oui, nous offrons un service après-vente complet avec assistance technique, entretien et réparations dans notre réseau de partenaires."
                }
            ]
        },
        {
            category: "Documentation et formalités",
            questions: [
                {
                    q: "Quels documents vais-je recevoir ?",
                    a: "Vous recevrez : le certificat d'immatriculation, le contrôle technique, le carnet d'entretien, le certificat de conformité européen et tous les documents nécessaires pour l'immatriculation."
                },
                {
                    q: "Aidez-vous avec l'immatriculation ?",
                    a: "Oui, nous vous assistons dans toutes les démarches d'immatriculation dans votre pays et fournissons tous les documents nécessaires."
                },
                {
                    q: "Le véhicule est-il conforme aux normes européennes ?",
                    a: "Oui, tous nos véhicules sont conformes aux normes européennes et disposent d'un certificat de conformité CE."
                },
                {
                    q: "Y a-t-il des frais cachés ?",
                    a: "Non, tous nos prix sont transparents. Le prix affiché inclut le véhicule et la garantie. Les frais de livraison et d'immatriculation sont clairement indiqués séparément."
                }
            ]
        },
        {
            category: "Financement",
            questions: [
                {
                    q: "Proposez-vous des solutions de financement ?",
                    a: "Oui, nous travaillons avec plusieurs partenaires financiers pour vous proposer des solutions de crédit adaptées à votre situation."
                },
                {
                    q: "Quel est le montant minimum d'apport ?",
                    a: "L'apport minimum varie selon votre situation et le véhicule choisi. Contactez-nous pour une étude personnalisée."
                },
                {
                    q: "Puis-je obtenir un crédit sans apport ?",
                    a: "Oui, sous certaines conditions. Nos conseillers financiers étudieront votre dossier pour trouver la meilleure solution."
                },
                {
                    q: "Quelle est la durée maximale de financement ?",
                    a: "Nous proposons des financements sur 12 à 84 mois selon votre profil et le montant emprunté."
                }
            ]
        }
    ];

    const toggleQuestion = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16">
            <div className="container mx-auto px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                        Questions Fréquentes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Trouvez rapidement les réponses à vos questions sur l'achat, la livraison et nos services
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
                                <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                            </div>
                            <div className="p-6 space-y-4">
                                {category.questions.map((item, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`;
                                    const isOpen = openIndex === index;

                                    return (
                                        <div key={questionIndex} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                                            <button
                                                onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                                className="w-full flex items-center justify-between text-left py-4 hover:text-primary transition-colors"
                                            >
                                                <span className="font-bold text-lg pr-4">{item.q}</span>
                                                <ChevronDown
                                                    className={`h-6 w-6 text-accent flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="pb-4 text-gray-700 leading-relaxed">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Vous ne trouvez pas votre réponse ?</h2>
                    <p className="text-xl mb-8 text-white/90">Notre équipe est là pour vous aider</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="tel:+33123456789"
                            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Phone className="h-5 w-5" />
                            Appelez-nous
                        </a>
                        <a
                            href="mailto:contact@auto17.com"
                            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <Mail className="h-5 w-5" />
                            Envoyez un email
                        </a>
                        <a
                            href="https://wa.me/33123456789"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
