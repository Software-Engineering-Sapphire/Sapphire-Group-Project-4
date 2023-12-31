import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
    constructor(props) {
        super(props);
        console.log('window.models.states', window.models.states);
        this.state = {
            searchValue: ""
        };
        this.handleChangeSearch = event => this.handleChange(event);
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    render() {
        let listItem = window.models.states().filter((elem) => elem.toLowerCase().includes(this.state.searchValue.toLowerCase()));
        let FilteredListItem = listItem.map((elem) => <li key={elem} className="list-items">{elem}</li>);
        let numResults = FilteredListItem.length;
        if (FilteredListItem.length === 0) {
            FilteredListItem.push(<li key="no-results" className="list-items">NO RESULTS</li>);
        }

        return (
            <div>
                <input className="search_bar" type="text" value={this.state.searchValue}
                       onChange={this.handleChangeSearch}/>
                <p>Current search: {this.state.searchValue}<br/>Number of results: {numResults}</p>
                <ul>
                    {FilteredListItem}
                </ul>
            </div>
        );
    }
}

export default States;
