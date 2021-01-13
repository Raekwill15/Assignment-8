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

    this.changeColor = this.changeColor.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addColumn = this.addColumn.bind(this);
    }

    changeColor(evt){
        this.setState({currentColor: evt.target.value});
    }

    addRow = () =>{

    }

    addColumn = () =>{
        
    }

    render(){
        return( 
            <div className="table">
                <button className="addRow" onClick={this.addRow}>Add Row</button>
                <button className="addColumn" onClick={this.addColumn}>Add Column</button>
                <select name="color" onChange={this.changeColor}>
                    <option>Blue</option>
                    <option>Red</option>
                    <option>Green</option>
                    <option>Purple</option>
                </select>
            </div>
        );
    }
}
export default Table;