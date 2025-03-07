import RestHeader from "./RestHeader"
import { Outlet } from "react-router"

export default function SecondaryHome(){

    return(
        <>
        <RestHeader></RestHeader>
        <Outlet></Outlet>
        </>
    )
}