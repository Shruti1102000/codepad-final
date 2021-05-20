import Button from './Button';
import'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Modal } from 'bootstrap';
import db from './firedb';
import Popup from './Popup';
import { propTypes } from 'react-bootstrap/esm/Image';
import {
	BrowserRouter as Router,
	
	Link
} from 'react-router-dom';
import handleChange from './Form'
// Required for side-effects
require("firebase/firestore");
const firebase = require("firebase");
const Sidebar = ({addcode,email}) => {
    const [isOpens, setIsOpens] = useState(false);
    const [isOpenv, setIsOpenv] = useState(false);
    const [fnames , setfnames] =useState('');
    const [fnamev , setfnamev] =useState('View');
  const [fnameo,setfnameo] =  useState({});
    let ids=[];
    var t=1;
    const togglePopup1 = () => {
      setIsOpens(!isOpens);
    }
    
    const togglePopup2 = () => {
      setIsOpenv(!isOpenv);
    }
   
    const onClick1_save =() =>{
        togglePopup1();
    }
   
    const onClick2_save = () =>{
      addcode(fnames);
      togglePopup1();
    }
    const onClick2_view = () =>{
      //open file in codeIDE
      retrievedata(fnamev);
    }
   
    const onClick1_view = () =>
    {
      togglePopup2();
      //retrievedata();
    }

    const retrievedata = () => {
      console.log("HIGH!");
      console.log(email);
      var docRef = db.collection("users").doc(email).collection("Programs").doc(fnamev);

      docRef.get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data().Code);
            let code1 = doc.data().Code;
          } else {
            console.log("No such document!");
          }
      }).catch((error) => {
    console.log("Error getting document:", error);
});
    }

    return (
        <div className='sidebar'>
            <img className="class-rounded" src="./def-user.png" height="95px" width="95px" id="user-img"/>
            <Button color='' text='View' onClick={onClick1_view}/> 
              {isOpenv && <Popup content={<> 
                          <b>Enter Name of the file</b>
                          <input type="text" value={fnamev} onChange={(e) => {setfnamev(e.target.value)}}/>
                          <button className="btn btn-outline-primary" onClick={onClick2_view}>View</button>
                          </>}
                          handleClose={togglePopup2} />
              }
            <Button color='' text='Save' onClick={onClick1_save}/>
                {isOpens && <Popup content={<> 
                    <b>Enter Name of the file</b>
                    <input type="text" value={fnames} onChange={(e) => {setfnames(e.target.value)}}/>
                <button className="btn btn-outline-primary" onClick={onClick2_save}>Save</button>
            </>}
            handleClose={togglePopup1} />}

           <Link to='/App2' className="btn-lg btn-dark btn">Collaborate</Link>
        {/* <Button color='' text='Share' onClick={onClick2}/> */}
            {/* <Button color='' text='Logout' onClick={onClick}/> */}
           { /*<Modal show={show} onHide={onClick1}>
                <Modal.Header>Enter Nmae of file</Modal.Header>
                <Modal.Body>
                    <input type="text" value="File Name" />
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-danger" onClick={onClick1}>Close</button>
                    <button className="btn btn-outline-primary" onClick={onClick1}>Save</button>
                </Modal.Footer>
      </Modal>*/}
        </div>
    )
}
//export default onClick2_view
//export default code1
export default Sidebar
