import Textareaio from './Textareaio'
import Textarea from './Textarea'

const Ipop = () => {
    return (
        <div className="ipop">
            <div className="row my-irow align-items-stretch">
                <Textareaio readOnly={false} placeholder='Enter Input'/>
            </div>

            <div className="row my-orow align-items-stretch">
            <Textareaio readOnly={true} placeholder='Output' />
            </div>


        </div>
    )
}

export default Ipop
