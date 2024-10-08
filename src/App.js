import { Component } from "./core/heropy";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default class App extends Component{
    render(){
        const theHeader= new TheHeader().el
        const theFooter = new TheFooter().el
        const routerView =document.createElement('router-view') // 페이지 요소 객체 생성
        this.el.append(
            theHeader,
            routerView,
            theFooter
        )
    }
}