



import axios from 'axios';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';

export function fetchArticles()  {
  const url = 'http://10.129.46.111:8000/articleapi/';
  const request = axios.get(url);
  alert(request);
  return {
    type: FETCH_ARTICLES,
    payload:request
  };

  console.log("request " + request);
}


