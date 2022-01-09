import Pagination from '@mui/material/Pagination';
import React, {useState} from "react";
import cn from "classnames"
import styles from "./Paginator.module.css"
import usePagination from "@mui/material/usePagination";
import {findByTestId} from "@testing-library/react";


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


    // this an example using hooks
    return <div>

     {/*   <Pagination count={pagesCount} variant="outlined" color="primary" currentPage = {page}/>*/}

       {/* {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber-1)}>Prev</button>}

        {pages.filter(p=> p => leftPortionPageNumber && p <= rightPortionNumber)
            .map((p) => {
            return <span className={cn({
                [styles.selectedpage]: currentPage === p
            }, styles.pageNumber)
            } key={p} onClick={(event => {
                onPageChanged(p);
            })}>{p}</span>
            })
        }

        {portionCount > portionNumber && <button onClick={() => setPortionNumber((portionNumber+1))}>Next</button>
            }
*/}
       {/* <Pagination count={pagesCount} variant="outlined" color="primary" d  efaultPage={1}/>*/}
       {/* <Pagination count={pagesCount} variant="outlined" color="primary" >{currentPage} </Pagination>*/}
        <Pagination count={pagesCount} variant="outlined" color="primary"
                        onClick={(e) => {
                           onPageChanged(e.target.textContent);}}/>

     {/*   <Pagination hidePrevNext hideFirstLast
                    page={currentPage} setPage={setPage} count={pagesCount}   />*/}
    </div>
}
export default Paginator