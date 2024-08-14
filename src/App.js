import { Component } from "./core/heropy";

export default class App extends Component{
    render(){
        const routerView =document.createElement('router-view') // 페이지 요소 객체 생성
        this.el.append(routerView)
    }
}