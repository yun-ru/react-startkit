import React, {Component} from 'react';

class User extends Component{

    constructor(props) {
        super(props);
        this.users = this.props.users;
        this.newUsers = [];
        // this.state = {
        //     users: this.props.users,
        //     newUsers: []
        // }
    }

    showLevelIcons(num) {
        var arr = [];

        for(let i = 0; i<num; i++){
            arr.push(i)
        }
        return(
            <span>
                {arr.map((item,index)=><span key={index}> L </span>)}
            </span>
        )
    }

    checkChild(user,level){
        user.level = level;
        this.newUsers.push(user);
        if(user.hasOwnProperty("childs")){
            user.childs.forEach(child=>{
                this.checkChild(child, level+1);
            })
        }
    }

    render() {
        this.users.forEach(user=>{
            this.checkChild(user,0)
        });

        return (
            <div>
                {
                    this.newUsers.map((user,index)=>(
                        <p key={index}>{this.showLevelIcons(user.level)}<b>{user.level}: </b>{user.name}</p>
                    ))
                }
            </div>
        )
    }
}


export default User;