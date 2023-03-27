import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/hero-banner.css'
import '../assets/css/style.css'
import Placement3 from "./third-placement";
import Placement4 from "./fourth-placement";
import bannerImage from '../assets/images/banner-background.webp'
import bannerContentLogo from '../assets/images/banner-content-logo.webp'
import animatedLogo from '../assets/images/animated-details-logo.webp'
import placement2image1 from '../assets/images/placement-2-image-1.webp'
import glasses from '../assets/images/glasses.gif'
import Placement5 from "./fifth-placements";
import Placement6 from './sixth-placement';
import Placement7 from './seventh-placement';
import Placement8 from './eight-placement';
import Placement9 from './nine-placement';
import Placement10 from './ten-placement';
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

const App: React.FC = () => {
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
            <div className='one-column-layout-row main-placement-2'>
                <div>
                    <div className='animated-details-light-main-white1 animated-details-light-main'>
                        <div className='animated-details-main'>
                            <div className='animated-details-1'>
                                <div className='animated-details-logo'>
                                    <div className='logo-wrapper'>
                                        <div className='wrapper-image'>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                        </div>
                                        <img src={animatedLogo} alt="second placement logo" className='logo-style' loading="lazy" />
                                    </div>
                                </div>
                                <div className='animated-details-title animated-details-light-main-white1'>
                                    <h4 className='h4'>THE ONLY POLARIZED LENS FOR DRIVING WITH COLOR AND LIGHT ADAPTATION</h4>
                                </div>
                                <div className='animated-details-long-text animated-details-light-main-white1'>
                                    <div>
                                        <p>
                                            Combining the benefits of photochromic and fixed polarization,
                                            <em>Transitions</em>
                                            <sup>®</sup>
                                            <em> Drivewear</em>
                                            <sup>®</sup>
                                            provide you with the optimal vision experience and color contrast while you are driving, reacting to both UV and visible light. The lens color and the level of darkness adapt to light conditions while driving.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='animated-details-2'>
                                <div className='animated-details-row1'>
                                    <div className='first-image-wrapper'>
                                        <div className='wrapper-image'>
                                            <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" className='first-image-wrapper' loading="lazy" />
                                        </div>
                                        <img src={placement2image1} alt="Widget image/logo" className='first-image-style' loading="lazy" />
                                    </div>
                                </div>
                                <div className='animated-details-row2'>
                                    <div className='animated-details-gear'></div>
                                    <div className='animated-details-glasses'>
                                        <div className='animated-details-frame animated-details-light-main-white1'>
                                            <div className='glass-image-wrapper'>
                                                <div className='wrapper-image'>
                                                    <img alt="" aria-hidden="true" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTI4IiBoZWlnaHQ9IjI2NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" loading="lazy" />
                                                </div>
                                                <img src={glasses} alt="glasses image" className='glass-image' loading="lazy" />
                                            </div>
                                        </div>
                                        <div className='animated-details-lens'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Placement3 />
            <Placement4 />
            <Placement5 />
            <Placement6 />
            <Placement7 />
            <Placement8 />
            <Placement9 />
            <Placement10 />
        </div >
    )
}

export default App

