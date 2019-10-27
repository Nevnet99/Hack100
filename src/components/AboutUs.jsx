import React from "react";
import "../styles/AboutUs.css";
import imageVariable from '../assets/friends.jpg'

function AboutUs() {
    return (
<div className="background">
<img className="friends" src={imageVariable}></img>

<h1 className="title"> About Us </h1>
        <p1 className="paragraph">
At Eventifind, we're all about <b className="bold">social inclusion. </b>
<br /><br />
We're on a mission to <b className="bold"> change the world</b> and make it easier for everyone to access and attend local events. 
<br /><br />
Our service collates details of local events happening in <b className="bold"> your area </b>, based on <b className="bold">your preferences</b>, and every week we'll send you a <b className="bold">text message </b>with details of events we think you'd be interested in. 
<br /><br />
If you see an event you're interested in, just reply to the text message, quoting the name of the event, and we'll put you in touch with a contact at the event that will contact you in advance to make sure that everything is in place to make your visit<b className="bold"> comfortable and enjoyable.</b>
</p1> 
<br />
<h2 className="creators"> Founders <br/>
<p2 className="creatorNames"> 
Nadia Amroon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p2>
<p2 className="creatorNames1"> 
Luke Brannagan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        
</p2>
<p2 className="creatorNames2"> 
Cai Jenkins &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p2>
<p2 className="creatorNames3"> 
Jo Smith 
</p2>
</h2>
 </div>

    )};
export default AboutUs;
