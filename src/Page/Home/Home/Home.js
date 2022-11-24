import React from 'react';
import Advertised from '../Advertised/Advertised';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Delivere from '../Delivere/Delivere';

const Home = () => {
     return (
          <div>
               <Banner> </Banner>
               <Categories> </Categories>
               <Advertised> </Advertised>
               <Delivere> </Delivere>
          </div>
     );
};

export default Home;