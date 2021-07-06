// import React, { useState } from 'react'
import '../css/home.css'
import SearchText from '../components/SearchText';

import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FaMap } from "react-icons/fa"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FaBars } from  "react-icons/fa"
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"
import TopNav from '../components/TopNav';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const initialList = [];

// function AddEvent() {
//     // this will redirect you to the page for adding events
//     // window.location.href="http://localhost:3000";
// }

function Event(item) {
    return(
        <li className="eventItem" id={item.id} >
            {item.name}
        </li>

        
    );
}

function Events() {

    const [list, setList] = useState(initialList)
    const [name, setName] = useState('')

    function AddEvent() {
        // this will redirect you to the page for adding events
        // window.location.href="http://localhost:3000";
        const newList = list.concat(name);
        setList(newList);

    }

    // const onClick = () => {
    //     AddEvent();
    // }

    return(
        <div className="myEvents">
            <h1 id="eventsHeader">My Events</h1>
            <div id="postContainer" onClick={AddEvent} value={name}>
                <button id="postButton"><FontAwesomeIcon icon={faPlus}/></button>
            </div>
            <div className="vl"></div>
            <div className="eventHolder">
                <ul className="eventList">
                    {/* <Event /> */}
                    {list.map((item) =>(
                        // <li className="eventItem" key={item.id}>{item.name}</li>
                        <Event item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function OngoingEvents() {
    return (
        <div id="ongoing-Events">
            <h1 id="ongoing">Events Near U</h1>
            <ul className="ongoing-List">
                <Event />
            </ul>

        </div>
    );
}

function HomePage() {
    return(
        <div>
            <TopNav />
            {/* <div class="container">
                <div class="jumbotron">
                    <h1 id="feed" >Feed</h1>
                </div>
            </div> */}
            <h1 id="feed">Dashboard</h1>
            <div id="search">
                <FaSearch id="search-btn" />
                <SearchText className ="text-field" id="search-bar" />
            </div>
            {/* <div class="form-group">
                <div id="search">
                    <SearchText className="form-control" id="search-bar" />
                    <FaSearch id="search-btn" />
                </div>
            </div> */}
            <OngoingEvents />
            <Events />
            {/* <OngoingEvents /> */}
        </div>
    );
};

function Home()
{
    return(
        <div className="HomePage">
            <HomePage />
        </div>
    );
};

export default Home;
