var faker = require('faker')

export default {

    sigin: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var account = {
            Firstname: `${firstName} `,
            Lastname: `${lastName} `,
            Email: faker.internet.email(firstName), //'1234567@aol.com',    //faker.internet.Email(firstName),
            Password: '12345',
            Company: 'Warner Bros',
            Address1: '1216  BROADWAY',
            Addres2: 'Apartment 1005',
            City: 'New York',
            PostalCode: '04497',
            AdditionalInformation: 'Movie Actor',
            HomePhone: '(646) 786-8150',
            MobilePhone: '(646) 350-4645',
            Alias: 'Keenu'
            }
        return account
    }

}