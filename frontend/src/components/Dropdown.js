import { useState } from 'react'

const Dropdown = () => {
    
    const [isDisplayed, setDisplay] = useState(false)

    const onClickMenu = () => {
        // alert('Works!')
        setDisplay(!isDisplayed)
    }

    return (
        <div className="list">
            <button className="drop-btn" id="cat-btn" onClick={onClickMenu}>Movies</button>

            <div className={`${isDisplayed ? 'dropdown-display' : 'dropdown-content'}`} id="dropdown-list">
                <button className="list-btn" id="movies-btn">Movies</button><br></br>
                <button className="list-btn" id="park-btn">Park</button><br></br>
                <button className="list-btn" id="Bowling-btn">Bowling</button><br></br>
            </div>
            
        </div>
    )
}

export default Dropdown
