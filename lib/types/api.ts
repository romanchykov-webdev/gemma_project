export interface Product {
	id: number;
	image: string;
	name: string;
	ingredients: string[];
	price: number;
	createa_at: string;
	updated_at: string;
	category: string;
}

export interface Category {
	id: number;
	name: string;
	createa_at: string;
	updated_at: string;
	products: Product[];
}

export interface Ingredient {
	id: number;
	image: string;
	name: string;
	price: string;
	createa_at: string;
	updated_at: string;
}

export interface HomeApiResponse {
	category: Category[];
	ingredient: Ingredient[];
}
