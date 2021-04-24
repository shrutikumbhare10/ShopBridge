import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopbridgeService {

  constructor() { }

  getProductsData() {
    return of(
      [
        {
          "itemPrice": 150,
          "id": 1,
          "quantity": 1,
          "itemName": "accusamus beatae ad",
          "url": "https://via.placeholder.com/600/92c952",
          "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
          "itemPrice": 240,
          "id": 2,
          "quantity": 1,
          "itemName": "reprehenderit ipsam",
          "url": "https://via.placeholder.com/600/771796",
          "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
          "itemPrice": 6899,
          "id": 3,
          "quantity": 1,
          "itemName": "officia porro modi",
          "url": "https://via.placeholder.com/600/24f355",
          "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
          "itemPrice": 423,
          "id": 4,
          "quantity": 1,
          "itemName": "culpa odio repudiandae",
          "url": "https://via.placeholder.com/600/d32776",
          "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
          "itemPrice": 210,
          "id": 5,
          "quantity": 1,
          "itemName": "natus nisi omnis",
          "url": "https://via.placeholder.com/600/f66b97",
          "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
        {
          "itemPrice": 345,
          "id": 6,
          "quantity": 1,
          "itemName": "accusamus ea nemo",
          "url": "https://via.placeholder.com/600/56a8c2",
          "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
        },
        {
          "itemPrice": 750,
          "id": 7,
          "quantity": 1,
          "itemName": "officia delectus aut ias",
          "url": "https://via.placeholder.com/600/b0f7cc",
          "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
        },
        {
          "itemPrice": 999,
          "id": 8,
          "quantity": 1,
          "itemName": "aut porro officiis corporis",
          "url": "https://via.placeholder.com/600/54176f",
          "thumbnailUrl": "https://via.placeholder.com/150/54176f"
        },
        {
          "itemPrice": 2399,
          "id": 9,
          "quantity": 1,
          "itemName": "qui eius qui autem sed",
          "url": "https://via.placeholder.com/600/51aa97",
          "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
        },
        {
          "itemPrice": 1000,
          "id": 10,
          "quantity": 1,
          "itemName": "beatae et provident",
          "url": "https://via.placeholder.com/600/810b14",
          "thumbnailUrl": "https://via.placeholder.com/150/810b14"
        },
        {
          "itemPrice": 2455,
          "id": 11,
          "quantity": 1,
          "itemName": "nihil at amet qui",
          "url": "https://via.placeholder.com/600/1ee8a4",
          "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
        },
        {
          "itemPrice": 320,
          "id": 12,
          "quantity": 1,
          "itemName": "mollitia soluta ut rerum",
          "url": "https://via.placeholder.com/600/66b7d2",
          "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
        },
        {
          "itemPrice": 119,
          "id": 13,
          "quantity": 1,
          "itemName": "repudiandae iusto rerum",
          "url": "https://via.placeholder.com/600/197d29",
          "thumbnailUrl": "https://via.placeholder.com/150/197d29"
        },
        {
          "itemPrice": 875,
          "id": 14,
          "quantity": 1,
          "itemName": "est necessitatibus architecto",
          "url": "https://via.placeholder.com/600/61a65",
          "thumbnailUrl": "https://via.placeholder.com/150/61a65"
        },
        {
          "itemPrice": 99,
          "id": 15,
          "quantity": 1,
          "itemName": "harum dicta lum qui",
          "url": "https://via.placeholder.com/600/f9cee5",
          "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
        },
        {
          "itemPrice": 320,
          "id": 16,
          "quantity": 1,
          "itemName": "iusto sunt nobis quas erunt",
          "url": "https://via.placeholder.com/600/fdf73e",
          "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
        },
        {
          "itemPrice": 455,
          "id": 17,
          "quantity": 1,
          "itemName": "natus doloribus necessi ipsa",
          "url": "https://via.placeholder.com/600/9c184f",
          "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
        },
        {
          "itemPrice": 199,
          "id": 18,
          "quantity": 1,
          "itemName": "laboriosam bus et illum dolis",
          "url": "https://via.placeholder.com/600/1fe46f",
          "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
        },
        {
          "itemPrice": 1990,
          "id": 19,
          "quantity": 1,
          "itemName": "perferendis nesciunt eveni",
          "url": "https://via.placeholder.com/600/56acb2",
          "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
        },
        {
          "itemPrice": 1750,
          "id": 20,
          "quantity": 1,
          "itemName": "assumenda voluptatem conseq",
          "url": "https://via.placeholder.com/600/8985dc",
          "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
        }
      ]
    )
  }
}

export interface IProducts {
  itemPrice: number;
  id: number;
  quantity: number;
  itemName: string;
  url: string;
  thumbnailUrl: string;
}
