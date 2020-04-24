import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.scss';

const App = ({ myList, trends, originals }) => {

  return (
    <>
      <Header />
      <Search isHome />
      {myList !== undefined && myList.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
              myList !== undefined &&
                            myList.map((video) => {
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              return (<CarouselItem key={video.id} {...video} isList={true} />);
                            })
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            trends !== undefined &&
                        trends.map((video) => {
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          return (<CarouselItem key={video.id} {...video} />);
                        })
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {
            originals !== undefined &&
                        originals.map((video) => {
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          return (<CarouselItem key={video.id} {...video} />);
                        })
          }
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default App;
export default connect(mapStateToProps, null)(App);
