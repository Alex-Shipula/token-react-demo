import { useState, useEffect } from "react";
//styles
import './Pagination.css'

const Pagination = (props) => {

    const [curPage, setCurPage] = useState();
    const [pageCount, setPageCount] = useState();
    const [pageCountArr, setPageCountArr] = useState([]);

    useEffect(() => {
        let arr = [];
        setCurPage(props.curPage ? props.curPage : 1);
        setPageCount(props.pageCount ? props.pageCount : 0);
        for (let i = 0; i < (props.pageCount ? props.pageCount : 0); i++) {
            arr.push(i);
        };
        setPageCountArr(arr)
    }, []);

    return (
        <div className="container pagi">
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    {pageCountArr.map((page, i) => {
                        if ((i < 4) || (i > (pageCount - 4)) || ((i > (curPage - 3)) && (i < (curPage + 3)))) {
                            return (
                                <li className={((i + 1) === curPage) ? "page-item disabled" : "page-item"} >
                                    <a onClick={(e) => { e.preventDefault(); props.pageClick(e.target.innerHTML);}} className="page-link" href="!#" tabindex="-1" >{(i + 1)}</a>
                                </li>
                            )
                        }
                        else if ((i > 4) && (i < (pageCount - 8)) && ((i < (curPage - 7)) || (i > (curPage + 7)))) {
                            return (
                                ""
                            )
                        }
                        else {
                            return (
                                "."
                            )
                        }
                    })}
                </ul>
            </nav>
        </div>
    )
};

export default Pagination;