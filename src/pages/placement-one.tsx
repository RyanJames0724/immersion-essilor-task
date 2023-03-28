import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/placement-one.css'
import '../assets/css/style.css'
import bannerImage from '../assets/images/banner-background.webp'
import bannerContentLogo from '../assets/images/banner-content-logo.webp'
import { gql, useQuery } from '@apollo/client';

const GET_ALL_PLACEMENT_DATA = gql`
    query GetData{
        placementData {
            id
            placementBackgroundImage
            placementTitle
            textAfterBreak
            placementButtons {
                id
                buttonText
                textAfterSup
            }
            placementParagraph
        }
    }
`

const PlacementOne: React.FC = () => {
    const { loading, error, data } = useQuery(GET_ALL_PLACEMENT_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.placementData)

    return (
        <div className='one-column-layout'>
            <div className='one-column-layout-row main-placement-1'>
                <div>
                    <div className='generic-row-banner'>
                        <div className='banner-wrapper banner-dark'>
                            <div className='banner-background background'>
                                <div className='background-wrapper'>
                                    <div className='image-holder'>
                                        <img src={bannerImage} alt="front background" loading="lazy" className='hero-banner-background' />
                                    </div>
                                </div>
                            </div>
                            <div className='side-colors banner-gradient'>
                                <div className="gradient1"></div>
                                <div className="gradient2"></div>
                                <div className="gradient3"></div>
                                <div className="gradient4"></div>
                                <div className="gradient5"></div>
                                <div className="gradient6"></div>
                                <div className="gradient7"></div>
                                <div className="gradient8"></div>
                            </div>
                            <div className='content-left-bottom content-banner-fixed'>
                                <div className='banner-content-logo'>
                                    <img src={bannerContentLogo} alt="content logo" loading="lazy" />
                                </div>
                                <div className='banner-content-space'></div>
                                <h1>{
                                    data.placementData[0].placementTitle}
                                    < br />
                                    {data.placementData[0].textAfterBreak}
                                </h1>
                                <div className='banner-button'>
                                    <button className='square-button square-button-secondary button-invert-secondary'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                                        </svg>
                                        <label className='banner-label' htmlFor="button-text">
                                            {data.placementData[0].placementButtons[0].buttonText}
                                            <sup>® </sup>
                                            {data.placementData[0].placementButtons[0].textAfterSup}
                                        </label>
                                    </button>
                                </div>
                                <div className='long-text'>
                                    <div>
                                        <p>{data.placementData[0].placementParagraph}</p>
                                    </div>
                                </div>
                                <a className='banner-anchor' href="#">
                                    <div className="icon-arrow-bottom icon-arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1px" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlacementOne

