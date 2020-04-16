import React from 'react';

const AvatarList = (props) => {
    return(

        <div className="avatarstyle ma4 bg-blue dib pa3 grow shadow-6 tc">
    <img  src={`https://joeschmoe.io/api/v1/male/joe${props.name}`} alt="Avatar" />
<h1 className="bg-yellow"> { props.name } </h1>
<p className="bg-washed-green">  {props.work} </p>
<p className="bg-light-red"> {props.hobby} </p>
</div> 
    )
}

export default AvatarList;