import express from 'express';
import type { Request, Response } from 'express';
import { getBrandById, getProductsForBrand, getStoresForBrand } from './services/brandsService';
import { getStoresForProduct } from './services/productsService';

const app = express();
const port = 3000;

app.get('/', (_: Request, res: Response) => {
  res.send(
    '<div>Hello, Huggger! You`ve reached the homepage of our API. More useful data can be found at: <ul>'
    + '<li><a href="http://localhost:3000/v1/brands/a715b837-f4fc-48ba-ba0a-7f53b6dc59c5" target="blank">Get Brand by ID</a></li>'
    + '<li><a href="http://localhost:3000/v1/brands/a715b837-f4fc-48ba-ba0a-7f53b6dc59c5/products" target="blank">Get Products For Brand (identified by ID)</a></li>'
    + '<li><a href="http://localhost:3000/v1/brands/a715b837-f4fc-48ba-ba0a-7f53b6dc59c5/stores" target="blank">Get Stores For Brand (identified by ID)</a></li>'
    + '<li><a href="http://localhost:3000/v1/products/5a3fe6f7-7796-44ca-84fe-70d4f751527d/stores" target="blank">Get Stores For Product (identified by ID)</a></li>'
    + '</ul></div>'
  );
});

app.get('/v1/brands/:brandId', (req: Request, res: Response) => {
  console.log('GET BRAND BY ID ENDPOINT CALLED WITH: ' + req.params.brandId);

  const brand = getBrandById(req.params.brandId);
  if (!brand) {
    res.status(404).send({ message: "Could not find any matching brand for the given id" });
  } else {
    res.status(200).send(brand);
  }
});

app.get('/v1/brands/:brandId/products', (req: Request, res: Response) => {
  console.log('GET PRODUCTS FOR BRAND BY ID ENDPOINT CALLED WITH: ' + req.params.brandId);

  const productsForBrand = getProductsForBrand(req.params.brandId);
  if (!productsForBrand) {
    res.status(404).send({ message: "Could not find any matching brand for the given id" });
  } else if (productsForBrand.length === 0) {
    res.status(404).send({ message: "Could not find any products for the given brand" });
  } else {
    res.status(200).send(productsForBrand);
  }
});

app.get('/v1/brands/:brandId/stores', (req: Request, res: Response) => {
  console.log('GET STORES FOR BRAND BY ID ENDPOINT CALLED WITH: ' + req.params.brandId);

  const storesForBrand = getStoresForBrand(req.params.brandId);
  if (storesForBrand === undefined) {
    res.status(404).send({ message: "Could not find any matching brand for the given id" });
  } else if (storesForBrand.length === 0) {
    res.status(404).send({ message: "Could not find any stores for the given brand" });
  } else {
    res.status(200).send(storesForBrand);
  }
});

app.get('/v1/products/:productId/stores', (req: Request, res: Response) => {
    console.log('GET STORES FOR PRODUCT BY ID ENDPOINT CALLED WITH: ' + req.params.productId);

    const storesForProduct = getStoresForProduct(req.params.productId);
    if (storesForProduct === undefined) {
        res.status(404).send({ message: "Could not find any matching product for the given id" });
    } else if (storesForProduct.length === 0) {
        res.status(404).send({ message: "Could not find any stores for the given product" });
    } else {
        res.status(200).send(storesForProduct);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});