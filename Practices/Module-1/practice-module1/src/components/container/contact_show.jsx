import React from "react";
import { availability } from "../../models/availability.enum";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactShowComponent = () => {

    const newContact = new Contact('Miguel','Andrade','hoodloom07@houtlook.es', availability.linea)


    return(
        <div>
           <h1> Cotact information:</h1> 
    
            <ContactComponent contact={ newContact }></ContactComponent>
        </div>

    )
}

export default ContactShowComponent
