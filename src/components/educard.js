import React from "react"

function educard(props) {
  const { eduName, eduDegree, eduLink, eduImage, eduCourses, eduId} = props
  return (
    <div id="accordion">
    <div class="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-10">
            <div class="card mx-3 my-5" style={{width: "45em"}}>
                <img class="card-img-top" src={eduImage}/>
                <div class="card-body">
                    <h5 class="card-title">{eduName}</h5>
                    <p class="card-text">{eduDegree}</p>
                    <a href={eduLink} className="card-link">
                        Visit!
                    </a>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo" >
                    <h6 class="mb-0" style={{display:"block"}}>
                        <button class="btn btn-link collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Courses/Achievements
                        </button>
                    </h6>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                    {eduCourses}
                    </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </div>
  )
}

export default educard
