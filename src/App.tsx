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
import style from './scss/style.module.scss'
import { useQuery } from "@apollo/client";
import {
    GET_PLACEMENT_ONE_DATA,
    GET_PLACEMENT_TWO_DATA,
    GET_PLACEMENT_THREE_DATA,
    GET_PLACEMENT_FOUR_DATA,
    GET_PLACEMENT_FIVE_DATA,
    GET_PLACEMENT_SIX_DATA,
    GET_PLACEMENT_SEVEN_DATA,
    GET_PLACEMENT_EIGHT_DATA,
    GET_PLACEMENT_NINE_DATA,
    GET_PLACEMENT_TEN_DATA
} from "./query/placementAllQuery";


const App: React.FC = () => {
    const placementOneQuery = useQuery(GET_PLACEMENT_ONE_DATA);
    const placementTwoQuery = useQuery(GET_PLACEMENT_TWO_DATA);
    const placementThreeQuery = useQuery(GET_PLACEMENT_THREE_DATA);
    const placementFourQuery = useQuery(GET_PLACEMENT_FOUR_DATA);
    const placementFiveQuery = useQuery(GET_PLACEMENT_FIVE_DATA);
    const placementSixQuery = useQuery(GET_PLACEMENT_SIX_DATA);
    const placementSevenQuery = useQuery(GET_PLACEMENT_SEVEN_DATA);
    const placementEightQuery = useQuery(GET_PLACEMENT_EIGHT_DATA);
    const placementNineQuery = useQuery(GET_PLACEMENT_NINE_DATA);
    const placementTenQuery = useQuery(GET_PLACEMENT_TEN_DATA);

    let placement = null;

    if (
        placementOneQuery.loading
        || placementTwoQuery.loading
        || placementThreeQuery.loading
        || placementFourQuery.loading
        || placementFiveQuery.loading
        || placementSixQuery.loading
        || placementSevenQuery.loading
        || placementEightQuery.loading
        || placementNineQuery.loading
        || placementTenQuery.loading
    ) {
        // Handle the loading state
        placement = <div>Loading...</div>;
    } else if (
        placementOneQuery.error
        || placementTwoQuery.error
        || placementThreeQuery.error
        || placementFourQuery.error
        || placementFiveQuery.error
        || placementSixQuery.error
        || placementSevenQuery.error
        || placementEightQuery.error
        || placementNineQuery.error
        || placementTenQuery.error
    ) {
        // Handle the error state
        placement = <div>
            Error: {
                placementOneQuery.error?.message
                || placementTwoQuery.error?.message
                || placementThreeQuery.error?.message
                || placementFourQuery.error?.message
                || placementFiveQuery.error?.message
                || placementSixQuery.error?.message
                || placementSevenQuery.error?.message
                || placementEightQuery.error?.message
                || placementNineQuery.error?.message
                || placementTenQuery.error?.message
            }
        </div>;
    } else {
        // Handle the data state for each placement
        const placementOneData = placementOneQuery.data?.placementOneDataQuery[0];
        const placementTwoData = placementTwoQuery.data?.placementTwoDataQuery[0];
        const placementThreeData = placementThreeQuery.data?.placementThreeDataQuery[0];
        const placementFourData = placementFourQuery.data?.placementFourDataQuery[0];
        const placementFiveData = placementFiveQuery.data?.placementFiveDataQuery[0];
        const placementSixData = placementSixQuery.data?.placementSixDataQuery[0];
        const placementSevenData = placementSevenQuery.data?.placementSevenDataQuery[0];
        const placementEightData = placementEightQuery.data?.placementEightDataQuery[0];
        const placementNineData = placementNineQuery.data?.placementNineDataQuery[0];
        const placementTenData = placementTenQuery.data?.placementTenDataQuery[0];

        placement = (
            <>
                <PlacementOne
                    id={placementOneData.id}
                    background={placementOneData.bannerBackground}
                    logo={placementOneData.bannerLogo}
                    firstText={placementOneData.firstText}
                    buttonText={placementOneData.placementButtons.buttonText}
                    sideText={placementOneData.sideText}
                />
                <PlacementTwo
                    id={placementTwoData.id}
                    firstImageSrc={placementTwoData.images[0].imageSrc}
                    secondImageSrc={placementTwoData.images[1].imageSrc}
                    thirdImageSrc={placementTwoData.images[2].imageSrc}
                    firstText={placementTwoData.firstText}
                    secondText={placementTwoData.secondText}
                />
                <PlacementThree
                    id={placementThreeData.id}
                    images={placementThreeData.images}
                />
                <PlacementFour
                    id={placementFourData.id}
                    firstText={placementFourData.firstText}
                    card={placementFourData.card}
                />
                <PlacementFive
                    id={placementFiveData.id}
                    images={placementFiveData.images}
                    firstText={placementFiveData.firstText}
                />
                <PlacementSix
                    id={placementSixData.id}
                    images={placementSixData.images}

                />
                <PlacementSeven
                    id={placementSevenData.id}
                    images={placementSevenData.images}
                    firstText={placementSevenData.firstText}
                />
                <PlacementEight
                    id={placementEightData.id}
                    firstText={placementEightData.firstText}
                />
                <PlacementNine
                    id={placementNineData.id}
                    placementText={placementNineData.placementText}
                />
                <PlacementTen
                    id={placementTenData.id}
                    firstText={placementTenData.firstText}
                />
            </>
        );
    }

    return <div className={style.one_column_layout}>{placement}</div>;
};

export default App;
