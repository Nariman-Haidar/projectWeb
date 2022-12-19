import { BASE_URL, API_KEY } from "./apiConfig";

const info =  new URLSearchParams({
       projection: "full",
       maxResults: 20,
       key: API_KEY
   })

  const  BookSource = {
   apiCall(params) {
	return fetch(BASE_URL+params)

 // check HTTP response:
 .then(response => {if(response.ok)
    return response
   else throw  response.statusText})
      .then(response => response.json());
   },

 searchBook(params){ return BookSource.apiCall(`?q=${params}&${API_KEY}`)},

searchBookCategor(params, category)
 {return BookSource.apiCall(`?q=${params}+subject:${category}+${info}`)},

  getBookDetails(id){ return BookSource.apiCall(`/${id}?key=${API_KEY}`);}
};


export {BookSource};