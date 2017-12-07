import React,{ Component } from 'react';
import  {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticles} from  '../actions/index'
import {postArticles} from  '../actions/index'
import { Router, Route, browserHistory } from 'react-router';

 class Homepage extends Component {

  constructor (props){
  super(props);
  this.state = {articles :''};

  this.fetchallArticles = this.fetchallArticles.bind(this);
  this.postanArticle = this.postanArticle.bind(this);
  }


 fetchallArticles(){
  alert("fetch");
  event.preventDefault();
  this.props.fetchArticles();
  console.log(this.props.fetchArticles());
   }
   postanArticle(){
    alert("post");
    event.preventDefault();
    this.props.postArticles();
    console.log(this.props.postArticle());
     }



   render(){
     return(
     <form className="input-group">

      <span className="input-group-btn">
      <button   onClick={() => this.fetchallArticles} className="btn btn-secondary"> Fetch Articles  </button>
      </span>

      <span className="input-group-btn">
      <button  onClick={() => this.postanArticle } className="btn btn-secondary"> Post Articles  </button>
      </span>
     </form>
   );
   }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchArticles}, dispatch);
}

export default connect(null, mapDispatchToProps) (Homepage);
