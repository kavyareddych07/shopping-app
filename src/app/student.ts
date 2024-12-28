import { carDetailsI, CustomerI, CustomerLI, DetailsI, EmployI, ModelI, movieDetailsI } from "./interfaces/employI";

class Student {

    name: string = 'Chitti';
    id: number = 20;
    isActive: boolean = true;

    // array - [] numbers, string, boolean

    idsList: number[] = [10, 20, 30, 40];
    countryList: string[] = ['India', 'Usa', 'Australia'];
    customersList: CustomerLI[] = [
        { name: 'bhargav', id: 10 },
        { name: 'chitti', id: 20 },
        { name: 'munna', id: 30 }
    ]


    // object - {}
employ: EmployI={
    name:'kavya',
    id:30,
    isactive:true,
    

}
    customer: CustomerI = {
        name: 'chitti',
        email: 'chitti@gmail.com',
        age: 20,
        isActive:false,
        products: [
            {name: 'xbox', price: 200, purchaseCardNumber: 2543 },
            {name: 'phone', price: 600, purchaseCardNumber: 6756},
            {name: 'ear phones', price: 100, purchaseCardNumber: 1}
        ]
    }


    // write obj which should have properties - accountType, balance, isActive and transactions 
    // car showroom
    // tv showroom
    // movies
    // games

    carsShowRoomDetails: carDetailsI = {
        carBrand: 'Hundai,Tata Motors,Kia,Toyota',
        carManufactuedYear:2007,
        isthisCarsAvailable: true,
        CarModels: [
            { model: 'elantra', price: 100, seats: 4, colour: ['blue'] },
            { model: 'harrier', price: 250, seats: 4, colour: ['green','black','red']},
            { model: 'kiaCarnival', price: 500, seats: 11, colour: ['black','white'] },
            { model: 'fortuner', price: 700, seats: 7, colour: ['black','brown', 'yellow'] },
        ]
    }
    // this.carsShowRoomDetails.CarModels[2].colour[1]

    tvShowRoomDetails: ModelI = {
        tvCompanies: 'sony,samsung,lg',
        tvPrice: 1000,
        isthistvavailable: true,
        tvModels: [
            { model: 'braiva', inches: 55, colour: 'black', display: 'led' },
            { model: 'crystal', inches: 43, colour: 'black', display: 'uhd' },
            { model: 'oled', inches: 65, colour: 'black', display: 'oled', manufacturCountry: { doorNo:23.45,city:'vijayawada',state:'AP',country:'india'}},
        ]
    }
    // this.tvShowRoomDetails.tvModels[2].manufacturCountry.state

    movieDetails: movieDetailsI= {
        movieName: 'arjunReddy',
        movieReleasedYear: 2017,
        movieType: 'romance/action',
        isThisMovieHit: true,
        castMembers: [
            { name: 'vijay', age: 35, born: '9may' },
            { name: 'shalini', age: 31, born: '23sep' },
            { name: 'rahul', age: 33, born: '15jan' },
        ]
    }

    gameDetails: string[] = ['candicrush'];
    gameReleasedYeras: number[] = [2012];
    topFivePeopleToClearIt: any[] = [
        { name: 'rupa', age: 45, deviceUsed: 'ipad' },
        { name: 'munna', age: 17, deviceUsed: 'ipone' },

    ]



     
         customerDetails: DetailsI = {
        accountType: 'creditCard,debit card',
        Balance: 2000,
        isActive: true,
        transactions: [
            { amount: 200, place: 'shopping mall', date: '20.12.2012', address: { street: '3-2r6B', village: 'xyz', state: 'AP', pin: '200123' } },
            { amount: 450, place: 'cafe', date: '12.02.2013' },
            
        ]
    }
    getStudentInfo(){
        console.log('studentData')
        this.customerDetails.transactions[1].place
    }


    // () {

    // }



    getStudentInfo1 = () => {

    }
    // () => {

    // }


}
