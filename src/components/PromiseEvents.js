import React, {Component} from 'react';

class PromiseEvents extends Component{

    doFirst() {
        return new Promise((resovle,reject)=>{
            setTimeout(function(){
                console.log("Do this first!");
                resovle();
            },1000)
        })
    }
    doSecond() {
        return new Promise((resovle,reject)=>{
            setTimeout(function(){
                console.log("Do this second!");
                resovle();
            },1000)
        })
    }
    doThird() {
        return new Promise((resovle,reject)=>{
            setTimeout(function(){
                console.log("Do this third!");
                resovle();
            },1000)
        })
    }
    doLast() {
        return new Promise((resovle,reject)=>{
            setTimeout(function(){
                console.log("Do this last!");
                resovle();
            },1000)
        })
    }


    handleClick(e) {
        this.doFirst()
            .then(this.doSecond)
            .then(this.doThird)
            .then(this.doLast)
    }
    
    render() {
        return (
            <div>
                <h3>Hi Ruby</h3>
                <button onClick={this.handleClick.bind(this)}>click me</button>
            </div>
        )
    }
}


export default PromiseEvents;