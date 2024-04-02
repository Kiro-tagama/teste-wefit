import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';

// Definindo a tipagem do contexto com a interface
const Context = createContext<any | undefined>(undefined);

export interface PropsProduts {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [list, setList] = useState<PropsProduts[]>([
    {
      id: 1,
      title: 'Viúva Negra',
      price: 9.99,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png',
    },
    {
      id: 2,
      title: 'Shang-chi',
      price: 30.99,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png',
    },
    {
      id: 3,
      title: 'Homem Aranha',
      price: 29.9,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/spider-man.png',
    },
    {
      id: 5,
      title: 'Morbius',
      price: 1.5,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png',
    },
    {
      id: 6,
      title: 'Batman',
      price: 21.9,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/the-batman.png',
    },
    {
      id: 4,
      title: 'Eternos',
      price: 17.9,
      image: 'https://wefit-react-web-test.s3.amazonaws.com/eternals.png',
    },
  ]);
  const [inCart, setInCart] = useState();

  return (
    <Context.Provider
      value={{
        list,
        inCart,
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
