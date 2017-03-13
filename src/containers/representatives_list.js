import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectRepresentative} from '../actions/index';
import {bindActionCreators} from 'redux';

class RepresentativeList extends Component {

 componentWillUpdate() {
  this.props.selectRepresentative(null);
 }

 renderList() {
  if (this.props.representatives[0] && this.props.representatives[0].results) {
    return this.props.representatives[0].results.map(representativeData => {
      let key = representativeData.name;
      return (
       <tr key={key}  onClick={() => this.props.selectRepresentative(representativeData)}>
        <th> {representativeData.name} </th>
        <th> {representativeData.party} </th>
        </tr>
      );
    });
  }
}

 render() {
  return (
   <table className="table table-hover">
   <thead>
    <tr>
     <td>Name</td>
     <td>Party</td>
    </tr>
   </thead>
   <tbody>
    {this.renderList()}
   </tbody>
   </table>

  );
 }
}

function mapStateToProps({representatives}) {
 return { representatives };
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({selectRepresentative}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepresentativeList);
