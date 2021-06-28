import React from 'react'
import { Pagination, Select } from 'semantic-ui-react'

export const Paginate = ({page,setPage,totalPages,setpageSize}) => {
    const pageSizeOptions = [
        { key: "1", value: "10", text: "10" },
        { key: "2", value: "20", text: "20" },
        { key: "3", value: "50", text: "50" },
        { key: "4", value: "100", text: "100" },
      ];
    return (
        <>
            <Pagination
          defaultActivePage={page}
          onPageChange={(e, { activePage }) => setPage(activePage)}
          totalPages={totalPages}
          secondary
          inverted
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
        />
        <Select
          options={pageSizeOptions}
          onChange={(e, { value }) => setpageSize({ value }.value)}
          placeholder="10"
          compact
        />
        
        </>
    )
}
