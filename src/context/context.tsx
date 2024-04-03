import axios from 'axios';
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

export interface PropsProduts {
  id: string|number;
  title: string;
  price: number;
  image: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

interface PropsContext{
  list: PropsProduts[] | null; 
  inCart: { [key: string]: number; }; 
  activeLoader: boolean; 
  setActiveLoader: Dispatch<SetStateAction<boolean>>
  getProducts: () => void; 
  addToCart: (id: number) => void; 
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void
}

const Context = createContext<PropsContext | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<PropsProduts[]>([
    {
    "id": "1",
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
    },
    {
    "id": "2",
    "title": "Shang-chi",
    "price": 30.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
    },
    {
    "id": "3",
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
    },
    {
    "id": "5",
    "title": "Morbius",
    "price": 1.5,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png"
    },
    {
    "id": "6",
    "title": "Batman",
    "price": 21.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png"
    },
    {
    "id": "4",
    "title": "Eternos",
    "price": 17.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/eternals.png"
    }
    ]);
  const [inCart, setInCart] = useState<{ [key: string]: number }>({});
  const [activeLoader, setActiveLoader] = useState<boolean>(false);

  function addToCart (id:number){
    setInCart((prevCarrinho) => ({
      ...prevCarrinho,
      [id]: (prevCarrinho[id] || 0) + 1,
    }));
  }

  const removeItem = (id: string) => {
    setInCart(inCart.filter((item: { id: string; }) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setInCart(inCart.map((item: { id: string; }) => {
      if (item.id === id) {
        return { ...item, quantity }; // Atualiza a quantidade do item
      }
      return item; // Retorna o item sem alterações
    }));
  };

  function getProducts() {
    axios.get('http://localhost:3000/products')
    .then(res=>{
      setList(res.data)
    })
  }

  return (
    <Context.Provider
      value={{
        list,
        inCart,
        activeLoader,
        setActiveLoader,
        getProducts,
        addToCart,
        removeItem,
        updateQuantity
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useMyContext() {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useMyContext must be used within a ContextProvider');
  }

  return context;
}
