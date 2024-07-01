import {getAllBrands, getAllProducts, getAllStores} from "../../src/clients/brandsApiClient";
import {readJsonFile} from "../testUtils";
import {getStoresForProduct} from "../../src/services/productsService";

jest.mock('../../src/clients/brandsApiClient', () => ({
    getAllProducts: jest.fn(),
    getAllStores: jest.fn()
}));

describe('getStoresForProduct', () => {
    beforeEach(() => {
        (getAllProducts as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllProducts.json'));
        (getAllStores as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllStores.json'));
    });

    it('should return all stores for product when product exists', () => {
        const result = getStoresForProduct("e1b549ab-6e27-4098-bcb5-5e4e4eb94729");

        const expectedMatchingStores = readJsonFile('./mocks/expectedMatchingStoresForProduct.json');
        expect(result).toEqual(expectedMatchingStores);
    });

    it('should return undefined when product does not exist', () => {
        const result = getStoresForProduct("random-product-id");

        expect(result).toBeUndefined();
    });

    it('should return empty array when no stores match existing product', () => {
        (getAllProducts as jest.Mock).mockReturnValueOnce([{ id: "no-stores-product", "brand_id": "random-brand-id"}]);

        const result = getStoresForProduct("no-stores-product");

        expect(result).toEqual([]);
    });
});