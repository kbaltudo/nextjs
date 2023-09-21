import React from "react";
import { GetAccordionData } from "./GetAccordionData";
import { Key } from "react";
import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = ({ content, provider, defaultActiveKey, alwaysOpen }) => {
    const accordionData = GetAccordionData(content, provider);
    return(
        <section className="mt-3 mb-3">
            <Accordion defaultActiveKey={defaultActiveKey} alwaysOpen={alwaysOpen}>
            {accordionData.map((accordion: { id: any;  title: any; description: any;  }, index: Key) => (
                <Accordion.Item key={index} eventKey={accordion.id}>
                    <Accordion.Header>{accordion.title}</Accordion.Header>
                    <Accordion.Body>
                        {accordion.description}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        </section>
    )
}

export default AccordionComponent;

AccordionComponent.defaultProps = {
    provider: "",
    defaultActiveKey: "",
    alwaysOpen: false
};

