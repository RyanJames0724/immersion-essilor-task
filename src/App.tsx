import React from "react";
import PlacementThree from "./pages/placement-three";
import PlacementFour from "./pages/placement-four";
import PlacementTwo from "./pages/placement-two";
import PlacementOne from "./pages/placement-one";
import PlacementFive from "./pages/placement-five";
import PlacementSix from './pages/placement-six';
import PlacementSeven from './pages/placement-seven';
import PlacementEight from './pages/placement-eight';
import PlacementNine from './pages/placement-nine';
import PlacementTen from './pages/placement-ten';

const App = () => {
    return (
        <div className='one-column-layout'>
            <PlacementOne />
            <PlacementTwo />
            <PlacementThree />
            <PlacementFour />
            <PlacementFive />
            <PlacementSix />
            <PlacementSeven />
            <PlacementEight />
            <PlacementNine />
            <PlacementTen />
        </div>
    )
}

export default App