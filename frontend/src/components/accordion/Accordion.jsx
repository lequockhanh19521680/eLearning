import React from 'react'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

const Accordion = (props) => {
 
    return (
        <>
            <div className='row' style={{ marginTop: '50px' }}>
                <MDBAccordion initialActive={(props.isCheck)? 0:1} >
                    <MDBAccordionItem collapseId={1} headerTitle={props.Title}>
                        {props.State}
                    </MDBAccordionItem>
                </MDBAccordion>
            </div>
        </>
    )
}

export default Accordion