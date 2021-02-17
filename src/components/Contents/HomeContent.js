import React from 'react'
import Services from '../Services-component/Services'
import BlankSection from './Blank-content/BlankSection'
import IconContent from './Icon-content/IconContent'
import MovieSection from './Movies-section/MovieSection'
import TheaterSection from './Theaters/TheaterSection.jsx'


const HomeContent = () => {
    return (
        <div className="content-page" >
            <IconContent></IconContent>
            <MovieSection></MovieSection>
            <TheaterSection />
            <Services></Services>
            <BlankSection></BlankSection>
        </div>
    )
}

export default HomeContent