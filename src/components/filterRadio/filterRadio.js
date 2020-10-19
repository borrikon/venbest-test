import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import {connect} from "react-redux";
import {filterBySex} from "../../store/actions/actions";
import {useStyles} from "./styles";

const FilterRadio = ({filterSex}) => {

    const { root, radioBtn } = useStyles()
    const [ value, setValue ] = useState('')

    function handleChange(e){
        setValue(e.target.value)
        filterSex(e.target.value)
    }

    return(
        <FormControl className={root} component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
                className={radioBtn}
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={(e)=>handleChange(e)}
            >
                <FormControlLabel
                    labelPlacement="start"
                    value="m"
                    control={<Radio />}
                    label="М"
                />
                <FormControlLabel
                    labelPlacement="start"
                    value="f"
                    control={<Radio />}
                    label="Ж"
                />
            </RadioGroup>
        </FormControl>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        filterSex: (value)=>dispatch(filterBySex(value))
    }
}
export default connect(null, mapDispatchToProps)(FilterRadio);