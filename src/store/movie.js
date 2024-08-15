import { Store } from "../core/heropy";

const store= new Store({
    searchText:'',
    page:1,
    pageMax:1,
    movies:[],
    loading:false,
    message: 'Search for the movie tite'
})

export default store
export const searchMovies= async (page) => { 
    store.state.loading=true //로딩 애니메이션 시작
    store.state.page = page

    if(page === 1){
        store.state.movies=[]
        store.state.message=''
    }
    try {
        const res = await fetch(`https://www.omdbapi.com?apikey=7c7b7a07&s=${store.state.searchText}&page=${store.state.page}`)
        const { Search, totalResults, Response, Error } = await res.json()
        if (Response === 'True') {
            store.state.movies = [
                ...store.state.movies,
                ...Search
            ]
            store.state.pageMax = Math.ceil(Number(totalResults) / 10)
        } else {
            store.state.message = Error
            store.state.pageMax=1
        }   
    }catch(error){
        console.log('serachMovies error',error)
    }finally{
        store.state.loading=false //로딩 애니메이션 종료
    }
}