import type { Brand, PaginatedResponse, Product, Store } from '../types';
import { readJsonFile } from '../utils/fileReader';

const BRANDS_MOCKS_FILEPATH = './mocks/brands.json';

let completeBrandsResponse: PaginatedResponse | undefined;

const getCompleteBrands = (): PaginatedResponse => {
  if (!completeBrandsResponse) {
    completeBrandsResponse = readJsonFile(BRANDS_MOCKS_FILEPATH) as PaginatedResponse;
  }

  return completeBrandsResponse;
}

export const getAllBrands = (): Brand[] | undefined => {
  try {
    const completeBrandsResponse = getCompleteBrands();

    return completeBrandsResponse.data;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return undefined;
  }
};

export const getAllProducts = (): Product[] | undefined => {
  try {
    const completeBrandsResponse = getCompleteBrands();

    return completeBrandsResponse.embedded.products;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return undefined;
  }
};

export const getAllStores = (): Store[] | undefined => {
  try {
    const completeBrandsResponse = getCompleteBrands();

    return completeBrandsResponse.embedded.stores;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return undefined;
  }
};

