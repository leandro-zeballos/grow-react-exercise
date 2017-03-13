import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryRepresentatives} from '../actions/index';

class SearchControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateList: [],
      searchType: 'rep',
      state: 'AL',
      submitted: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
     let newState = {};
     newState[event.target.name] = event.target.value;
     newState.submitted = false;
     this.setState(newState);
  }

  onFormSubmit(event) {
   event.preventDefault();
   this.setState({submitted: true});
   this.props.queryRepresentatives(this.state.searchType, this.state.state);
  }

  renderList() {
   return this.props.stateList.map(state => {
      return <option key={state.name} value={`${state.abbreviation}`}> {state.name}</option>
   });
  }

   renderSearchType() {
     if (this.state.submitted && this.props.representatives.length > 0) {
        if (this.state.searchType === "rep") {
           return (<span className="introTitle">Representatives</span>);
        } else if (this.state.searchType === "sen"){
          return (<span className="introTitle">Senators</span>);
        }
     }
  }

  render() {
    return (
     <div>
     <form onSubmit={this.onFormSubmit} className="search">
     <h3 className="introTitle"> <strong>Who's My Representative </strong></h3>
     <br/>
     <div className="form-group">
      <label className="checkbox-inline">
       <input type="radio" name="searchType" value="rep" onChange={this.onInputChange}/>&nbsp;&nbsp;Representatives
      </label>
     </div>
     <div className="form-group">
      <label className="checkbox-inline">
       <input type="radio" name="searchType" value="sen" onChange={this.onInputChange}/>&nbsp;&nbsp;Senators
      </label>
     </div>
     <div className="form-group">
     <label>State</label>
       <select className="form-control stateList" name="state" onChange={this.onInputChange}>
         {this.renderList()}
       </select>
      </div>
      <span className="input-group-btn">
       <button type="submit" className="btn btn-primary">Search</button>
      </span>
     </form>

     <br/>
     <div className="row">
       <div className="col-md-6">
       <h3><span><strong> List </strong></span> / {this.renderSearchType()} </h3>
       </div>
       <div className="col-md-6 offset-md-10">
       <h3>Info</h3>
       </div>
       </div>
    </div>
    );
  }
};

function mapStateToProps(state) {
   return {
    stateList: state.stateList,
    representatives: state.representatives,
    searchType: '',
    state: '',
    submitted: false
   };
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({queryRepresentatives}, dispatch);
}

export default connect(mapStateToProps , mapDispatchToProps)(SearchControls);
