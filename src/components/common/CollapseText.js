import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Col } from 'reactstrap';

const CollapseText = ( { props } ) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    const shortText = props.content.substring(0,20)
    const longText = props.content


    const getMoreText = () => {
        if (isOpen) {
            return (
                <div>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
                        </CardBody>
                    </Card>
                </Collapse>
                </div> 
            );      
        }
        else {
            return null;
        }        
    }

    return ( 
        <div>
            <a onClick={toggle}>...read more</a>
            {getMoreText}
        </div>
    )
}

export default CollapseText;