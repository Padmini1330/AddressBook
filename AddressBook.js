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

    toString() 
    {
        return "First Name: " + this.firstName + " | Last Name: " + this.lastName + " | Address: "
            + this.address + " | City: " + this.city + " | State: " + this.state + " | Zip: " + this.zip +
            " | Phone Number: " + this.phoneNumber + " | Email: " + this.email + "\n";
    }
}

let contact = new Contact("Mike", "Ross", "JPnagar", "Bangalore", "Karnataka", 560108, 9742555555, "mike@gmail.com");
console.log(contact.toString());