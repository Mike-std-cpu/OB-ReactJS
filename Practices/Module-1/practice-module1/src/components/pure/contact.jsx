import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({contact}) => {
    return(
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.last }
            </h3>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Estado: { contact.condition }
            </h5>
        </div>
    )
}

ContactComponent.protoType = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent;