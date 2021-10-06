import React from "react";
import s from "./Offices.module.css"
import Message from "../Dialogs/Message/Message";

const Offices = (props) => {

    let officeInformation = props.information
        .map(info => <tr><td>{info.officeName}</td>
            <td>{info.address}</td>
            <td>{info.country}</td>
        <button>X</button>
        </tr>);
    return (
        <div>
            <table className={s.mainTable}>
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
                <tr>{officeInformation}</tr>
            </table>

          {/*  <table className={s.informationTable}>
                {informationTable}
            </table>*/}
        </div>
    )
}
export default Offices