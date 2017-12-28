import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticles} from  '../actions/index'
import {Link} from 'react-router-dom';
import _ from 'lodash';

class ArticlesIndex extends Component {
componentDidMount(){
  this.props.fetchArticles();
}

renderArticles(){

return _.map(this.props.articles, article =>{
  return(
  <li className ="list-group-item" key={article.id} >
  <Link to ={"articles/" + article.id} >
  <strong> {article.title} </strong>
   </Link>
  </li>

);
});
}


render() {

return (
<div>
<div className="text-xs-right">
<Link to ="/articles/new" className="btn btn-primary" >
 Add an Article
 </Link>
</div>
<h3> Articles </h3>

<ul className="list-group">
{this.renderArticles()}
  </ul>


 </div>
);

}
}


function mapStatetoProps(state){
  return {articles : state.articles};
}


export default connect(mapStatetoProps, { fetchArticles} ) (ArticlesIndex);
