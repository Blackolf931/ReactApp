import Pagination from '@mui/material/Pagination';
import React, {useState} from "react";


let Paginator = ({totalUsersCount, pageSize, currentPage , onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div>
        <Pagination count={pagesCount} variant="outlined" color="primary"
                        onChange={(e, num) => {
                           onPageChanged(num);}}/>
    </div>
}
export default Paginator