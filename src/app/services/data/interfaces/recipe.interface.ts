export interface RecipeEntity {
    name: string;
    ingredients: Ingredient[];
    imageUrl: string;
}

export interface Ingredient {
    name: string,
    quantity: number;
}