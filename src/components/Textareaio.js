
import PropTypes from 'prop-types'

const Textareaio = ({readOnly, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            </label>
            <textarea readOnly={readOnly} placeholder= {placeholder}
            className="form-control"
            id="exampleFormControlTextarea2"
            rows="12" cols="70"
            />
        </div>
    )
}
Textareaio.propTypes={
    placeholder: PropTypes.string,

}

export default Textareaio