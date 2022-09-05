
import Header from './components/Header';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Post from "./pages/Post";
// import NotFound from "./pages/NotFound";
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Post = React.lazy(() => import("./pages/Post"));
const NotFound = React.lazy(() => import("./pages/NotFound"));


function App() {
  
  return (
    <>
    <Router>
    <Header />
    
      <Routes>
        <Route path='/' element={<React.Suspense fallback={<p>Loading..</p>}><Home /> </React.Suspense> } />
        <Route path='/post/:id' element={<React.Suspense fallback={<p>Loading..</p>}><Post /></React.Suspense>} />
        <Route path='/about' element={<React.Suspense fallback={<p>Loading..</p>}><About /></React.Suspense>} />
        <Route path='/contact' element={<React.Suspense fallback={<p>Loading..</p>}><Contact /></React.Suspense>} />
        <Route path='/notfound' element={<React.Suspense fallback={<p>Loading..</p>}><NotFound /></React.Suspense>} />
        <Route path='*' element={<Navigate to={"/notfound"} />} />
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
