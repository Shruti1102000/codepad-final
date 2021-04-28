import Button from './Button'
import Bar from './Bar'
const Header = () => {

    const onClick =()=>{
    console.log('click')
}

    return (
        <header className='header'>

            <div className="col-2 my-col ">
            <img src="./code_logo.png" alt="" height='100px' width= '100px'/>
            </div>
            
            <div className="col-7 my-col ">
            <Bar/>
            </div>
           
            <div className="col-1"></div>
           <div className="col-2 my-col ">
           <Button id='user' color=''  text='User' onClick={onClick}/>
           </div>
           
        </header>
    )
}

export default Header
