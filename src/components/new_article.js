import React,{ Component,PropTypes } from 'react';
import { Field,reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CreateArticle} from '../actions';


class NewArticle extends Component {


  onSubmit(values) {

  this.props.CreateArticle(values , () => {
  
  this.props.history.push('/');

});

  }



renderField(field){
  const { meta : { touched,error } } = field;
  const className = 'form-group ${touched && error ? "has-danger" : ""}';
return(
<div className = { className}  >
<label>{field.label} </label>
  <input className="form-control"
   type="text"
   {... field.input}
  />

  <div className = "text-help" >
  {touched ? error : '' }
  </div>
</div>


);


}


renderBodyField(field){

  const { meta : { touched,error } } = field;
  const className = 'form-group ${touched && error ? "has-danger" : ""}';

  return(
  <div className = { className}  >
  <label>{field.label} </label>
    <textarea className="form-control"

     {... field.input}
    />

    <div className = "text-help" >
    {touched ? error : '' }
    </div>

  </div>


  );


}

render(){
 const {handleSubmit } = this.props;
return (
  <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
  <Field name ="title"
    label="Article Title"
    component={this.renderField}  />
    <Field name ="body"
      label="Content"
      component={this.renderBodyField}  />
  <button type="submit" className="btn btn-primary" > Submit </button>
  <Link to='/' className = "btn btn-danger" > Cancel </Link>
  </form>

);

}



}


function validate(values){
  const  errors = {};

  if (!values.title){

    errors.title =' Enter a title';
  }
  if (!values.body){

    errors.body =' Enter the  description';
  }


  return errors;
}





export default reduxForm({
validate,
 form : 'NewArticleForm'
}) (connect (null,{CreateArticle}) (NewArticle)

);
