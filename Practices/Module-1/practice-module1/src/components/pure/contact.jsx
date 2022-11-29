import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({contact}) => {
    return(
        <div>
            <h3>
                Nombre: { contact.name }
            </h3>
            <h4>
                Apellido: { contact.lastName }
            </h4>
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