import { gql } from "@apollo/client";

export const GET_PLACEMENT_ONE_DATA = gql`
query GetData{
    placementOneDataQuery {
        id
        bannerBackground
        bannerLogo
        firstText
        placementButtons {
          id
          buttonText
        }
        sideText
    }
}
`

export const GET_PLACEMENT_TWO_DATA = gql`
query GetData{
    placementTwoDataQuery {
        id
        images {
            id
            imageSrc
        }
        firstText
        secondText
    }
}
`

export const GET_PLACEMENT_THREE_DATA = gql`
query GetData{
    placementThreeDataQuery {
        id
        images {
          id
          imageSrc
          imageBackgroundSrc
          textDefaultShow
          textHoverShow
        }
    }
}
`

export const GET_PLACEMENT_FOUR_DATA = gql`
query GetData{
    placementFourDataQuery {
        id
        firstText
        card {
          id
          cardHeader
          cardContent
        }
    }
}
`

export const GET_PLACEMENT_FIVE_DATA = gql`
query GetData{
    placementFiveDataQuery {
        id
        images {
            id
            imageSrc
            imageTitle
            imageDescTitle
            imageDesc
        }
        firstText
    }
}
`

export const GET_PLACEMENT_SIX_DATA = gql`
query GetData{
    placementSixDataQuery {
        id
        images {
            id
            imageSrc
            imageTitle
            imageDesc
        }
    }
}
`

export const GET_PLACEMENT_SEVEN_DATA = gql`
query GetData{
    placementSevenDataQuery {
        id
        images {
            id
            imageSrc
            imageTitle
            imageDesc
        }
        firstText
    }
}
`

export const GET_PLACEMENT_EIGHT_DATA = gql`
query GetData{
    placementEightDataQuery {
        id
        firstText
    }
}
`

export const GET_PLACEMENT_NINE_DATA = gql`
query GetData{
    placementNineDataQuery {
        id
        placementText {
            firstText
        }
    }
}
`

export const GET_PLACEMENT_TEN_DATA = gql`
query GetData{
    placementTenDataQuery {
        id
        firstText
    }
}
`

export const GET_ACCORDION_DATA = gql`
query GetData {
    accordionQuery {
        id
        accordionData {
            id
            accordionHeader
            accordionBody
        }
    }
}
`