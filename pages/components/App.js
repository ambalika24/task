import React from 'react';
import Home from './Home';
import PhotoGrid from './PhotoGrid';
import Footer from './Footer';

function App(){
    return (
        <div>
        <Home/>
        <PhotoGrid/>
        <div  style={{position:"fixed", bottom:"0",width:"100%"}}>
            <Footer/>
        </div>
        </div>
    )
}

export default App;