import React, {useState} from 'react';

const Pagination = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize);
  
  let pages = []
  for(let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pageCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  
  let totalPage = pages
  .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
  .map((p) => {
    return <span className={currentPage === p ? "currentPage" : ''}
                 key={p}
                 onClick={(e) => {
                     onPageChanged(p);
                 }}>{p}</span>
})


return   <div className="pagination">
  {portionNumber > 1 && <button className="arrow arrow__left" onClick={ () => {setPortionNumber(portionNumber - 1); onPageChanged(leftPortionPageNumber-portionSize)}}>Предыдущая</button>}
    {totalPage}
  {portionNumber < portionCount && <button className="arrow arrow__right" onClick={ () => {setPortionNumber(portionNumber + 1); onPageChanged(rightPortionPageNumber+1)}}>Следующая</button>}
  </div>
}


export default Pagination;