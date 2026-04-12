export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  color: string;
  etsyUrl: string;
  isGameday?: boolean;
  role?: string[];
  city?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Football Mom Tee',
    price: '28.00',
    category: 'Football',
    image: '/mockups/football_1.webp',
    color: 'Oxford Navy',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    role: ['Mom'],
    isNew: true
  },
  {
    id: '2',
    name: 'Game Day Basketball Hoodie',
    price: '45.00',
    category: 'Basketball',
    image: '/mockups/basketball_1.webp',
    color: 'Deep Heather',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    role: ['Dad', 'Super Fan']
  },
  {
    id: '3',
    name: 'Seattle Baseball Spirit Jersey',
    price: '32.00',
    category: 'Baseball',
    image: '/mockups/baseball_1.webp',
    color: 'Navy/White',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    city: 'Seattle',
    role: ['Mom', 'Sis'],
    isNew: true
  },
  {
    id: '4',
    name: 'Kansas Soccer Gameday Suit',
    price: '42.00',
    category: 'Soccer',
    image: '/mockups/soccer_1.webp',
    color: 'White/Red',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    city: 'Kansas',
    role: ['Youth']
  },
  {
    id: '5',
    name: 'Vintage Hockey Dad Sweatshirt',
    price: '48.00',
    category: 'Hockey',
    image: '/mockups/hockey_1.webp',
    color: 'Black',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    role: ['Dad'],
    isNew: true
  },
];
