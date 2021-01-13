import React from 'react'
import requests from './requests'
import '../CSS/Navigation.css'

export const Navigation = ({setSelectedOption}) => {
    return (
        <div className='nav'>
        <h3 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Action</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Comedy</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Horror</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Romance</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Mystery</h3> 
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Sci-fi</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Western</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Animation</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Movie</h3>   
        </div>
    )
}
