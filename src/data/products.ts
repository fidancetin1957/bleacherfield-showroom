export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
    color: string;
    etsyUrl: string;
  }
  
  export const products: Product[] = [
    {
        id: '1',
        name: 'Classic Baseball Tee',
        category: 'Baseball',
        price: '24.99',
        image: '/mockups/baseball_1.webp',
        color: 'Navy/White',
        etsyUrl: 'https://etsy.com'
    },
    {
        id: '2',
        name: 'Football Mom Sweatshirt',
        category: 'Football',
        price: '34.99',
        image: '/mockups/football_1.webp',
        color: 'Heather Grey',
        etsyUrl: 'https://etsy.com'
    },
    {
        id: '3',
        name: 'Gameday Spirit Hoodie',
        category: 'Basketball',
        price: '44.99',
        image: '/mockups/basketball_1.webp',
        color: 'Oxford Navy',
        etsyUrl: 'https://etsy.com'
    },
    {
        id: '4',
        name: 'MVP Graphic Tee',
        category: 'Soccer',
        price: '22.99',
        image: '/mockups/soccer_1.webp',
        color: 'Black',
        etsyUrl: 'https://etsy.com'
    }
  ];
