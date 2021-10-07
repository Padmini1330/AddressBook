console.log("****WELCOME TO ADDRESS BOOK SYSTEM****");

class Contact 
{
    constructor(...parameters) 
    {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() 
    {
        return this._firstName;
    }
    set firstName(firstName) 
    {
        const FIRST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (FIRST_NAME_REGEX.test(firstName)) {
            this._firstName = firstName;
        }
        else throw "First Name : " + firstName + " is Invalid!";

    }

    get lastName() 
    {
        return this._lastName;
    }
    set lastName(lastName) 
    {
        const LAST_NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (LAST_NAME_REGEX.test(lastName)) 
        {
            this._lastName = lastName;
        }
        else throw "Last Name : " + lastName + " is Invalid!";

    }

    get address() 
    {
        return this._address;
    }
    set address(address)
    {
        const ADRESS_REGEX = RegExp("[A-Za-z0-9]{4,}");
        if (ADRESS_REGEX.test(address)) 
        {
            this._address = address;
        }
        else throw "Address : " + address + " is Invalid!";
    }

    get city()
    {
        return this._city;
    }
    set city(city) 
    {
        const CITY_REGEX = RegExp("[A-Za-z]{4,}");
        if (CITY_REGEX.test(city)) 
        {
            this._city = city;
        }
        else throw "City : " + city + " is Invalid!";
    }

    get state() 
    {
        return this._state;
    }
    set state(state) 
    {
        const STATE_REGEX = RegExp("[A-Za-z]{4,}");
        if (STATE_REGEX.test(state)) 
        {
            this._state = state;
        }
        else throw "State : " + state + " is Invalid!";
    }

    get zip() 
    {
        return this._zip;
    }
    set zip(zip) 
    {
        const ZIP_REGEX = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (ZIP_REGEX.test(zip)) 
        {
            this._zip = zip;
        }
        else throw "Zip : " + zip + " is Invalid!";
    }

    get phoneNumber() 
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) 
    {
        const PHONE_NUMBER_REGEX = RegExp("^[1-9]{1}[0-9]{9}$");
        if (PHONE_NUMBER_REGEX.test(phoneNumber)) 
        {
            this._phoneNumber = phoneNumber;
        }
        else throw "Phone Number : " + phoneNumber + " is Invalid!";
    }

    get email() 
    {
        return this._email;
    }
    set email(email) 
    {
        const EMAIL_REGEX = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if (EMAIL_REGEX.test(email)) 
        {
            this._email = email;
        }
        else throw "Email : " + email + " is Invalid!";
    }

    toString() 
    {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

let addressBookArray = new Array();

let contact=new Contact("Mike", "Ross", "JPnagar", "Bangalore", "Karnataka", "560108", "9742555555", "mike@gmail.com");
addressBookArray.push(contact);

addressBookArray.push(new Contact("Harvey","Specter","SilkBoard","Bangalore","Karnataka","230230","9000000000",'harv@gmail.com'));

addressBookArray.push(new Contact("Padmini","Sharma","Jaynagar","Bangalore","Karnatakaa","123123","9999999999",'padmini@gmail.com'));

addressBookArray.forEach(contact => console.log(contact.toString()));

function contactExists(phoneNumber) 
{
    return addressBookArray.some(contact => contact.phoneNumber == phoneNumber );
}

function addContact(contact) 
{
    if (!contactExists(contact.phoneNumber)) 
        addressBookArray.push(contact);
    else 
        throw "Contact is Present in the Address Book";
}

function editContactDetails(phoneNumber,property,newValue) 
{
    if (contactExists(phoneNumber)) {
        switch (property) {
            case "FirstName":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).firstName = newValue;
                break;
            case "lastName":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).lastName = newValue;
                break;
            case "address":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.phoneNumber == phoneNumber).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else 
    {
        console.log("Contact Does Not Exist");
    }
}

function deleteContact(phoneNumber)
{
    let index = addressBookArray.findIndex(contact => contact.phoneNumber == phoneNumber)
    if (index != -1) 
    {
        addressBookArray.splice(index, 1)
    } 
    else 
    {
        console.log(`${phoneNumber} not found`)
    }
}

function numberOfContacts(totalCount) 
{
    return totalCount + 1;
}
editContactDetails("9000000000", "state", "tamilnadu");
console.log(addressBookArray);

deleteContact("9000000000");
console.log("After deleting contact from address book : ")
console.log(addressBookArray);    

let totalNumberOfContacts = addressBookArray.reduce(numberOfContacts,0);
console.log("Total Number of Contacts in the Address Book Array : " + totalNumberOfContacts);


console.log("Adding Duplicate Contact");
try 
{
    addContact(contact);
} 
catch(error) 
{
    console.error(error);
}
console.log(addressBookArray);

