import './App.css';
import {CakeContainer} from './components/CakeContainer';
import { UserContainer } from './components/UserContainer';
import { IceCreamContainer } from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import {Provider} from 'react-redux';
import {store} from './Redux/store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UserContainer />
      <ItemContainer />
      <ItemContainer cake="cake"/>
      <CakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>

  );
}

export default App;
