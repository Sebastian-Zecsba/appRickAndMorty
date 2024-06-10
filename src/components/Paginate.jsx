import React from 'react';

const Paginate = ({page, setPage, total}) => {

    const handleLess = (num) => {
        if (page > num) {
            setPage(page - num);
        } else {
            setPage(total);
        }
    }

    const handlePlus = (num) => {
        if (page <= total-num) {
            setPage(page + num);
        } else {
            setPage(1);
        }
    }

  return (
    <div className="pagination">
        <button onClick={() => {handleLess(1)}}>{'<'}</button>
        <span>{page} / {total}</span>
        <button onClick={() => {handlePlus(1)}}>{'>'}</button>
    </div>
  )
}

export default Paginate;