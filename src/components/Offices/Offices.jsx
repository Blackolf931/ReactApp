import React from "react";
import s from "./Offices.module.css"
import {Button, Table} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const Offices = (props) => {
    let officeInformation = props.data.officeInformation
        .map(info => <tr>
            <td>{info.officeName}</td>
            <td>{info.address}</td>
            <td>{info.country}</td>
            <Button variant="contained" component="span">Update</Button>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon/>}>
                Delete
            </Button>
        </tr>);
    /*    console.log(props.data.office)
        let testr = props.data.office.map(el=><ul>{el.id}</ul>)*/
    /*    console.log(testr);*/
    return (
        <div>
            {/*     {testr}*/}
            {/* */}
            <Table className={s.mainTable}>
                <tr>
                    <td>
                        OfficeName
                    </td>
                    <td>
                        Address
                    </td>
                    <td>
                        Country
                    </td>
                </tr>
                {officeInformation}
            </Table>
        </div>
    )
}
export default Offices


{/*<input placeholder="Enter in a username" />
                <button onClick={this.fetchUser}>Search</button>
                <ul firstName={this.state.fetchUser.categoryId} lastName={this.state.fetchUser.categoryName} email={this.state.fetchUser.products} />
           */
}