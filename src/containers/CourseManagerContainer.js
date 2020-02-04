import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseNavComponent from "../components/CourseNavComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";



class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course Title',
        courses: [],
        activeRow: -1,
        editingRow:-1
    };

    selectedRow = (index) => {
        //Remove the if statement if you don't want to unselect an already selected item
        if (index === this.state.activeRow) {
            this.setState({
                activeRow : -1,
                editingRow : -1
            })
        } else {
            this.setState({
                activeRow : index
            })
        }
    };

    editingRow = (index, course) => {
        //Remove the if statement if you don't want to unselect an already selected item
        if (index === this.state.editingRow) {
            course.title = document.getElementById("course-edit").value
            updateCourse(course._id, course)
            this.setState({
                editingRow : -1
            })
        } else {
            this.setState({
                editingRow : index
            })
        }
    };

    componentDidMount = () => 
        findAllCourses()
        .then(courses => this.setState({
            courses: courses
        })
        );

    

    toggle = () =>
        this.setState(prevState => {
            if(prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        });



    deleteCourse = (course) => {
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState
                            .courses
                            .filter(function (crs) {
                                return crs._id !== course._id
                            })
                    })
                })
            });
        this.setState({
            activeRow:-1
        })
    };

    addCourse = () => {
        createCourse({
            title: this.state.newCourseTitle
        }).then(actualCourse => this.setState(prevState => {
                return ({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ]
                })
            })
        );
        this.state.newCourseTitle = "New Course Title";
        document.getElementById("wbdv-new-course").value=""
    };

    showEditor = () =>
        this.setState({
            showEditor: true
        });

    hideEditor = () =>
        this.setState({
            showEditor: false
        });

    updateForm = (newState) => {
        this.setState(newState)
    };

    render() {
        return(
            <div>

                {
                    this.state.showEditor &&
                    <CourseEditorComponent
                        hideEditor={this.hideEditor}/>
                }

                {
                    !this.state.showEditor &&
                    <div>
                        <CourseNavComponent
                            state = {this.state}
                            addCourse = {this.addCourse}
                            updateForm = {this.updateForm}/>
                        <button onClick={this.toggle}>Toggle</button>


                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                                state={this.state}
                                selectedRow={this.selectedRow}
                                editingRow={this.editingRow}/>
                        }
                        {
                            this.state.layout === 'grid'
                            && <CourseGridComponent
                                courses={this.state.courses}/>
                        }
                    </div>
                }

            </div>

        )
    }
}

export default CourseManagerContainer
