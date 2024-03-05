export interface ProductType {
  idUser: number;
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
  totalComments: number;
  overview?: string;
  features?: string[];
  hearts: number;
}
