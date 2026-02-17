export interface Product {
    id: number;
    name: string;
    description: string; // 2–3 sentences
    price: number;       // KZT
    rating: number;      // 1..5 (decimal ok)
    image: string;       // main image (url or assets path)
    images: string[];    // at least 3
    link: string;        // real kaspi product url
}