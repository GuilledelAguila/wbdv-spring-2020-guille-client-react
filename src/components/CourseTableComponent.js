import React from "react";
import CourseRow from "./CourseRow";
import CourseTableHeaderComponent from "./CourseTableHeaderComponent";

const CourseTableComponent = ({courses, deleteCourse, showEditor, state, selectedRow, editingRow, editRow}) =>



    <div>
        <table className = "table table-hover" id = "mytable">
        <CourseTableHeaderComponent/>
        <tbody >
            {
                courses.map(function(course,index){
                    return (
                        <CourseRow
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
    </div>


export default CourseTableComponent
