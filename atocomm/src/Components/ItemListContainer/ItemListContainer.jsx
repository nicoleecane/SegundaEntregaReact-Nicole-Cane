import { useEffect, useState } from "react";
import { getProducts } from "../../AsyncMocks";
import { ItemList } from "../ItemList/ItemList";
/*import { useParams } from "react-router-dom";*/


const products = [
  { id: "1", name: "Volume 1", img: "img/OIP.jpeg",  category: "Anime",  stock: 6 },
  { id: "2", name: "Volume 2", img: "img/OIP(1).jpeg",  category: "Anime",  stock: 14 },
  { id: "3", name: "Volume 3", img: "img/OIP(2).jpeg",  category: "Anime",  stock: 8 },
  { id: "4", name: "Volume 4", img: "img/OIP(3).jpeg",  category: "Anime",  stock: 10 },
  { id: "5", name: "Volume 5", img: "img/OIP(4).jpeg",  category: "Anime", stock: 10  },
  { id: "6", name: "Volume 6", img: "img/OIP(5).jpeg",  category: "Anime", stock: 20  },
  { id: "7", name: "Volume 7", img: "img/OIP(6).jpeg",  category: "Anime", stock: 5 },
];



export const ItemListContainer = () => {

      return<>
      {products.map(product =>
      <div className="border m-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <img src={product.img} alt="" />
            <p className="card-text">{product.category}</p>
            <p className="card-text">Stock: {product.stock}</p>


          </div>
        </div>
      </div>
        )}
      </>


 /* const { category } = useParams();
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((resp) => {
        
        if (category) {
          
          const productsFilter = resp.filter((product) => product.category === category);
            
          
            if(productsFilter.length > 0) {
             
              setProducts(productsFilter);
            } else {
              
              setProducts(resp);
            }

        } else {
          
          
          setProducts(resp);
        }

       
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [category]); 

  return <>{isLoading ? <h2> Cargando productos... </h2> : <ItemList products={products} />}</>;
};*/}