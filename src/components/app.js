import React, { Component } from 'react';
import RepresentativesList  from '../containers/representatives_list';
import RepresentativeDetail from '../containers/representative_detail'
import SearchControls       from '../containers/search_controls';

export default class App extends Component {
  render() {
    return (
      <div>
       <div className="searchControls">
       <SearchControls />
       </div>
       <br/>
       <div className="container">

       <div className="row">
         <div className="col-md-6">
         <RepresentativesList />
         </div>
         <div className="col-md-4 offset-md-4">
         <RepresentativeDetail />
         </div>
         </div>
      </div>
      </div>
    );
  }
}
