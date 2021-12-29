import { addManyCustomersAction } from "../Store/customerReducer"

export const fetchCustomers=()=>{
    return function(dispatch){
        fetch("https://my-json-server.typicode.com/RomanChasovitin/demo-api/users")
        .then(response=>response.json())
        .then(json=>dispatch(addManyCustomersAction(json)))
        console.log(addManyCustomersAction)
    }
}