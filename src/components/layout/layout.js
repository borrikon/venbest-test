import React from "react";
import UsersList from "../userslist/usersList";
import {Container} from "@material-ui/core";
import FilterForm from "../filterForm/filterForm";

export const Layout = () => (
    <Container maxWidth="sm">
        <FilterForm />
        <UsersList />
    </Container>
)
