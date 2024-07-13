type TCategory = "offices" | "home" | "outDoor" | "garden" | "low-water";

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: TCategory;
  stock: number;
  image: string;
  rating: number;
  brand: string;
  status: "OUT-OF-STOCK" | "IN-STOCK";
};
