import React from 'react'
import requests from './requests'
import '../CSS/Navigation.css'

export const Navigation = ({setSelectedOption}) => {
    return (
        <div className='nav'>
        <h3 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h3>
        <h3 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h3> 
        <h3 onClick={() => setSelectedOption(requests.fetchScifi)}>Sci-fi</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h3>   
        <h3 onClick={() => setSelectedOption(requests.fetchTV)}>Movie</h3>   
        </div>
    )
}
