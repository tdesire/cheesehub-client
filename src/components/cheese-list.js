import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }
  render() {
    const cheeseList = this.props.cheeses.map((cheese, index) => (
      <li className="cheese" key={index}>{cheese}</li>
    ))
    return (
      <ul className="cheeseList">
        {cheeseList}
      </ul>
    )
  }
};

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);