import { Component } from "../core/heropy";

export default class Search extends Component{
    render(){
        this.el.classList.add('search')
        this.el.innerHTML=`
            <input placeholedr="Enter the movie title to search" />
            <button class="btn btn-primary">
                Search
            </button>
        `

        const inputEl= this.el.querySelector('input')
        inputEl.addEventListener('input',()=>{

        })

        inputEl.addEventListener('keydown',event=>{
            if(event.key === 'Enter'){

            }
        })

        const btnEl= this.el.querySelector('.btn')
        btnEl.addEventListener('click',()=>{
            
        })
    }
}