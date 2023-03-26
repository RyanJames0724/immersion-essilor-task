import axios from 'axios'

const data = async () => {
    const result = await axios.get('http://localhost:5000/graphql?query=%7B%0A%20%20placementData%20%7B%0A%20%20%20%20id%0A%20%20%20%20bannerTitle%0A%20%20%20%20bannerParagraph%0A%20%20%20%20detailsTitle%0A%20%20%20%20detailsParagraph%0A%20%20%7D%0A%7D')

    return result.data.data.placementData
}

console.log(data)