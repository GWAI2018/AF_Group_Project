import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/light-bootstrap-dashboard-react.css';
import '../../img/paper.png';
import '../../img/conference.png';
import '../../img/editor.png';


export default function Dashboard() { //implemented class component

  const [conference, setConference] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/conference')
        .then((res) => {
           const conference = res.data;
          setConference(conference);
        });
    }, []);

    const onSubmit = (e) => {

      console.log(e);
      const obj = {
        research_name: e.research_name,
        author_name: e.author_name,
        research_Type: e.research_Type,
       
      };
  console.log(obj);

      axios
        .post('http://localhost:5000/api/inserteditordetails/add', obj)
        .then((response) => {
          if (response.data.success) {
            alert('Successfully Added');
          } else {
            alert('Please Try Again !!');
          }
        });
    };
      
   



  

  const [editorDetails, setEditorDetails] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/api/getinserteditordetails')
        .then((res) => {
           const editorDetails = res.data;
           setEditorDetails(editorDetails);
        });
    }, []);

    
    const Delete = (id) => {
        axios.post('http://localhost:5000/api/inserteditordetails/delete/'+id)
        .then(response =>{
            alert("successfully deleted")
           
        })
    }

    

        return(

          <div>


  



          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Admin Dashboard </b>
                    </center>
                </h3>


                <br/>
              <div
                  className='shadow p-6'
                  style={{ width: '75rem', marginLeft: '0px',backgroundColor:"#F0F8FF" }}
              >
                <table className="table table-striped">
                <thead className="table-active">
                  <p> <h3><b>Hello, Minnie,</b></h3> </p> 
                    
                    
                    

                </thead>
                <p><h4><b>Announcements <span class="badge badge-secondary">6 </span></b></h4></p>
                <tbody>
                <tr> 
                  <td>
                  <div class="alert alert-primary alert-dismissible fade show">
    <strong>Primary!</strong> This is a simple primary alert box.
    <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>

<div class="alert alert-secondary alert-dismissible fade show">
    <strong>Secondary!</strong> This is a simple secondary alert box.
    <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>
                
                  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                  </div>

                  </td>

                  <td>
                  <div class="alert alert-primary alert-dismissible fade show">
    <strong>Primary!</strong> This is a simple primary alert box.
    <button type="button" class="close" data-dismiss="alert">&times;</button>

</div>


<div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                  </div>

                  <div class="alert alert-warning alert-dismissible fade show" role="alert">
                  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                  </div>

                  </td>

                  </tr> 
        </tbody>
<p><h4><b>Tasks <span class="badge badge-secondary">2 </span></b></h4></p>
<tbody>
  <tr>
    <td>
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  </div>
  </td>
  <td>

<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Well done!</h4>
  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  </div>
  
  </td>
  
  </tr>
  <p> <h4><b>Resources</b></h4> </p>
  <tbody>
  <tr>
    <td>

    <a href="http://localhost:3000/ccc">
         <img src={require("../../img/paper.png").default}
         width="150" height="150">
     </img>
</a>
    </td>

    <td>

    <a href="http://localhost:3000/vvv">
         <img src={require("../../img/conference.png").default}
         width="150" height="150">
     </img>
</a>
    </td>
    <td>

    <a href="http://localhost:3000/vvv">
         <img src={require("../../img/editor.png").default}
         width="150" height="150">
     </img>
</a>
    </td>
  </tr>
  </tbody>
  </tbody>

  </table>
                </div>
                </div></div>
                </div>




    


            

         

           


        );
    }