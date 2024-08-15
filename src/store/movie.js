import { Store } from "../core/heropy";

const store= new Store({
    searchText:'',
    page:1,
    movies:[]
})

export default store
export const searchMovies= async (page) => { 
    if(page === 1){
        store.state.page=1
        store.state.movies=[]
    }
    const res = await fetch( `https://www.omdbapi.com?apikey=7c7b7a07&s=${store.state.searchText}&page=${store.state.page}`)
    const {Search} = await res.json()
    store.state.movies=[
        ...store.state.movies,
        ...Search
    ]
}