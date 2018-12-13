import React from 'react'

const ProjectDetails = (props) => {
 const id = props.match.params.id;
  return (
    <div className=" container section project-details ">
     <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - {id}</span>
          <p>At Phillips Outsourcing Services Nigeria Limited, we place premium value on the continual development of our people to position them for efficient and professional service delivery. We subscribe to the values of objectivity, fairness, integrity, diligence, and culture adaptation. These guiding principles equip and position the Phillips Outsourcing person for a lifelong rewarding work experience.

          </p>
        
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div >posted by the net ninja</div>
          <div >2nd september, 2 am</div>
        </div>
     
     </div>
      
    </div>
  )
}

export default ProjectDetails
