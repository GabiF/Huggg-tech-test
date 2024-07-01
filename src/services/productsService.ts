import type { Product, Store } from "../types";
import { getAllProducts, getAllStores } from "../clients/brandsApiClient";

const getProductById = (productId: string): Product | undefined => {
    const allProducts: Product[] | undefined = getAllProducts();

    if (!allProducts) return undefined;

    return allProducts.find((product) => productId === product.id);
}

export const getStoresForProduct = (productId: string): Store[] | undefined => {
    const matchingProduct = getProductById(productId);

    if (!matchingProduct) return undefined;

    return getAllStores()?.filter((store) => matchingProduct.brand_id === store.brand_id);
}