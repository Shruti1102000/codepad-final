// import PropTypes from 'prop-types'

// const Textarea = ({readOnly, placeholder }) => {
//     return (
//         <div>
//             <textarea readOnly={readOnly} placeholder= {placeholder} ></textarea>
//         </div>

//         // <div>
//         //     <input type={type} placeholder= {placeholder}/>
//         // </div> 
//     )
// }

// Textarea.propTypes={
//     placeholder: PropTypes.string,

// }




import PropTypes from 'prop-types'

const Textarea = ({readOnly, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            </label>
            <textarea readOnly={readOnly} placeholder= {placeholder}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="25"
            />
        </div>
    )
}

Textarea.propTypes={
         placeholder: PropTypes.string,
    
     }

export default Textarea