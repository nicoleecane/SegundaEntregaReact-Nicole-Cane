const products = [
  { id: "1", name: "Volume 1", img: "img/OIP.jpeg",  category: "Anime",  stock: 6 },
  { id: "2", name: "Volume 2", img: "img/OIP(1).jpeg",  category: "Anime",  stock: 14 },
  { id: "3", name: "Volume 3", img: "img/OIP(2).jpeg",  category: "Anime",  stock: 8 },
  { id: "4", name: "Volume 4", img: "img/OIP(3).jpeg",  category: "Anime",  stock: 10 },
  { id: "5", name: "Volume 5", img: "img/OIP(4).jpeg",  category: "Anime", stock: 10  },
  { id: "6", name: "Volume 6", img: "img/OIP(5).jpeg",  category: "Anime", stock: 20  },
  { id: "7", name: "Volume 7", img: "img/OIP(6).jpeg",  category: "Anime", stock: 5 },
];



export const getProducts = () => {
  return new Promise((resolve, reject) => {
    
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject("No volume available");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    
    if (products.length > 0) {
      const product = products.find( p => p.id === id);
      
      setTimeout(() => {
        if(!product) {
          reject(`We cannot find this volume by id ${id}`)
        }
        resolve(product);
      }, 2000);
    } else {
      reject("No volume available");
    }
  });
};