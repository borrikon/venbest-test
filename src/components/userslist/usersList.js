import React, {useEffect} from "react";
import User from "../user/user";
import {connect} from "react-redux";
import {getUsersData} from "../../store/actions/actions";

const UsersList = ({userList, filtered, getData}) => {

    let users = userList

    useEffect(()=>{
        getData()
    }, [])

    if(filtered.length){
        users = filtered
    }

    function renderUsersList(){
        if(userList.length){
            return(
                users.map((item, index)=>{
                    return <User key={index+item.name} {...item}/>
                })
            )
        }else{
            return <div>Loading</div>
        }
    }

    return(
        <div>
            {renderUsersList()}
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        getData: ()=>dispatch(getUsersData())
    }
}
const mapStateToProps = state => {
    return {
        userList: state.users.users,
        filtered: state.users.filteredArray
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);