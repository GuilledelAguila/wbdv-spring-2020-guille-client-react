import React from "react";

const CourseCardComponent = ({course,state,index,deleteCourse,selectedRow,editingRow,editRow,showEditor,updateForm}) =>
    <div className=" course-Card clickable"
         style={
            state.activeRow === index
            ? { background: "#0f64f2", color:"white" }
            : { background: 'white' }
         }
         onClick={(e) => selectedRow(index, e)}
    >
        <div className="clickable" >
            <i className="fas fa-file-alt wbdv-row wbdv-icon clickable "  onClick={()=>showEditor(index)}/>
            {
                state.editingRow !== index &&
                <label onClick={()=>showEditor(index)} className="wbdv-row wbdv-title clickable"
                >{course.title}</label>
            }
            {state.editingRow === index &&
            <input className="course-edit-card" id="course-edit" onChange={(e) => updateForm({
                newCourseTitle: e.target.value
            })}
                   value={state.newCourseTitle}/>}

        </div>
        <div className="clickable wbdv-card-buttons" >
        {state.activeRow === index &&
        state.editingRow !== index &&
        <button className="btn wbdv-row wbdv-button wbdv-delete"
                onClick={() => deleteCourse(course)
                }>
            <i className="fas fa-trash-alt fa-1x wbdv-button wbdv-delete"/>
        </button>
        }
        {state.activeRow === index &&
        state.editingRow !== index &&
        <button className="btn wbdv-row wbdv-button wbdv-edit"
                onClick={() => editingRow(index, course)}>
            <i className="fas fa-edit fa-1x wbdv-button wbdv-edit"/>
        </button>
        }
        {state.editingRow === index &&
        <button className="btn wbdv-row wbdv-button wbdv-save"
                onClick={() => editingRow(index, course)}>
            <i className="fas fa-check fa-1x wbdv-button wbdv-save"/>
        </button>
        }
        </div>
    </div>
export default CourseCardComponent;