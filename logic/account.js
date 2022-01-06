class Account {
    constructor(
        {
            name = null,
            surname = null,
            email = null,
            password = null,
            phone = null,
            address = null,
            city = null,
            country = null,
            zipCode = null,
            role = null,
            status = null,
            createdAt = null,
        }
        ) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.city = city;
        this.country = country;
        this.zipCode = zipCode;
        this.role = role;
        this.status = status;
        this.createdAt = createdAt;
        this.role = role;
    }

    idGenerator() {
        return Math.floor(Math.random() * 1000000);
    }

    typeOfAccount (role) {
        if (role === 1) {
            return "admin";
        } else if (role === 2) {
            return "client";
        } else if (role === 3) {
            return "seller";
        }
    }

    dateExpiration(createdAt) {
        let date = new Date(createdAt);
        let month = date.getMonth() + 1;
        let year = date.getFullYear() + 1;
        let day = date.getDate() + 1;
        let dataExpiration = `${day}/${month}/${year}`;
        return dataExpiration;      
    }

    todaysDate() {
        let date = new Date();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let day = date.getDate();
        let todaysDate = `${day}/${month}/${year}`;
        return todaysDate;
    }

    statusAccount(status) {
        if (status == true) {
            return "active";
        } else if (status == false) {
            return "inactive";
        }
    }

    showAccount() {
        console.log(`

        El usuario ${this.name} ${this.surname}, identificado con el id: ${this.idGenerator()}.
        contiene la siguiente iformacion:

        -----Datos personales:

        Correo: ${this.email}, / Contraseña: ${this.password}.
        Telefono: ${this.phone}, Direccion: ${this.address}, Ciudad: ${this.city}.
        Pais: ${this.country}, Codigo postal: ${this.zipCode}.

        -----Datos de la cuenta:

        Su rol es: ${this.typeOfAccount(this.role)}, Su estado es: ${this.statusAccount(this.status)}.
        --------------------------------------------------------------------------------------------------------
        Su fecha de creacion es: ${this.createdAt}, Su cuenta expira el: ${this.dateExpiration(this.createdAt)}. 
        
        Fecha actual de consulta: ${this.todaysDate()}.
        
        `);
    }
}


module.exports = Account;





