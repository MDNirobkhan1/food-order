import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState("All");
    console.log(category)
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDownload/>
        </div>
    );
};

export default Home;