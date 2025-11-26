import json
import os

# Chemins des fichiers
base_dir = r"c:\Users\tesla\Videos\ismo\garrage\src\locales"
fr_file = os.path.join(base_dir, "fr", "translation.json")
languages = ["en", "es", "de", "it", "pt", "ro"]

# Traductions manuelles pour l'anglais (partielles)
en_translations = {
    "vehicles": {
        "title": "Available Vehicles",
        "hero_title": "Find Your Ideal Vehicle",
        "hero_subtitle": "Discover our selection of premium vehicles from Germany",
        "search_placeholder": "Search by brand or model...",
        "results": "results",
        "filters": "Filters",
        "reset": "Reset",
        "brand": "Brand",
        "all_brands": "All brands",
        "price": "Price",
        "min": "Min",
        "max": "Max",
        "year": "Year",
        "from": "From",
        "to": "To",
        "mileage": "Mileage",
        "fuel": "Fuel",
        "all": "All",
        "transmission": "Transmission",
        "all_feminine": "All",
        "vehicle_count": "vehicle{{count}}",
        "filter_count": "filter{{count}}",
        "sort_newest": "Newest",
        "sort_price_asc": "Price ascending",
        "sort_price_desc": "Price descending",
        "sort_year_desc": "Year descending",
        "sort_km_asc": "Km ascending",
        "apply_filters": "Apply filters",
        "view_details": "View details",
        "no_results_title": "No vehicles found",
        "no_results_desc": "Try changing your search criteria or reset filters.",
        "reset_filters": "Reset filters",
        "apply": "Apply",
        "km": "km",
        "germany": "Germany"
    },
    "vehicle_detail": {
        "back_to_list": "Back to vehicles",
        "share_success": "Link copied to clipboard!",
        "share_cancelled": "Share cancelled",
        "share_title": "Discover this {{brand}} {{model}} at {{price}}€",
        "horses": "Horses",
        "doors": "Doors",
        "germany": "Germany",
        "warranty": "Warranty",
        "description": "Description",
        "controls_diagnostics": "Controls & Diagnostics",
        "technical_control": "Technical Control",
        "status": "Status",
        "last_control": "Last control",
        "next_control": "Next control",
        "battery_diagnostic": "Battery Diagnostic",
        "health_state": "Health state",
        "remaining_capacity": "Remaining capacity",
        "charge_cycles": "Charge cycles",
        "thermal_vehicle": "Thermal vehicle - No battery diagnostic required",
        "complete_maintenance_book": "Complete Maintenance Book",
        "maintenance_history": "Complete maintenance history available • All revisions made in authorized dealership",
        "equipments": "Equipments",
        "technical_specs": "Technical Specifications",
        "color": "Color",
        "consumption": "Consumption",
        "price": "Price",
        "vat_recoverable": "VAT recoverable",
        "delivery_estimation": "Delivery Estimation",
        "cost": "Cost",
        "delay": "Delay",
        "total_estimated": "Total estimated",
        "vehicle_price_delivery": "Vehicle price + delivery",
        "extended_warranty": "Extended Warranty",
        "extended_warranty_desc": "Extend your peace of mind with our 24-month extended warranty",
        "full_coverage": "Full coverage",
        "assistance_24_7": "24/7 Assistance",
        "replacement_vehicle": "Replacement vehicle",
        "first_registration": "First registration",
        "mileage": "Mileage",
        "warranty_included": "Warranty included",
        "ask_info": "Request information",
        "call_now": "Call now",
        "whatsapp": "WhatsApp",
        "certified_vehicle": "Certified Vehicle",
        "quality_control": "Complete quality control",
        "europe_delivery": "Europe Delivery",
        "europe_wide": "Europe wide",
        "financing_available": "Financing available",
        "custom_solutions": "Custom solutions",
        "warranty_duration": "{{duration}} warranty"
    }
}

def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

def merge_dicts(source, target, lang_code):
    """
    Fusionne récursivement source dans target.
    Si une clé manque dans target, elle est ajoutée depuis source.
    Si lang_code est 'en' et qu'on a une traduction manuelle, on l'utilise.
    Sinon on utilise la valeur source (français).
    """
    for key, value in source.items():
        if isinstance(value, dict):
            if key not in target:
                target[key] = {}
            merge_dicts(value, target[key], lang_code)
        else:
            if key not in target:
                target[key] = value

def apply_en_overrides(target, overrides):
    for key, value in overrides.items():
        if isinstance(value, dict):
            if key not in target:
                target[key] = {}
            apply_en_overrides(target[key], value)
        else:
            target[key] = value

def main():
    print(f"Chargement de la référence : {fr_file}")
    fr_data = load_json(fr_file)

    for lang in languages:
        lang_file = os.path.join(base_dir, lang, "translation.json")
        if not os.path.exists(lang_file):
            print(f"Création du fichier manquant : {lang_file}")
            lang_data = {}
        else:
            print(f"Mise à jour de : {lang_file}")
            lang_data = load_json(lang_file)

        # Fusionner avec le français (ajoute les clés manquantes avec valeur FR)
        merge_dicts(fr_data, lang_data, lang)

        # Si c'est l'anglais, appliquer les surcharges
        if lang == 'en':
            apply_en_overrides(lang_data, en_translations)

        save_json(lang_file, lang_data)
        print(f"Sauvegardé : {lang_file}")

if __name__ == "__main__":
    main()
