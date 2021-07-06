import PropTypes from 'prop-types'
import SearchText from './SearchText'
import Button from './Button'
// import Label from './Label'
import Dropdown from './Dropdown'
import TopNav from './TopNav'
import CommentBox from './CommentBox'
import '../index.css'
// import Link from './Links'



const Header = ({ title }) => {

    // Testing purposes
    const onClick = (e) => {
        e.preventDefault();
        // window.location.href="http://localhost:3000/home";
        // alert('Redirecting you to the home page now')
    }
    
    return (
        <header className="event-page">
            <TopNav />
            <div className="event-box">
                <div className="event-box-container">
                    <h1 id="header1">{title}</h1>
                    <Dropdown />
                    <SearchText className="text-field" id="text1" title="Time of Event"/>
                    <SearchText className="text-field" id="text2" title="Number of people (max)"/>
                    <SearchText className="text-field" id="text3" title="Days until event expires"/>
                    <CommentBox id="comment-box" />
                    <Button id="submit-btn" title="Post Event"
                        onClick={onClick}
                    />
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Add an Event!',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'green', 
//     backgroundColor: 'black'
// }

export default Header
