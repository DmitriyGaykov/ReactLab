import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets/sass/index.scss';
import getDatas from './assets/scripts/getDatas';
import IVacation from './assets/models/IVacation';
import Page from './components/Page/Page';
import filters from './assets/models/filters';
import IDataContext from './assets/models/IDataContext';
import { showId } from './assets/models/Datas';

export const DATACONTEXT = React.createContext<IDataContext | null>(null);

const App = () => {
  const [cookie, setCookie] = useState<Map<string, string>>();
  const [vacations, setVacs] = useState<IVacation[]>();
  const [DataContext, setDataContext] = useState<IDataContext>({});

  useEffect(() => {
    const cookies = document.cookie.split(';');

    const keys = cookies.filter((el, i) => i % 2 === 0);
    const values = cookies.filter((el, i) => i % 2 !== 0);

    const map = new Map<string, string>();

    for(let i = 0; i < keys.length; i++) {
      map.set(keys.at(i) as string, values.at(i) as string);
    }

    setCookie(map);

    DataContext.cookies = map;

    getDatas<IVacation>("vacations.json").then(data => {
      const datas = data.map(el => {
        el.img = "http://localhost:3000/datas/images/" + el.img;
        return el;
      });

      setVacs(datas);
      DataContext.vacations = datas;
      DataContext.showedVacs = datas.map(el => el.id);
    });
  }, []);

  return (
    <div className="App">
      <DATACONTEXT.Provider value={ DataContext }>
      <BrowserRouter> 
        <Header />

        <Routes>

          <Route index path='/' 
                 element={<Page filters={ filters } vacations={vacations}/>}/>
          <Route index path='/search-vacations' 
                 element={<Page filters={ filters } vacations={vacations}/>}/>
          <Route path='/selected-vacations'
                 element={ <Page /> }/>

        </Routes>
          
      </BrowserRouter>
      </DATACONTEXT.Provider>
    </div>
  );
}

export default App;
