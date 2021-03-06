import React, { useState } from "react";
import ReactTable from "react-table";
import "./styles/BoardList.css";
import "react-table/react-table.css";

interface DataFormat {
    name: string
};

interface Props {
    data: DataFormat[]
};

const BoardList: React.FC<Props> = (props: Props) => {
    let [activePage, setActivePage] = useState(0);
    
    const columns = [
        {
            Header: "Name",
            accessor: "name"
        }
    ];
     
    const pageSizeOptions = [5, 10, 20, 25, 50, 100];

    return <div className="BoardList">
        <ReactTable
            data={props.data}
            columns={columns}
            showPagination={true}
            showPaginationTop={false}
            showPaginationBottom={true}
            showPageSizeOptions={true}
            pageSizeOptions={pageSizeOptions}
            defaultPageSize={20}
        />
    </div>
}

export default BoardList;
