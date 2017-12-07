import React,{ Component } from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticles} from  '../actions/index'


 class SearchBar extends Component {

  constructor (props){
  super(props);
  this.state = {articles :''};

  this.onFormSubmit = this.onFormSubmit.bind(this);

  }


 onFormSubmit(event){
  event.preventDefault();
  this.props.fetchArticles();
  console.log(this.props.fetchArticles());
   }


   render(){
     return(
     <form onSubmit={this.onFormSubmit} className="input-group">

      <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary"> Submit  </button>
      </span>
     </form>
   );
   }


}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchArticles}, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
