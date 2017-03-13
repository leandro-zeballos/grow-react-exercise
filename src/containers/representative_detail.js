import React, { Component} from 'react';
import { connect } from 'react-redux';

class RepresentativeDetail extends Component {
 render() {
     return (
      <div>
      <table className="table table-hover">
      <tbody>
      <tr>
      <td><strong>First Name:</strong></td><td>
        {(!this.props.representative) ? "" : this.props.representative.name.split(' ')[0] }
       </td></tr>
       <tr>
       <td><strong>Last Name:</strong></td><td>
         {(!this.props.representative) ? "" : this.props.representative.name.split(' ')[1] }
       </td></tr>
       <tr>
       <td><strong>Distrinct:</strong></td><td>
         {(!this.props.representative) ? "" : this.props.representative.district  }
       </td></tr>
       <tr>
       <td><strong>Phone:</strong></td><td>
         {(!this.props.representative) ? "" : this.props.representative.phone }
       </td></tr>
       <tr>
       <td><strong>Office:</strong></td><td>
         {(!this.props.representative) ? "" : this.props.representative.office }
       </td></tr>
     </tbody>
     </table>
     </div>
    );
   }
}

function mapStateToProps(state) {
  return {
    representative: state.activeRepresentative
  }
}

export default connect(mapStateToProps)(RepresentativeDetail);
