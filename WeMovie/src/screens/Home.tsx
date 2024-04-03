import { useEffect, useState } from 'react';
import { CardsHome } from '../components/CardsHome';
import { PropsProduts, useMyContext } from '../context/context';
import { AreaCards, AreaInput, Input } from '../styles/stylesHome';
import { SearchIcon } from '../assets/icons/search';
import { Loader } from '../assets/Loader';
import { Button, Card, Divider } from '../styles/styles';
import SvgWoman from '../assets/svgs/SvgWoman';
import { useLocation, useNavigate } from 'react-router-dom';

export function Home() {
  const { list, activeLoader, setActiveLoader, getProducts } = useMyContext();
  const nav = useNavigate()
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('search-query');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const filteredList = searchQuery != null 
    ? list?.filter((item: PropsProduts) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : list;

  useEffect(()=>{
    setTimeout(()=>setActiveLoader(false),4000)
  },[])

  const contentHome=(
    <>
      <AreaInput $focused={isFocused}>
        <Input 
          placeholder='Buscar filme pelo nome'
          value={searchQuery != null ? searchQuery:""}
          onChange={txt => {
            nav(`/search?search-query=${encodeURIComponent(txt.target.value)}`)
            // setQuery(txt.target.value)
          }}
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
  <Card style={{gap:24,height:"100%"}}>
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