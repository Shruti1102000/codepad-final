 import Header from './components/Header'
import Sidebar from './components/Sidebar'
 import Editor from './components/Editor'

 import Ipop from './components/Ipop'

function App() {
   return (
    <div className="container ">
      <div className="row my-row">
            <div className="col my-col">
              <Header/>
            </div>
            
      </div>
      <div className="row my-row2">
          <div className="col-2 my-col">
            <Sidebar/>    
          </div>

          <div className="col-5 my-col">
            
              <Editor/>
          </div>
          <div className="col-4 my-col">
                <Ipop/>
          </div>
      </div>


    </div>
  );
}
export default App;
