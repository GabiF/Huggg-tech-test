import { getAllBrands, getAllProducts, getAllStores } from "../../src/clients/brandsApiClient";
import { readJsonFile } from "../testUtils";
import { getBrandById, getProductsForBrand, getStoresForBrand } from "../../src/services/brandsService";

jest.mock('../../src/clients/brandsApiClient', () => ({
    getAllBrands: jest.fn(),
    getAllProducts: jest.fn(),
    getAllStores: jest.fn()
}));

describe('getBrandById', () => {
    beforeAll(() => {
        jest.clearAllMocks();
        (getAllBrands as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllBrands.json'));
    });

    it('should return brand when id exists', () => {
        const result = getBrandById("69be9b8c-5b95-4792-a05c-652d2f15a62f");

        expect(result).toEqual({
            "id": "69be9b8c-5b95-4792-a05c-652d2f15a62f",
            "created_at": "2019-03-11 09:50:47",
            "updated_at": "2019-03-06 10:27:19",
            "name": "Taylor St. Baristas",
            "internal_name": "",
            "logo": "ar242d3ea0ec1475a304970581cba93666.png",
            "colour": "",
            "success": "You top human, you. \nBig question is... who gets your next one?",
            "share": "I'm using @huggg_uk to send my friends & family a little surprise pick me up! Download and send a huggg too @ api.huggg.me\/download",
            "weight": 1050,
            "deleted_at": null,
            "expiry": 365,
            "website": "https:\/\/www.taylor-st.com\/",
            "integration_id": 2,
            "user_id": "",
            "email": "candi.brych@taylor-st.com",
            "vat": 20,
            "faq": null,
            "description": "",
            "redeem": null,
            "location_text": "London",
            "map_pin_url": "https:\/\/cdn.huggg.me\/locations\/are11946747092e3cac7f0f62755270f761620cc22.png",
            "consolidated": 0,
            "default_location_description_markdown": "",
            "products": [],
            "consolidated_products": [
                "26f7a82a-30a8-44e4-93cb-499a256d0ce9"
            ],
            "stores": [
                "120cad4a-d5ed-4e69-9619-193943518a64",
                "4b88a907-25a2-42fe-9fde-4b8c82bad72b",
                "57dcdd98-34fb-49e8-b046-ecd03ddade6a",
                "70ef8cf6-f96d-41e6-9993-e2b38a46654a",
                "9924e2b4-4a98-4c40-a0f1-bf3325be661e",
                "b98bac59-72ba-46ae-ad2e-eaae1cad7a7b",
                "bcace9a2-c850-46fd-9902-28abde12de2d",
                "e13b68c7-1e67-4c9f-a64d-202d6896de46",
                "f26e4aca-17ea-47ca-8b10-5e9964552c5a"
            ],
            "logo_url": "https:\/\/test.huggg.me\/brands\/ar242d3ea0ec1475a304970581cba93666.png"
        });
    });

    it('should return undefined when id does not exist', () => {
        const result = getBrandById("random-id");

        expect(result).toBeUndefined();
    });
});

describe('getProductsForBrand', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (getAllBrands as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllBrands.json'));
        (getAllProducts as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllProducts.json'));
    });

    it('should return all products (including consolidated) for brand when brand exists', () => {
        const result = getProductsForBrand("a715b837-f4fc-48ba-ba0a-7f53b6dc59c5");

        const expectedProducts = readJsonFile('./mocks/expectedMatchingProductsForBrand.json');
        expect(result).toEqual(expectedProducts);
    });

    it('should return undefined when brand does not exist', () => {
        const result = getProductsForBrand("random-id");

        expect(result).toBeUndefined();
    });

    it('should return empty array when brand exists with no products (including consolidated)', () => {
        (getAllBrands as jest.Mock).mockReturnValueOnce([{ id: "no-products-brand", products: [], "consolidated_products": []}])

        const result = getProductsForBrand("no-products-brand");

        expect(result).toEqual([]);
    });
});

describe('getStoresForBrand', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (getAllBrands as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllBrands.json'));
        (getAllStores as jest.Mock).mockReturnValue(readJsonFile('./mocks/expectedAllStores.json'));
    });

    it('should return all stores for brand when brand exists', () => {
        const result = getStoresForBrand("b325ab6c-60f2-401e-8d92-1d577b81bfe0");

        const expectedStores = readJsonFile('./mocks/expectedMatchingStoresForBrand.json');
        expect(result).toEqual(expectedStores);
    });

    it('should return undefined when brand does not exist', () => {
        const result = getStoresForBrand("random-id");

        expect(result).toBeUndefined();
    });

    it('should return empty array when brand exists with no stores', () => {
        const result = getStoresForBrand("59f14fdc-7db6-41d2-a2af-56357801f3ef");

        expect(result).toEqual([]);
    });
});