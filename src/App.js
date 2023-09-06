import './App.css';
// import { Link, Route, Routes } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
