import Textarea from './Textarea'
const Editor = () => {
    return (
        <div className="editor" >

            
                <Textarea readOnly={false} placeholder='Write a code..' />
            

        </div>
    )
}

export default Editor