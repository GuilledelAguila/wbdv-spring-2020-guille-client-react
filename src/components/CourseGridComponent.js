import React from "react";
import CourseTableHeaderComponent from "./CourseTableHeaderComponent";
import CourseCardComponent from "./CourseCardComponent";


const CourseGridComponent = ({courses, deleteCourse, showEditor, state, selectedRow, editingRow, editRow, toggle, updateForm}) =>
    <React.Fragment>
        <table className="table table-hover">
            <CourseTableHeaderComponent
                layout={state.layout}
                toggle={toggle}
            />
        </table>

        <div className="container">
            <div className="row">
            {
                    courses.map((course, index) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 course-card-col">
                                    <CourseCardComponent
                                        course={course}
                                        showEditor={showEditor}
                                        deleteCourse={deleteCourse}
                                        state={state}
                                        selectedRow={selectedRow}
                                        editingRow={editingRow}
                                        index={index}
                                        editRow={editRow}
                                        updateForm={updateForm}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>


    </React.Fragment>;

export default CourseGridComponent
