import React, {Components} from 'react';
import TableRow from './TableRow';

class Table extends Components{
    constructor(props){
        super(props);
        
        this.state = {
            currentColor: '',
            numColumn: 0,
            tableArray: []
        }
        <TableRow/>
        
    }

}
export default Table;