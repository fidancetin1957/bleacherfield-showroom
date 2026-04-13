export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  model: 't-shirt' | 'sweatshirt' | 'hoodie';
  image: string;
  color: string;
  etsyUrl: string;
  isGameday?: boolean;
  franchiseId?: string;
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
    model: 't-shirt',
    image: '/mockups/football_1.webp',
    color: 'Oxford Navy',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    franchiseId: 'kc',
    role: ['Mom'],
    isNew: true
  },
  {
    id: '2',
    name: 'Game Day Basketball Hoodie',
    price: '45.00',
    category: 'Basketball',
    model: 'hoodie',
    image: '/mockups/basketball_1.webp',
    color: 'Deep Heather',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    franchiseId: 'mia_nba',
    role: ['Dad', 'Super Fan']
  },
  {
    id: '3',
    name: 'Seattle Baseball Spirit Jersey',
    price: '32.00',
    category: 'Baseball',
    model: 't-shirt',
    image: '/mockups/baseball_1.webp',
    color: 'Navy/White',
    etsyUrl: 'https://etsy.com',
    isGameday: true,
    franchiseId: 'sea',
    city: 'Seattle',
    role: ['Mom', 'Sis'],
    isNew: true
  },
  {
    id: '4',
    name: 'Kansas Soccer Gameday Suit',
    price: '42.00',
    category: 'Soccer',
    model: 't-shirt',
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
    model: 'sweatshirt',
    image: '/mockups/hockey_1.webp',
    color: 'Black',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'bruins',
    role: ['Dad'],
    isNew: true
  },
  {
    id: '6',
    name: 'Anaheim Mighty Ducks Retro Hoodie',
    price: '52.00',
    category: 'Hockey',
    model: 'hoodie',
    image: '/mockups/hockey_1.webp',
    color: 'Eggplant',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'ducks',
    role: ['Super Fan'],
    isNew: true
  },
  {
    id: '7',
    name: 'Kansas City Dynasty Era Tee',
    price: '28.00',
    category: 'Football',
    model: 't-shirt',
    image: '/mockups/football_1.webp',
    color: 'Red',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'chiefs',
    role: ['Mom', 'Dad'],
    isNew: true
  },
  {
    id: '8',
    name: 'Philadelphia Philly Spirit Sweatshirt',
    price: '46.00',
    category: 'Football',
    model: 'sweatshirt',
    image: '/mockups/football_1.webp',
    color: 'Midnight Green',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'eagles',
    role: ['Super Fan']
  },
  {
    id: '9',
    name: 'Inter Miami Modern Soccer Tee',
    price: '30.00',
    category: 'Soccer',
    model: 't-shirt',
    image: '/mockups/soccer_1.webp',
    color: 'Pink',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'miami',
    role: ['Youth', 'Mom']
  },
  {
    id: '10',
    name: 'Chicago Bulls Nostalgia Track Hoodie',
    price: '54.00',
    category: 'Basketball',
    model: 'hoodie',
    image: '/mockups/basketball_1.webp',
    color: 'Red/Black',
    etsyUrl: 'https://popretroanddreams.etsy.com',
    isGameday: true,
    franchiseId: 'bulls',
    role: ['Super Fan']
  },
];
