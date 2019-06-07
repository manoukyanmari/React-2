import React, {PureComponent} from 'react';

class Input extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
          searchText: ''
        };
        this.handleSearchText = this.handleSearchText.bind(this);
    }

    render() {
        return (
            <div className={this.props.className}>
                <input value={this.state.searchText} onChange={this.handleSearchText}
                       data-testid={this.props.cypressId} className="form-control"
                       type="text" placeholder={this.props.placeholderText}/>
            </div>
        )
    }

    handleSearchText(e) {
        this.setState({searchText: e.target.value});
        this.props.OnInputChange(e.target.value);
    }
}

export default Input;
