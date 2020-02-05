import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseNavComponent from "../components/CourseNavComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";
import CourseTableHeaderComponent from "../components/CourseTableHeaderComponent";



class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle: 'New Course Title',
        courses: [],
        activeRow: -1,
        editingRow:-1,
        rowCards: [],
        courseEditor: -1
    };

    selectedRow = (index, e) => {
        //Remove the if statement if you don't want to unselect an already selected item
        if (e.target.tagName === 'TD' || e.target.tagName === 'DIV' ) {
            if (index === this.state.activeRow && index !== this.state.editingRow) {
                this.setState({
                    activeRow: -1,
                    editingRow: -1
                })
            } else if (index !== this.state.activeRow && this.state.editingRow !== -1) {
                this.setState({
                    activeRow: index,
                    editingRow: -1
                })
            } else {
                this.setState({
                    activeRow: index,

                })
            }
        }
    };

    editingRow = (index, course) => {
        //Remove the if statement if you don't want to unselect an already selected item
        if (index === this.state.editingRow) {
            if(document.getElementById("course-edit").value) {
                course.title = document.getElementById("course-edit").value
                updateCourse(course._id, course)
                    .then(()=>
                        this.setState({
                            editingRow : -1
                        }))
            }

            this.setState({
                editingRow : -1
            })
        } else {
            this.setState({
                editingRow : index,
                newCourseTitle : course.title
            })
        }
    };

    componentDidMount = () => 
        findAllCourses()
        .then(courses => this.setState({
            courses: courses
        })
        );

    

    toggle = () => {
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        });
        this.setState({
            activeRow: -1
        })
    };




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
            title: this.state.newCourseTitle.substring(0, 13)
        }).then(actualCourse => this.setState(prevState => {
                return ({
                    courses: [
                        ...prevState.courses,
                        actualCourse
                    ]
                })
            })
        );

        document.getElementById("wbdv-new-course").value=""
    };

    showEditor = (index) =>
        this.setState({
            showEditor: true,
            courseEditor: index,
            activeRow:index
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
                        hideEditor={this.hideEditor}
                        course={this.state.courses[this.state.courseEditor]}/>
                }

                {
                    !this.state.showEditor &&
                    <div>
                        <CourseNavComponent
                            state = {this.state}
                            addCourse = {this.addCourse}
                            updateForm = {this.updateForm}
                        />

                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                                state={this.state}
                                selectedRow={this.selectedRow}
                                editingRow={this.editingRow}
                                toggle={this.toggle}
                                updateForm={this.updateForm}
                            />
                        }

                        {
                            this.state.layout === 'grid'
                            && <CourseGridComponent
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                courses={this.state.courses}
                                state={this.state}
                                selectedRow={this.selectedRow}
                                editingRow={this.editingRow}
                                toggle={this.toggle}
                                updateForm={this.updateForm}/>
                        }

                    </div>
                }

            </div>

        )
    }
}

export default CourseManagerContainer
