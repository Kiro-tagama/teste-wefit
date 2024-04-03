import { useState } from 'react';
import { CardsHome } from '../components/CardsHome';
import { PropsProduts, useMyContext } from '../context/context';
import { AreaCards, AreaInput, Input } from '../styles/stylesHome';
import { SearchIcon } from '../assets/search';

export function Home() {
  const { list } = useMyContext();
  const [query,setQuery] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredList = query.length > 0 
    ? list.filter((item: PropsProduts) => item.title.toLowerCase().includes(query.toLowerCase()))
    : list;

  return (
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
        {filteredList.map((item: PropsProduts) => (
          <CardsHome key={item.id} data={item} />
        ))}
      </AreaCards>
    </>
  );
}
