import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { addEmphasize } from '../logic/edit-text';
import style from '../scss/style.module.scss'


const AccordionContents = ({ data, index }: any) => {
    return (<Accordion.Item key={index} eventKey={String(index)}>
        <Accordion.Header>
            <p className={style.accordion_paragraph}>
                {addEmphasize(data.accordionHeader)}
            </p>
        </Accordion.Header>
        <Accordion.Body>
            <p className={style.accordion_paragraph}>{data.accordionBody}</p>
        </Accordion.Body>
    </Accordion.Item>
    )
}

export default AccordionContents