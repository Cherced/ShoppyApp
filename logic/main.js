// on this page: http://localhost:8080/, we do an excutable script for all prcesses for the correct wroking of the page
// Language: javascript
// Path: logic\main.js
const Account = require('./account');
const dataBase = require('./dataBase');


// class Login {
//     constructor(
//         {
//             email = null,
//             password = null,
//         }
//         ) {
//         this.email = email;
//         this.password = password;
//     }


//     login(email, password) {
//         let account = new Account();
//         let accountData = account.getAccount(email);
//         if (accountData) {
//             if (accountData.password === password) {
//                 return accountData;
//             } else {
//                 return false;
//             }
//         } else {
//             return false;
//         }
//     }
        
// }
// for this pracical event we will control the check user and check password; to be existent, from js file called Account.js
function signIn() {
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;     
}

function signUp () {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let zipCode = document.getElementById("zipCode").value;
    let role = document.getElementById("role").value;
    let status = document.getElementById("status").value;
    let createdAt = document.getElementById("createdAt").value;
    let updatedAt = document.getElementById("updatedAt").value;

    let account = new Account({
        name: name,
        surname: surname,
        email: email,
        password: password,
        phone: phone,
        address: address,
        city: city,
        country: country,
        zipCode: zipCode,
        role: role,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt
    });
}


// prueba de funciones

let client1 = new Account({
    name: "Juan",
    surname: "Perez",
    email: "juanperez@hotmal.com",
    password: "123456",
    phone: "123456789",
    address: "Calle falsa 123",
    city: "Ciudad falsa",
    country: "Pais falso",
    zipCode: "12345",
    role: 2,
    status: 1,
    createdAt: "2020-01-01",
    updatedAt: "2020-01-01"
});

if (client1.typeOfAccount(1) === "admin") {
    let data = new dataBase(adminList.push(client1););    
} else {
    console.log("El cliente no es cliente");
}    
