import { availability } from "./availability.enum";

export class Contact {
    name = '';
    lastName = '';
    email = '';
    condition = availability.linea;

    constructor(name, last,email,condition){
        this.name = name;
        this.lastName = last;
        this.email = email;
        this.condition = condition;
    }
}