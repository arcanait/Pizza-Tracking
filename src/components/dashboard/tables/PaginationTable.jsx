import React from 'react'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export const PaginationTable = ({dataLength, setDataIndex, dataIndex}) => {
    const rowsPerPage = 5;
    const pages = dataLength / rowsPerPage % 0 ? 
                  dataLength / rowsPerPage : 
                  Math.floor(dataLength / rowsPerPage) + 1

    const handlePagination = (index) => {
      setDataIndex(index)
    }

    const handleNextPrev = (change) => {
      if (dataIndex + 1 === pages && change > 0) {
        return
      } else if (dataIndex + 1 === 1 && change < 0) {
        return
      } else {
        setDataIndex(dataIndex + change)
      }
    }

    const renderPages = () => {
      const pagesNumbers = []
      
      for(let i = 0; i < pages; i++) {
        pagesNumbers.push(
          <PaginationItem key={`page ${i}`}>
            <PaginationLink 
              onClick={() => handlePagination(i)}
            >
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        )
      }

      return pagesNumbers
    }

    return (
        <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink first onClick={() => handlePagination(0)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous onClick={() => handleNextPrev(-1)} />
        </PaginationItem>
          {renderPages()}
        <PaginationItem>
          <PaginationLink next onClick={() => handleNextPrev(+1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => handlePagination(pages-1)} />
        </PaginationItem>
      </Pagination>
    )
}
