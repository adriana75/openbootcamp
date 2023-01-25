import { roles } from "./roles.enum";

export class User {
    username = '';
    email = '';
    password = '';
    role = roles.USER;

    CONSTRUCTOR(username, email, password, role){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}