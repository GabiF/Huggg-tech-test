import { getAllBrands, getAllProducts, getAllStores } from "../../src/clients/brandsApiClient";
import type { Brand, Product, Store } from "../../src/types";
import { readJsonFile } from "../testUtils";

it('should', () => {
    expect(true).toBe(true);
});

describe('getAllBrands', () => {
    it('should return all brands', () => {
        const allBrands: Brand[] | undefined = getAllBrands();

        const expectedAllBrands = readJsonFile('./mocks/expectedAllBrands.json');
        expect(allBrands).toEqual(expectedAllBrands);
    });
});

describe('getAllProducts', () => {
    it('should return all products', () => {
        const allProducts: Product[] | undefined = getAllProducts();

        const expectedAllProducts = readJsonFile('./mocks/expectedAllProducts.json');
        expect(allProducts).toEqual(expectedAllProducts);
    });
});

describe('getAllStores', () => {
    it('should return all stores', () => {
        const allStores: Store[] | undefined = getAllStores();

        const expectedAllStores = readJsonFile('./mocks/expectedAllStores.json');
        expect(allStores).toEqual(expectedAllStores);
    });
});