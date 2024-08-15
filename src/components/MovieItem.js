import { Component } from "../core/heropy";
import movieStore from '../store/movie'

export default class MovieItem extends Component{
    constructor(props){
        super({
            props,
            tagName: 'a',

        })
        movieStore.subscribe('movies',()=>{
            this.render()
        })
    }

    render(){
        const {movie} = this.props

        this.el.setAttribute('href',`#/movie?id=${movie.imdbID}`) // a태그로 만들어진 부분을 href 주소를 명시
        this.el.classList.add('movie')
        this.el.style.backgroundImage=`url(${movie.Poster})`
        this.el.innerHTML=/*html */`
            <div class="info">
                <div class="year">
                    ${movie.Year}
                </div>
                <div class="title">
                    ${movie.Title}
                </div>

            </div>

        `
        
    }
}