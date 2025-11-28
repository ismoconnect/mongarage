import json
import os

# Navigation translations for all languages
nav_translations = {
    'fr': {
        "home": "Accueil",
        "vehicles": "Véhicules",
        "all_vehicles": "Tous les véhicules",
        "auctions": "Les Enchères",
        "sourcing": "Provenance & Sourcing",
        "services_trust": "Services & Confiance",
        "services": "Services",
        "our_services": "Nos Services",
        "guarantees": "Nos Garanties",
        "inspections": "Expertises & Contrôles",
        "visit_vehicle": "Visiter un véhicule",
        "buying_guide": "Guide Achat",
        "how_to_buy": "Comment acheter ?",
        "faq": "Questions Fréquentes (FAQ)",
        "company": "L'Entreprise",
        "about_us": "Qui sommes nous ?",
        "commitments": "Nos Engagements",
        "locations": "Nos Points de vente",
        "contact_us": "Nous contacter",
        "contact": "Contact",
        "my_account": "Mon Compte",
        "language": "Langue"
    },
    'en': {
        "home": "Home",
        "vehicles": "Vehicles",
        "all_vehicles": "All vehicles",
        "auctions": "Auctions",
        "sourcing": "Sourcing & Origin",
        "services_trust": "Services & Trust",
        "services": "Services",
        "our_services": "Our Services",
        "guarantees": "Our Guarantees",
        "inspections": "Inspections & Controls",
        "visit_vehicle": "Visit a vehicle",
        "buying_guide": "Buying Guide",
        "how_to_buy": "How to buy?",
        "faq": "Frequently Asked Questions (FAQ)",
        "company": "The Company",
        "about_us": "About us",
        "commitments": "Our Commitments",
        "locations": "Our Locations",
        "contact_us": "Contact us",
        "contact": "Contact",
        "my_account": "My Account",
        "language": "Language"
    },
    'de': {
        "home": "Startseite",
        "vehicles": "Fahrzeuge",
        "all_vehicles": "Alle Fahrzeuge",
        "auctions": "Auktionen",
        "sourcing": "Herkunft & Beschaffung",
        "services_trust": "Dienstleistungen & Vertrauen",
        "services": "Dienstleistungen",
        "our_services": "Unsere Dienstleistungen",
        "guarantees": "Unsere Garantien",
        "inspections": "Inspektionen & Kontrollen",
        "visit_vehicle": "Fahrzeug besichtigen",
        "buying_guide": "Kaufratgeber",
        "how_to_buy": "Wie kaufen?",
        "faq": "Häufig gestellte Fragen (FAQ)",
        "company": "Das Unternehmen",
        "about_us": "Über uns",
        "commitments": "Unsere Verpflichtungen",
        "locations": "Unsere Standorte",
        "contact_us": "Kontaktieren Sie uns",
        "contact": "Kontakt",
        "my_account": "Mein Konto",
        "language": "Sprache"
    },
    'es': {
        "home": "Inicio",
        "vehicles": "Vehículos",
        "all_vehicles": "Todos los vehículos",
        "auctions": "Subastas",
        "sourcing": "Origen y Abastecimiento",
        "services_trust": "Servicios y Confianza",
        "services": "Servicios",
        "our_services": "Nuestros Servicios",
        "guarantees": "Nuestras Garantías",
        "inspections": "Inspecciones y Controles",
        "visit_vehicle": "Visitar un vehículo",
        "buying_guide": "Guía de Compra",
        "how_to_buy": "¿Cómo comprar?",
        "faq": "Preguntas Frecuentes (FAQ)",
        "company": "La Empresa",
        "about_us": "Quiénes somos",
        "commitments": "Nuestros Compromisos",
        "locations": "Nuestras Ubicaciones",
        "contact_us": "Contáctenos",
        "contact": "Contacto",
        "my_account": "Mi Cuenta",
        "language": "Idioma"
    },
    'it': {
        "home": "Home",
        "vehicles": "Veicoli",
        "all_vehicles": "Tutti i veicoli",
        "auctions": "Aste",
        "sourcing": "Provenienza e Approvvigionamento",
        "services_trust": "Servizi e Fiducia",
        "services": "Servizi",
        "our_services": "I Nostri Servizi",
        "guarantees": "Le Nostre Garanzie",
        "inspections": "Ispezioni e Controlli",
        "visit_vehicle": "Visitare un veicolo",
        "buying_guide": "Guida all'Acquisto",
        "how_to_buy": "Come acquistare?",
        "faq": "Domande Frequenti (FAQ)",
        "company": "L'Azienda",
        "about_us": "Chi siamo",
        "commitments": "I Nostri Impegni",
        "locations": "Le Nostre Sedi",
        "contact_us": "Contattaci",
        "contact": "Contatto",
        "my_account": "Il Mio Account",
        "language": "Lingua"
    },
    'pt': {
        "home": "Início",
        "vehicles": "Veículos",
        "all_vehicles": "Todos os veículos",
        "auctions": "Leilões",
        "sourcing": "Origem e Fornecimento",
        "services_trust": "Serviços e Confiança",
        "services": "Serviços",
        "our_services": "Nossos Serviços",
        "guarantees": "Nossas Garantias",
        "inspections": "Inspeções e Controles",
        "visit_vehicle": "Visitar um veículo",
        "buying_guide": "Guia de Compra",
        "how_to_buy": "Como comprar?",
        "faq": "Perguntas Frequentes (FAQ)",
        "company": "A Empresa",
        "about_us": "Quem somos",
        "commitments": "Nossos Compromissos",
        "locations": "Nossas Localizações",
        "contact_us": "Entre em contato",
        "contact": "Contato",
        "my_account": "Minha Conta",
        "language": "Idioma"
    },
    'ro': {
        "home": "Acasă",
        "vehicles": "Vehicule",
        "all_vehicles": "Toate vehiculele",
        "auctions": "Licitații",
        "sourcing": "Proveniență și Aprovizionare",
        "services_trust": "Servicii și Încredere",
        "services": "Servicii",
        "our_services": "Serviciile Noastre",
        "guarantees": "Garanțiile Noastre",
        "inspections": "Inspecții și Controale",
        "visit_vehicle": "Vizitați un vehicul",
        "buying_guide": "Ghid de Cumpărare",
        "how_to_buy": "Cum să cumpărați?",
        "faq": "Întrebări Frecvente (FAQ)",
        "company": "Compania",
        "about_us": "Despre noi",
        "commitments": "Angajamentele Noastre",
        "locations": "Locațiile Noastre",
        "contact_us": "Contactați-ne",
        "contact": "Contact",
        "my_account": "Contul Meu",
        "language": "Limba"
    }
}

# Update each language file
locales_dir = 'src/locales'
for lang_code, nav_data in nav_translations.items():
    file_path = os.path.join(locales_dir, lang_code, 'translation.json')
    
    try:
        # Read existing file
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # Update nav section
        data['nav'] = nav_data
        
        # Write back
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        
        print(f"✓ Updated {lang_code}/translation.json")
    except Exception as e:
        print(f"✗ Error updating {lang_code}/translation.json: {e}")

print("\nDone!")
