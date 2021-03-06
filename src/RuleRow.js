import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const {name,score,doScore}=this.props;
    const disabled = score !=undefined;
    return (
      <tr className={`RuleRow RuleRow-${disabled?"disabled":"active"}`} 
          onClick={disabled? null : doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;