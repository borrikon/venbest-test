import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {useStyles} from './styles'

const User = ({name, lastname, age, sex}) => {

    const { root } = useStyles()

    return(
        <Card className={root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name} {lastname}
                </Typography>
                <Typography color="textSecondary">
                    {age} years
                </Typography>
                <Typography variant="body2" component="p">
                    пол: {sex === "f" ? "женский" : "мужской"}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default User;