import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddContact from './page/AddContact';
import ContactList from './page/ContactList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<AddContact />}/>
        <Route path='/list' element={<ContactList />}/>
      </Routes>
    </div>
  );
}

export default App;
