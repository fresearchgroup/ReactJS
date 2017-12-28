import axios from 'axios';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const POST_ARTICLES = 'POST_ARTICLES';
export const FETCH_ARTICLE = 'FETCH_ARTICLE';
const ROOT_URL = 'http://10.129.132.103:8000/articleapi/';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';



export function fetchArticles(){
  const request = axios.get(ROOT_URL);

   return {
     type: FETCH_ARTICLES,
     payload:request
   };

return{

};
}


export function CreateArticle(values , callback){
const request = axios.post(ROOT_URL , values)
 .then(() => callback());

return {
  type: POST_ARTICLES,
  payload:request
};



}

export function fetchArticle(id){

  const request = axios.get(ROOT_URL +  id +'/' );

  return {
   type: FETCH_ARTICLE,
   payload:request
 };

  }





export function deleteArticle(id ,callback ){
  const request = axios.delete(ROOT_URL + id+ '/')
   .then(() => callback());
  return {
   type: DELETE_ARTICLE,
   payload:request
 };



}
