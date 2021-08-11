import './App.css';
import BoardData from './components/BoardData';
import SchoolBoard from './components/SchoolBoard';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import CardBoard from './components/CardBoard';
import CardData from './components/CardData';



function App() {

  const data = BoardData.map((board) => (
    <SchoolBoard
    id = {board.id}
    category = {board.category}
    post = {board.post} />
  ))
  const data2 = CardData.map((card) => (
    <CardBoard
    id = {card.id}
    imgsrc = {card.imgsrc}
    name = {card.name}
    phone = {card.phone}
    email = {card.email} />
  ))
  return (
    <div>
      <Header />
      <hr/>
      <Main />
      <hr/>
      {data2}
      <hr/>
      {data}
      <Footer />
    </div>
  )
}

export default App;
