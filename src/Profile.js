import React from 'react';
import data from './data.json';
import icon from './girl.svg';
import Resume from './Resume';
import {BrowserRouter,Route,Link} from 'react-router-dom';

let Profile=()=>{
    const profilesData=data.profileData;
    console.log(profilesData[0].basics.name);
    return(
        <div className="parent"> 
        <BrowserRouter>
        <Route exact path="/resume" componet={Resume}></Route>
        </BrowserRouter>
            {
                profilesData.map((i,j)=>(
                    <div className="cards" key={j}>
                         <img src={icon} alt="profile"/>
                        <h1>{i.basics.name}</h1>
                        <hr></hr>
                        <a href={"mailto:"+i.basics.email}className="link">{i.basics.email}</a><br></br>
                        <a href={"tel:"+i.basics.mobile}className="link">{i.basics.mobile}s</a>
                        <hr></hr>
                        <Link to= {{pathname:"/resume",index:{value:{j}}}}className="btn">view profile</Link>

                    </div>
                )
                )
            }
        </div>
    )
}


export default Profile;