import { useQuery } from '@apollo/client';
import { Accordion } from 'react-bootstrap';
import AccordionContents from '../component/AccordionContent';
import { GET_ACCORDION_DATA } from '../query/placementAllQuery';


function FlushExample() {

    const { loading, error, data } = useQuery(GET_ACCORDION_DATA)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data)
    return (
        <Accordion alwaysOpen flush>
            {data.accordionQuery[0].accordionData.map((data: any, index: number) => (
                <AccordionContents key={index} index={index} data={data}/>
            ))}
        </Accordion>
    );
}

export default FlushExample;