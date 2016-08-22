import React, {Component} from 'react';
import User from '../components/Users';
import PromiseEvents from '../components/PromiseEvents';

class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            users: [
                {name: "Ruby",childs:[
                    {
                        name:"John",
                        childs:[
                            {name:"AA"},
                            {
                                name:"BB",
                                childs:[
                                    {name:"B-1"},
                                    {
                                        name:"B-2",
                                        childs:[
                                            {name:"B-2-1"},
                                            {
                                                name:"B-2-2",
                                                childs:[
                                                    {name:"B-2-2-1"},
                                                    {name:"B-2-2-2"}
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {name:"Daniel"}
                ]},
                {name: "Bill",childs:[{name:"Peter"},{name:"Marry"}]},
                {name: "Mimi"}
            ]
        }
    }

    render() {

        return (
            <div>
                <h1>Main Page</h1>
                <PromiseEvents/>
                <User users={this.state.users} />

            </div>
        )
    }
}


export default Main;