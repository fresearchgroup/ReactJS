import React,{ Component ,PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchArticle ,deleteArticle } from '../actions/index' ;
import {Link} from 'react-router-dom';

class ArticlesShow extends Component {

  componentDidMount(){
     if(!this.props.article){
      const {id} = this.props.match.params;
      this.props.fetchArticle(id);
  }
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
      this.props.deleteArticle(id,() =>
    {  this.props.history.push('/') ;
        });
    }



render(){
 const {article} = this.props;

  if( !article) {
           return <div>Loading...</div>;
       }


  return  (
    <div>
               <Link to="/">Back to Index</Link>
               <div> </div>
               <button className = "btn btn-danger pull-xs-right"
        onClick = {this.onDeleteClick.bind(this)} >
        Delete Article
        </button>
               <h3>{article.title}</h3>

                <div dangerouslySetInnerHTML={{ __html: article.body}} />
           </div>

  );
}


}




function mapStatetoProps({articles} , ownProps){
  return {article : articles[ownProps.match.params.id]};

}



export default connect(mapStatetoProps,{fetchArticle,deleteArticle}) (ArticlesShow);
