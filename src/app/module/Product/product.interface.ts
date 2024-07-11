type TCategory =
  | "Japanese Maple Trees"
  | "Crape Myrtle Trees"
  | "Arborvitae Trees"
  | "Magnolia Trees"
  | "Privacy Trees"
  | "Cherry Laurels"
  | "Barberry"
  | "Hydrangeas"
  | "Wisteria Vines"
  | "Rhododendron"
  | "Juniper Trees"
  | "Perennials";
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
  isDeleted: boolean;
};
