import React , {Component} from "react";
import App from "./App";
import Brands from "./Brands";

class Cars extends Component{
    state={
        users:[
            {name:'BMW',surname:'black',age:'2020'},
            {name:'Mercedes',surname:'black',age:'2020'},
            {name:'Kia',surname:'black',age:'2020'},
            {name:'Hyundai',surname:'black',age:'2020'}
        ]
    }
    render() {
        const {users}=this.state;
        return(
            <div>
                {users.map((user,index)=>(
                    <Brands key={index} name={user.name} surname={user.surname} age={user.age}/>
                    )
                )}
                <App />
                <button>come</button>
            </div>
        )
    }
}

export default Cars