import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = "http://localhost:3000/initialState";

import '../assets/styles/App.scss';

const App = () =>{

    const initialState = useInitialState(API);
    return initialState.length ===  0 ? <h1>Loading...</h1> : (
        <div className="App">
            <Header />
            <Search />
            { initialState.myList !== undefined && initialState.myList.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {
                        initialState.myList !== undefined &&
                        initialState.myList.map(video=>{
                        return ( <CarouselItem key={video.id} {...video} />);
                        })}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                    initialState.trends !== undefined &&
                    initialState.trends.map(video=>{
                       return ( <CarouselItem key={video.id} {...video} />);
                    })}
                </Carousel>
            </Categories>

            <Categories title="Originales de PlatziVideo">
                <Carousel>
                    {
                    initialState.originals !== undefined &&
                    initialState.originals.map(video=>{
                       return ( <CarouselItem key={video.id} {...video} />);
                    })}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    )
};

export default App;