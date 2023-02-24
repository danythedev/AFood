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

export interface RecipeFormValue extends ModifiedRecipe {
    name: string;
    ingredients: Ingredient[];
    url: string;
}

export interface ModifiedRecipe {
    [key: string]: Ingredient[] | string;
}