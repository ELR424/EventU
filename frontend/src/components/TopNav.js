import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FaBars } from  "react-icons/fa"
import { FaMap } from "react-icons/fa";
import { useState } from "react";

const TopNav = () => {

    const[isDisplayed, setDisplay] = useState(false)

    const openNotif = () => {
        // alert('Works!')
        setDisplay(!isDisplayed)
    }

    const onClickMap = () => {
        window.location.href="http://localhost:3000/map";
    }

    return(
        <div class="topBar">
            <div class="linkContainer">
                <a className="topBarLink" id="homeLink"><FontAwesomeIcon icon={faHome} className="currentIcon"/></a>
                <a className="topBarLink" id="calendarLink"><FontAwesomeIcon icon={faCalendar} className="topBarIcon"/></a>
                <a href="#" className="topBarLink" id="mapLink"><FaMap className="topBarIcon" id="map-icon" onClick={onClickMap}/></a>
            </div>
            <FaBars className="topBarLink" id="fabars" onClick={openNotif}/>
            <div className={`${isDisplayed ? 'notification-active' : 'notification-box'}`} id="notification">
                <p>Notifications go here</p>
                <p>Notifications go here</p>
                <p>Notifications go here</p>
                <p>Notifications go here</p>
                <p>Notifications go here</p>
                <p>Notifications go here</p>
                <p>Notifications go here</p>

            </div>
        </div>
    );
}


export default TopNav
