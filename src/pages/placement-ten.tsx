import React from 'react'
import '../scss/style.scss'

const Placement10: React.FC = () => {
    return (
        <div className='one-column-layout-row main-placement-10'>
            <div>
                <div className='back-to-top back-to-top-products back-to-top-drivewear'>
                    <div className="back-to-top-wrapper">
                        <div className="back-to-top-action">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="back-to-top-arrow-up"><circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line></svg>
                            <p className="back-to-top-label">Back to Top</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement10