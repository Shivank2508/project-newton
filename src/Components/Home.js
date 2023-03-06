// import React, { useContext } from 'react'
// import { DataContext } from '../ContextFile'
import HomeDash from './HomeDash';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
    // const DataFromLogin = useContext(DataContext);

    return (
        <div>

            <Navbar />
            <Sidebar />
            <HomeDash />
        </div>
    )
}

export default Home