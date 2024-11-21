export interface Game {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  description?: string;
  tags: string[];
  discount?: string;
}

export const featuredGame: Game = {
  id: "cp2077",
  title: "Cyberpunk 2077",
  description: "Experience the future in this open-world action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour and body modification.",
  imageUrl: "https://images.unsplash.com/photo-1605899435973-ca2d1a8c6a2f?auto=format&fit=crop&q=80&w=2940",
  price: "59.99",
  discount: "20",
  tags: ["RPG", "Action", "Open World"]
};

export const games: Game[] = [
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    price: "49.99",
    imageUrl: "https://images.unsplash.com/photo-1621364525332-f9c381f3bfe8?auto=format&fit=crop&q=80&w=2940",
    tags: ["Action", "Adventure", "Open World"],
    discount: "15"
  },
  {
    id: "elden",
    title: "Elden Ring",
    price: "59.99",
    imageUrl: "https://images.unsplash.com/photo-1616872432040-5dab44a24495?auto=format&fit=crop&q=80&w=2940",
    tags: ["RPG", "Action", "Fantasy"],
  },
  {
    id: "gow",
    title: "God of War",
    price: "39.99",
    imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2940",
    tags: ["Action", "Adventure", "Story Rich"],
    discount: "30"
  },
  {
    id: "tlou",
    title: "The Last of Us",
    price: "49.99",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2940",
    tags: ["Action", "Survival", "Story Rich"],
  }
];