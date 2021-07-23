import React from 'react';
import Home from './Home';
import PhotoGrid from './PhotoGrid';
import Footer from './Footer';


function App(){
    const arr = [{
        title:"Why are Animals Slaughtered?",
        image:"../../public/images/image\ \(9\).webp"

    },
    {
        title:"Which type of skin are you having?",
        image:"../public/images/image\ \(3\).webp"

    },
    {
        title:">Honest Problems with New Agriculture Reform Bill",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"How to become Savage?",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"
 
    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"

    },
    {
        title:"Why are Animals Slaughtered?",
        image:"../public/images/image\ \(9\).webp"

    }
]
    return (
        <div>
        <Home/>
        
        <PhotoGrid array={arr}/>
        <div  style={{position:"fixed", bottom:"0",width:"100%"}}>
            <Footer/>
        </div>
        </div>
    )
}

export default App;