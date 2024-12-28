export interface EmployI{
    name:string;
    id:number;
    isactive:boolean;
}

export interface CustomerLI {
    name: string;
    id: number
}

export interface CustomerI{
    name:string;
    email:string;
    age:number;
    isActive:boolean;
    products: ProductI[]
}

export interface ProductI {
    name: string;
    price: number;
    purchaseCardNumber: number
}

export interface ModelI{
    tvCompanies:string;
    tvPrice:number;
    isthistvavailable: boolean;
    tvModels:ModlesI[]
}

export interface ModlesI{
    model:string;
    inches:number;
    colour:string;
    display:string;
    manufacturCountry?:any
}

export interface manufacturCountryI{
    doorNo:number;
    city:string;
    state:string;
    country:string
}
  
export interface carDetailsI{
    carBrand:string;
    carManufactuedYear:number;
    isthisCarsAvailable:boolean;
    CarModels:carModelsI[]
    
}
    
export interface carModelsI{
model:string;
price:number;
seats:number;
colour:any
    }

    export interface colour{
        
    }


    export interface movieDetailsI{
        movieName:string;
        movieReleasedYear:number;
        movieType:string;
        isThisMovieHit:boolean;
        castMembers:castMembersI[]
    }

    export interface castMembersI{
        name:string;
        age:number;
        born:string;
    }

    export interface DetailsI{
        accountType:string;
        Balance:number;
        isActive:boolean;
        transactions:IDBTransaction[];
    }

    export interface IDBTransaction{
        amount:number;
        place:string;
        date:string;
        address?:any
    }

    export interface address{
        street:string;
        village:string;
        state:string;
        pin:string;
    }


    

    

