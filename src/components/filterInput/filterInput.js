import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {filterByAge, filterByLastname, filterByName} from "../../store/actions/actions";
import {useStyles} from "./styles";

const FilterInput = ({type, filterName, filterLastN, filterAge}) => {

    const { root } = useStyles()
    const [ value, setValue ] = useState('')

    const onChangeValue = (e) => {
        setValue(e.target.value)
        if(type === 'name'){
            filterName(e.target.value.toLowerCase())
        }else if (type === 'lastname'){
            filterLastN(e.target.value.toLowerCase())
        }else if (type === 'age'){
            filterAge(e.target.value)
        }
    }

    return(
        <TextField
            className={root}
            label={type}
            variant="outlined"
            value={value}
            onChange={(e)=>onChangeValue(e)}
        />
    )
}
const mapDispatchToProps = dispatch => {
    return {
        filterName: (value)=>dispatch(filterByName(value)),
        filterLastN: (value)=>dispatch(filterByLastname(value)),
        filterAge: (value)=>dispatch(filterByAge(value))
    }
}
export default connect(null, mapDispatchToProps)(FilterInput);