import {Pagination} from "@mui/material";
import React from "react";


let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            <Pagination count={pagesCount} variant="outlined" color="primary" defaultPage={1}
                        onClick={(e) => {
                            pages.map(p => {
                                onPageChanged(p)
                            })
                        }}>{currentPage}</Pagination>}
    </div>
}
export default Paginator