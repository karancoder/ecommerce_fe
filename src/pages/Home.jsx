import React from 'react'
import Announcements from '../components/Announcements'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Announcements />
            <Slider />
        </div>
    )
}

export default Home