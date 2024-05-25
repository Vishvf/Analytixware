import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { Home, About, Faq, Error, Features, Project, Service, Contact } from './components';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Service from './Service';
import Feature from './Feature';
import Error from './404';

function MyRoutes()
{
    return(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Project' element={<Project/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Feature' element={<Feature/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </BrowserRouter>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyRoutes />);