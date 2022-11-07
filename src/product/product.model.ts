export class ProductModel {
  _id: string;
  image :string;
  title: string;
  price: number;
  oldPrice: number;
  credit: number;
  calculatedRating : number;
  descriptions : string;
  advantages : string;
  disAdvantages : string;
  categories: string;
  tags: string;
  characteristics: {
    [key: string]: string
  };


}
