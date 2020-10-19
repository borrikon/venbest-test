import React from 'react';
import FilterInput from "../filterInput/filterInput";
import FilterRadio from "../filterRadio/filterRadio";
import {Typography} from "@material-ui/core";
import {useStyles} from "./styles";

const FilterForm = () => {

    const { root, title } = useStyles()

    return(
        <div className={root}>
            <Typography className={title} variant="h6">Фильтры</Typography>
            <FilterInput type={"name"} />
            <FilterInput type={"lastname"} />
            <FilterInput type={"age"} />
            <FilterRadio />
        </div>
    )
}

export default FilterForm;