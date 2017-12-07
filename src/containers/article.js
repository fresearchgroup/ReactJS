import React, {Component} from 'react';
import {connect} from 'react-redux';


class ArticleList extends Component{


  constructor (props){
  super(props);
  this.state = {
  value: null,
  };
}


renderArticle(datas)
{
alert(datas);
console.log("data is" +datas.length);

const listItems = datas.map((data) =>
<table>
<tr key={data.id}>
<td> {data.title} </td>
<td> {data.body} </td>

</tr>
</table>
);
return(

   <div>{listItems} </div>

);

}


 render(){

   return(

     <table className = "table table-hover" border="4">
     <thead>
       <tr> <th><td align="left" > Title </td> </th>
       <th><td align="right"> Body </td> </th>
        </tr>
       </thead>

        <tbody>


        {this.props.articles.map(this.renderArticle)}
        </tbody>


     </table>

   )
 };


}


function mapStateToProps(state) {
  return { articles : state.articles };
}

export default connect(mapStateToProps) (ArticleList);
