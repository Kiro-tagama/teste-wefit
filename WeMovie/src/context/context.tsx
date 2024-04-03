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
  id: number;
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
  setInCart: Dispatch<SetStateAction<{ [key: string]: number }>>
  activeLoader: boolean; 
  setActiveLoader: Dispatch<SetStateAction<boolean>>
  getProducts: () => void; 
  addToCart: (id: number) => void; 
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void
}

const Context = createContext<PropsContext | undefined>(undefined);

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<PropsProduts[]>([]);
  const [inCart, setInCart] = useState<{ [key: string]: number }>({});
  const [activeLoader, setActiveLoader] = useState<boolean>(true);

  function addToCart (id:number){
    setInCart((prevCarrinho) => ({
      ...prevCarrinho,
      [id]: (prevCarrinho[id] || 0) + 1,
    }));
  }

  const removeItem = (id: number) => {
    const updatedCart = { ...inCart };
    delete updatedCart[id.toString()];
    setInCart(updatedCart);
  };

  const updateQuantity = (id: number, quantity: number) => {
    setInCart({
      ...inCart,
      [id.toString()]:quantity
    });
  };

  function getProducts() {
    axios.get('http://localhost:3000/products')
    .then(res=>{setList(res.data)})
    .catch(err=>console.log(err))
  }

  return (
    <Context.Provider
      value={{
        list,
        inCart,
        setInCart,
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
