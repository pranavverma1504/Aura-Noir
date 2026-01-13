export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "midnight-velvet",
        name: "Midnight Velvet",
        subName: "Dark elegance.",
        price: "$120",
        description: "Black Orchid - Vanilla Noir - Spiced Rum",
        folderPath: "/images/perfume", // Placeholder path
        themeColor: "#4A148C", // Deep Purple
        gradient: "linear-gradient(135deg, #2e1065 0%, #000000 100%)",
        features: ["Long Lasting", "Eau de Parfum", "Hand Blended"],
        stats: [{ label: "Intensity", val: "High" }, { label: "Family", val: "Oriental" }, { label: "Sillerage", val: "Heavy" }],
        section1: { title: "Midnight Velvet.", subtitle: "Dark elegance." },
        section2: { title: "A mystery in a bottle.", subtitle: "An intoxicating blend of rare black orchids and rich vanilla noir." },
        section3: { title: "Unforgettable aura.", subtitle: "Leaves a trail of spiced rum and leather that lingers until dawn." },
        section4: { title: "Dare to be desired.", subtitle: "" },
        detailsSection: {
            title: "The Night Bloom",
            description: "Midnight Velvet captures the essence of the nocturnal garden. At its heart lies the rare Black Orchid, harvested only under the full moon. Blended with Madagascar Vanilla and a hint of aged Spiced Rum, this scent is a tribute to the mysterious and the bold.",
            imageAlt: "Midnight Velvet Details"
        },
        freshnessSection: {
            title: "Macerated for Months",
            description: "Unlike mass-produced fragrances, our batches are macerated for 6 months to allow the oils to mature and meld. This slow process results in a depth of character that evolves on your skin, revealing hidden notes hour after hour."
        },
        buyNowSection: {
            price: "$120",
            unit: "50ml Eau de Parfum",
            processingParams: ["Cruelty Free", "Sustainable Sourcing", "Small Batch"],
            deliveryPromise: "Complimentary luxury gift wrapping. Express shipping included.",
            returnPolicy: "Try the sample first. 30-day returns on unopened full bottles."
        }
    },
    {
        id: "golden-amber",
        name: "Golden Amber",
        subName: "Liquid gold.",
        price: "$145",
        description: "Oud Wood - Warm Amber - Saffron",
        folderPath: "/images/perfume",
        themeColor: "#FF6F00", // Amber Gold
        gradient: "linear-gradient(135deg, #78350f 0%, #451a03 100%)",
        features: ["Exotic Oud", "Warm Spicy", "Unisex"],
        stats: [{ label: "Concentration", val: "25%" }, { label: "Family", val: "Woody" }, { label: "Origin", val: "Dubai" }],
        section1: { title: "Golden Amber.", subtitle: "Liquid gold." },
        section2: { title: "Opulence redefined.", subtitle: "The warmth of sun-drenched amber meets the depth of ancient oud." },
        section3: { title: "Royal heritage.", subtitle: "Inspired by the palaces of the East, a scent for the modern royalty." },
        section4: { title: "Wear your crown.", subtitle: "" },
        detailsSection: {
            title: "Ancient Resins",
            description: "We source our Oud from sustainable plantations in Southeast Asia and blend it with precious Amber resin. A touch of Saffron adds a spicy kick, creating a fragrance that is both warm and commanding. It's not just a scent; it's a statement of power.",
            imageAlt: "Golden Amber Details"
        },
        freshnessSection: {
            title: "Pure Extraction",
            description: "Our extraction method preserves the full spectrum of the aromatic molecules. We use CO2 extraction for the spices and traditional steam distillation for the woods, ensuring that the scent profile is as close to nature as possible, rich and unadulterated."
        },
        buyNowSection: {
            price: "$145",
            unit: "50ml Extrait de Parfum",
            processingParams: ["Natural Ingredients", "Alcohol Free Option", "Hand Poured"],
            deliveryPromise: "Securely shipped in a velvet-lined box. Insurance included.",
            returnPolicy: "Satisfaction guaranteed or full refund."
        }
    },
    {
        id: "scarlet-rose",
        name: "Scarlet Rose",
        subName: "Fatal attraction.",
        price: "$130",
        description: "Damask Rose - Patchouli - Red Berries",
        folderPath: "/images/perfume",
        themeColor: "#C62828", // Deep Red
        gradient: "linear-gradient(135deg, #881337 0%, #4c0519 100%)",
        features: ["Romantic", "Floral Chypre", "Sensual"],
        stats: [{ label: "Petals", val: "1000+" }, { label: "Family", val: "Floral" }, { label: "Notes", val: "3 Layers" }],
        section1: { title: "Scarlet Rose.", subtitle: "Fatal attraction." },
        section2: { title: "Passion in bloom.", subtitle: "A bouquet of velvet red roses with a dangerous edge of patchouli." },
        section3: { title: "Intoxicating romance.", subtitle: "Sweet red berries inviting you closer, patchouli keeping you captivated." },
        section4: { title: "Love is the drug.", subtitle: "" },
        detailsSection: {
            title: "The Queen of Flowers",
            description: "Scarlet Rose is an ode to the Damask Rose, known for its intense and heady aroma. We amplify its seduction with earthy Patchouli and bright Red Berries. It's a classic romance with a modern, provocative twist.",
            imageAlt: "Scarlet Rose Details"
        },
        freshnessSection: {
            title: "Captured at Dawn",
            description: "Our roses are hand-picked at dawn when their scent is most potent. They are immediately processed to capture the 'living flower' scent, preserving the dewy freshness that is often lost in traditional drying methods."
        },
        buyNowSection: {
            price: "$130",
            unit: "50ml Eau de Parfum",
            processingParams: ["Vegan", "Ethical Musk", "No Phthalates"],
            deliveryPromise: "Delivered with a fresh rose petal in the package (seasonal).",
            returnPolicy: "Love it or swap it for another scent from our collection."
        }
    }
];
