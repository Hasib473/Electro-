import React from 'react';
import Hero from '../Component/Home.jsx/Hero';
import Feature from '../Component/Home.jsx/Feature';
import Deal from '../Component/Home.jsx/Deal';
import NewsandBlog from '../Component/Home.jsx/NewsandBlog';
import Support from '../Component/Home.jsx/Support';
import Manufacturer from '../Component/Home.jsx/Manufacturer';
import AddSpace from '../Component/Home.jsx/AddSpace';
import TopProduct from '../Component/Home.jsx/TopProduct';

const Home = () => {
    return (
        <div>
            <div>
                <Hero/>
            </div>
            <div>
                <Feature/>
            </div>

            <div>
                <Deal/>
            </div>

            <div>
                <TopProduct/>
            </div>

            <div>
                <NewsandBlog/>
            </div>
              <div>
                <Manufacturer/>
            </div>
            <div>
                <AddSpace/>
            </div>
            <div>
                <Support/>
            </div>

          
        </div>
    );
};

export default Home;