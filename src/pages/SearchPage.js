import React from 'react'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
import Response from "../response"
import {Link} from "react-router-dom";
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function SearchPage() {

    //https://developers.google.com/custom-search/v1/using_rest
    //https://cse.google.com/cse/setup/basic?cx=ccb5cdcb3bbd640fe
    //const data=Response;

    const [{term='tesla'},dispatch]=useStateValue();
    const {data}=useGoogleSearch(term);

    console.log(data);

    return (
        <div className="searchPage">

            <div className="searchPage__header">
                <Link to="/">
                    <img  className="searchPage__Logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google logo"/>
                </Link>
                <div className="searchPage__headerBody">
                    <Search hideButtons />
                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon id="lcn" />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon id="lcn" />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon id="lcn" />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon id="lcn" />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon id="lcn" />
                                <Link to='/maps'>Maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon id="lcn" />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                        <div className='searchPage__option'>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className='searchPage__option'>    
                            <Link to="/tools">Tools</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
                {term && (
                    <div className="searchPage__results">
                        <p className="searchPage__resultCount">
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                        </p>

                        {data?.items.map(item=>(
                            <div className="searchPage__result">
                                 <a href={item.link} className='links'>

                                     {item.pagemap?.cse_image?.length > 0 && item.pagemap.cse_image[0]?.src && (
                                      <img className="searchPage__resultImage"
                                       src={ item.pagemap?.cse_image[0]?.src} alt=""/>  
                                     )}

                                    {item.displayLink}
                                </a>
                                <a className="searchPage__resultTitle" href={item.link}>
                                    <h2>{item.title}</h2>
                                </a>
                                <p className="searchPage_snippet">
                                    {item.snippet}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

        </div>
    )
}

export default SearchPage
