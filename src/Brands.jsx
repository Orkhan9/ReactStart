import React, {Component} from 'react';

class Brands extends Component {



    render() {
        const {name,surname,age}=this.props;
        return (
            <div>
                <h1> {name} - {surname} - {age}</h1>

            </div>
        );
    }
}

export default Brands;