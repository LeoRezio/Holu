import { request, Request, Response, Router } from "express";
import Products from "./model/Products";

const router = Router();

router.get("/", async (request: Request, response: Response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  const product = await Products.find({});
  response.status(201).json(product);
});

router.post("/add", async (request: Request, response: Response) => {
  console.log(request.body);
  const newProduct = new Products(request.body);
  await newProduct.save();
  const product = await Products.find({});
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow", "*");
  response.status(201).json(product);
});

router.put("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await Products.findByIdAndUpdate(id, {
    ...request.body,
  });
  const products = await Products.find({});
  response.setHeader("Access-Control-Allow-Headers:", "*");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow", "*");
  response.json(products);
});

router.delete("/:id", async (request: Request, response: Response) => {
  const { id } = request.params;
  await Products.findByIdAndDelete(id);
  const products = await Products.find({});
  response.json(products);
});

export { router };
