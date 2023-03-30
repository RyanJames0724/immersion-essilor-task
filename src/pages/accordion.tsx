import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import style from '../scss/style.module.scss'

function FlushExample() {
    return (
        <Accordion alwaysOpen flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header><p className={style.accordion_paragraph}>Can <em>Transitions Drivewear</em> be used at night?</p></Accordion.Header>
                <Accordion.Body>
                    <p className={style.accordion_paragraph}>It is not recommended to use <em>Transitions Drivewear</em> lenses at night. <em>Drivewear </em>lenses are optimized for day light situation, and since <em>Transitions Drivewear</em> is always tinted, (min category 2, max category 3), it can be too dark to wear after dusk. Many Vision &amp; Highway Safety experts believe that NO tint should ever be used at night.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><p className={style.accordion_paragraph}>How dark do <em>Transitions Drivewear</em> lenses get?</p></Accordion.Header>
                <Accordion.Body>
                    <p className={style.accordion_paragraph}>In very bright light / outside conditions, <em>Transitions Drivewear</em> lenses remove glare and provide maximum filtration of excess light for optimum visual comfort and acuity.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><p className={style.accordion_paragraph}>Can an AR coat be added to<em>Transitions Drivewear</em>?</p></Accordion.Header>
                <Accordion.Body>
                    <p className={style.accordion_paragraph}>Yes, <em>Transitions Drivewear</em> is compatible with most AR coatings. Please check with your coating supplier for further details.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><p className={style.accordion_paragraph}>Is <em>Transitions Drivewear</em> available in finished single vision?</p></Accordion.Header>
                <Accordion.Body>
                    <p className={style.accordion_paragraph}>Yes. Plano <em>Transitions Drivewear</em> lenses are available only in finished single vision. This is because <em>Transitions Drivewear</em> is a polarized lens and therefore must be on the 180° axis line at all times. It is available in multiple base curves in semi-finished single vision to match the Rx needs of the patient.</p>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><p className={style.accordion_paragraph}>Are <em>Transitions Drivewear</em> lenses polarized only when exposed to sunlight?</p></Accordion.Header>
                <Accordion.Body>
                    <p className={style.accordion_paragraph}><em>Transitions Drivewear</em> are polarized at all times, and they also darken and change color according to sunlight conditions.<br /><em>Transitions Drivewear</em> lenses are the only polarized Rx lenses that darken and change color behind the windshield of a car.</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FlushExample;