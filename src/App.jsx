import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import data from '../data';

function App() {
  const cards = data.map((item, index) => <Card key={index} {...item} />);
  return (
    <>
      <Header />
      <main className="cards-list">{cards}</main>
    </>
  );
}

export default App;
