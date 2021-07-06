const Button = ({ title, id, onClick }) => {
    return <button type="button" className="btn" id={id}
        onClick={onClick}
    >{ title }</button>
}

export default Button
