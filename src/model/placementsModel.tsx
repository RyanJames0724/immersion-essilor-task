export interface IDataPlacementOne {
    id: number
    background: string
    logo: string
    firstText: string
    buttonText: string
    sideText: string
}

export interface IDataPlacementTwo {
    id: number
    firstImageSrc: string
    secondImageSrc: string
    thirdImageSrc: string
    firstText: string
    secondText: string
}

interface IDataImages {
    imageSrc: string
    imageBackgroundSrc: string
    textDefaultShow: string
    textHoverShow: string
}

export interface IDataPlacementThree {
    id: number
    images: [IDataImages]
}

interface ICard {
    id: number
    cardHeader: string
    cardContent: string
}

export interface IDataPlacementFour {
    id: number
    firstText: string
    card: [ICard]
}

interface IDataImages {
    imageSrc: string
    imageTitle: string
    imageDescTitle: string
    imageDesc: string
}

export interface IDataPlacementFive {
    id: number
    images: [IDataImages]
    firstText: string
}

interface IDataImages {
    imageSrc: string
    imageTitle: string
    imageDesc: string
}

export interface IDataPlacementSix {
    id: number
    images: [IDataImages]
}

interface IDataImages {
    imageSrc: string
    imageTitle: string
    imageDesc: string
}

export interface IDataPlacementSeven {
    id: number
    images: [IDataImages]
    firstText: string
}

export interface IDataPlacementEight {
    id: number
    firstText: string
}

interface IPlacementNineText {
    firstText: string
}

export interface IDataPlacementNine {
    id: number
    placementText: [IPlacementNineText]
}

export interface IDataPlacementTen {
    id: number
    firstText: string
}