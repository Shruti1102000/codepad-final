import Button from './Button'
const Sidebar = () => {
    
    const onClick =()=>{
    console.log('click')
}

    return (
        <div className='sidebar'>

            <Button color='' text='View' onClick={onClick}/>
            <Button color='' text='Collaborate' onClick={onClick}/>
            <Button color='' text='Save' onClick={onClick}/>
            <Button color='' text='Logout' onClick={onClick}/>
        </div>
    )
}

export default Sidebar
