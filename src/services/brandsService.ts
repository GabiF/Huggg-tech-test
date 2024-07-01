import { getAllBrands, getAllProducts, getAllStores } from '../clients/brandsApiClient';
import type { Brand, Product, Store } from '../types';

export const getBrandById = (brandId: string): Brand | undefined => {
  const allBrands: Brand[] | undefined = getAllBrands();

  if (!allBrands) return undefined;

  return allBrands.find((brand) => brandId === brand.id);
}

export const getProductsForBrand = (brandId: string): Product[] | undefined => {
  const matchingBrand = getBrandById(brandId);

  if (!matchingBrand) return undefined;

  return getAllProducts()?.filter((product) => matchingBrand.products.includes(product.id) || matchingBrand.consolidated_products.includes(product.id));
}

export const getStoresForBrand = (brandId: string): Store[] | undefined => {
  const matchingBrand = getBrandById(brandId);

  if (!matchingBrand) return undefined;

  return getAllStores()?.filter((store) => matchingBrand.stores.includes(store.id));
}