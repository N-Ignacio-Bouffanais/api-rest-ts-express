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
