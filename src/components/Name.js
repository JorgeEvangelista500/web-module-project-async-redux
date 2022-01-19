import React from "react";
import { connect } from "react-redux";


const Name = (props) => {

    const name = props.name
    const age = props.age
    const error = props.error

    return (
        <div>
            <h2>{name} your age is {age}</h2>
            <h3>{error}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        name: state.name,
        age: state.age,
        error: state.error
    }
}
export default connect(mapStateToProps)(Name)