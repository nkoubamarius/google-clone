import React from 'react'
import './Home.css'
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '../components/Search';


function Home() {
    return (
        <div className="home">

            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/about">Store</Link>

                </div>
                <div className="home__headerRight">
                    <Link to="/about">Gmail</Link>
                    <Link to="/about">Images</Link>
                    <AppsIcon/>
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo"/>
                <div className="home__inputContainer">
                    <Search />
                </div> 
            </div>

        </div>
    )
}

export default Home
