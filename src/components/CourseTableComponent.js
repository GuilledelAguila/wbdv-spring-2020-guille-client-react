import React from "react";
import CourseRowComponent from "./CourseRowComponent";
import CourseTableHeaderComponent from "./CourseTableHeaderComponent";

const CourseTableComponent = ({courses, deleteCourse, showEditor, state, selectedRow, editingRow, editRow, toggle}) =>
    <table className = "table table-hover" >
            <CourseTableHeaderComponent
                layout={state.layout}
                toggle={toggle}
                />
        <tbody >
            {
                courses.map(function(course,index){
                    return (
                        <CourseRowComponent
                            course={course}
                            showEditor={showEditor}
                            deleteCourse={deleteCourse}
                            index={index}
                            state={state}
                            selectedRow={selectedRow}
                            editingRow={editingRow}
                            editRow={editRow}
                        />
                    )
                })
            }
        </tbody>
    </table>



export default CourseTableComponent
