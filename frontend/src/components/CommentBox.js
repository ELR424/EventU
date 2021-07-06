const CommentBox = ({ id }) => {
    return (
        <div>
            <textarea id={ id } name="event-comments" rows="9" cols="38" placeholder="Comments...."></textarea>
        </div>
    )
}

export default CommentBox
