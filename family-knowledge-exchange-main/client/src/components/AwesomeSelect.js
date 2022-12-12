import React, { Component } from 'react';


class AwesomeSelect extends Component {
  
  render() {
    const componentOptions = this.props.options;
    const placeholder = `Select ${this.props.name}`
    const renderDefaultOption =
        this.props.renderDefaultOption == null 
            ? true 
            : this.props.renderDefaultOption;
    const classNameValue = this.props.className ? this.props.className : "form-input";
    return <select onChange={this.props.onChange} name={this.props.name.toLowerCase()} id={this.props.name} className={classNameValue} placeholder={placeholder} >
       {renderDefaultOption && (
        <option value="">{placeholder} </option>)
       }
       {componentOptions.map( ( opt ) => (
					<option
                    key={opt.id}
                    value={opt.id}
                    >{opt.name}</option>
				) )}
    </select>
  }
}

export default AwesomeSelect;