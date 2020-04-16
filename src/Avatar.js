import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';






class Avatar extends Component {

    constructor(){
        super();
        this.state = {
            name:"Welcome to Avatar Generator"
        }
    }
    
namechange(){
    this.setState({
        name:"Now Reload Page to Change Avatars"
    })
}


    render() {
        const avatarlistarray = [
            {
                id: 1,
                name: "Jalal",
                work: "Software Developer"
            },
            {
                id: 2,
                name: "Hamza",
                work: "Product Innovator"
            },
            {
                id: 3,
                name: "Shoaib",
                work: "Product Designer"
            }
    
        ]
        const avatarcard = avatarlistarray.map((avatarcard, i) => {
            return <AvatarList key={i} id={avatarlistarray[i].name}
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />
        })
        return (
            <div className="mainpage">
                <h1 className="bg-light-green" >{this.state.name}</h1>
                <AvatarList id={avatarlistarray[0].name}
                    name={avatarlistarray[0].name}
                    work={avatarlistarray[0].work} />
                <AvatarList d={avatarlistarray[0].name}
                    name={avatarlistarray[1].name}
                    work={avatarlistarray[1].work} />
                <AvatarList id={avatarlistarray[0].name}
                    name={avatarlistarray[2].name}
                    work={avatarlistarray[2].work} />

                <button onClick={() => this.namechange()} className="bg-orange fl w-25 "> Signup </button>
            </div>
        )
    }
}



export default Avatar;