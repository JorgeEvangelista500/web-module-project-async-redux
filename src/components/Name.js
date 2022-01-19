import React from "react";
import { connect } from "react-redux";


const Name = (props) => {
    
    const name = props.name
    const age = props.age
    return (
        <div>
            <h2>{name} your age is {age}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return{
        name: state.name,
        age: state.age
    }
}
export default connect(mapStateToProps)(Name)