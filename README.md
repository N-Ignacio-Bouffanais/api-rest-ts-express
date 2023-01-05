# api-rest-ts-express
- This project is a Rest API with Typescript, Mongodb and Express.js, with authentication and authorization. And I will combine this project with Vue Js to have a complete eCommerce website.
- In this project the are 2 API, one for clothes such as: such as t-shirt, vests, shirts, pants and sweatshirts. And the other one is for devices electronics as cellphones, laptops, tablets, etc.

## Technologies that I used

- ExpressJS
- Typescript
- MongoDB
- JSON Web Token
- dotenv

## Models
```ts
import mongoose, { model, Schema  } from "mongoose";
import { Electronic } from "../interfaces/electronic.interface";

mongoose.set("strictQuery", true);

const ElectronicSchema = new Schema<Electronic>(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    color: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
      enum: ["celular", "tablet", "laptop", "mouse", "monitor", "teclado"],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    so:{
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ElectronicModel = model("electronis", ElectronicSchema);

export default ElectronicModel;

```

## Interface
```ts
export interface Electronic {
  model: string;
  color: string;
  brand: string;
  so: string;
  price: number;
  year: number;
  category: "celular" | "tablet" | "laptop" | "mouse" | "monitor" | "teclado";
  description: string;
}

```

## Author

- Website - [Nicolas_Bouffanais](https://nicolas-bouffanais.vercel.app/src/index.html)
- Twitter - [@N_Bouffanais](https://twitter.com/N_Bouffanais)