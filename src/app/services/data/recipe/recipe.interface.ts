export interface RecipeEntity {
    name: string;
    ingredients: Ingredient[];
    imageUrl: string;
}

export interface Recipe extends RecipeEntity{
    id: string;
}

export interface Ingredient {
    name: string,
    quantity: number;
}

export interface RecipeFormValue {
    name: string;
    ingredients: Ingredient[];
}