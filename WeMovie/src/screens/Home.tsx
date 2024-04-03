import { useEffect, useState } from 'react';
import { CardsHome } from '../components/CardsHome';
import { PropsProduts, useMyContext } from '../context/context';
import { AreaCards, AreaInput, Input } from '../styles/stylesHome';
import { SearchIcon } from '../assets/search';
import { Loader } from '../assets/Loader';
import { Button, Card, Divider } from '../styles/styles';
import SvgWoman from '../assets/SvgWoman';

export function Home() {
  const { list, activeLoader, setActiveLoader, getProducts } = useMyContext();
  const [query,setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const filteredList = query.length > 0 
    ? list?.filter((item: PropsProduts) => item.title.toLowerCase().includes(query.toLowerCase()))
    : list;

  useEffect(()=>{
    setTimeout(()=>setActiveLoader(false),4000)
  },[])

  const contentHome=(
    <>
      <AreaInput $focused={isFocused}>
        <Input 
          placeholder='Buscar filme pelo nome'
          value={query}
          onChange={txt => setQuery(txt.target.value)}
          onFocus={() => setIsFocused(true)}  
          onBlur={() => setIsFocused(false)}
        />
        <SearchIcon color={isFocused? "#2F2E41":"#ccc"}/>
      </AreaInput>
      <br />
      <AreaCards>
        {list?.length==0 ? 
          <Loader/>:
          <>
          {filteredList?.map((item: PropsProduts) => (
            <CardsHome key={item.id} data={item} />
          ))} 
          </>
        }
      </AreaCards>
    </>
  )

  return activeLoader ? <Loader/> : list?.length==0 ? 
  <Card style={{gap:24}}>
    <h2 style={{fontSize:20,fontWeight:700,textAlign:"center"}}>Parece que não há nada por aqui :(</h2>
    <SvgWoman/>
    <Divider style={{marginTop:-26,maxWidth:447}}/>
    <Button onClick={()=>{
      getProducts()
    }} style={{maxWidth:173}}>
      Recarregar página
    </Button>
  </Card> 
  : contentHome;
}
