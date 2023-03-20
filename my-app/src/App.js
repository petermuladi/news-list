import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import Head from './Component/Head/head';
import Wrapper from './Component/Wrapper';
import Post from './Component/Post/Post';
import NotFound from './Component/NotFound/NotFound';

//App the main component....
export default function App() {
    return (
        <Router>
            <Head />
            <Wrapper>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='post/:id' element={<Post />} />
                    {/*Page not Found..*/}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Wrapper>
        </Router>
    )
}
