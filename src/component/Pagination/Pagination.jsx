import React from 'react';
import './pagination.css';


const Pagination = (props) => {

    // Lenght of data
    const total = props.total;
    // console.log(total, "response 1");

    // Total no of pages 
    const noOfPages = Math.ceil(total / 1)


    const nextPage = () => props.pageSetter(props.page <= noOfPages ? props.page + 1 : props.page)

    const prevPage = () => props.pageSetter(props.page !== 1 ? props.page - 1 : props.page)
    return (
        <div className='btn_pagination d-flex column-gap-2 aign-items-center justify-content-center my-3'>
            <button disabled={props.page === 1} className='pagination_my_btn' onClick={prevPage}> &lt; </button>
            <span>{props.page}</span>
            <button disabled={props.page === noOfPages} className='pagination_my_btn' onClick={nextPage}> &gt; </button>
        </div>
    )
}

export default Pagination