import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { createLesson, deleteLesson, editLesson,
    updateForm, saveEdit, findLessonsForModule, findAllLessons, setCourseTitle} from "../../actions/lessonActions";
import lessonService from '../../services/LessonService';
import {findCourseById} from '../../services/CourseService';






class LessonTabsComponent extends React.Component {
    componentDidMount() {
        this.props.moduleId && this.props.findLessonsForModule(this.props.moduleId)
        this.props.findCourseById(this.props.courseId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.moduleId !== this.props.moduleId){

            this.props.moduleId && this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    render(){

        return(

            <div className="row">
                <div className="col-12 mycol">
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item col-3 ">
                            <div className="navbar-brand">
                                <Link className="wbdv-course-editor wbdv-close"
                                      to = {this.props.layout === 'grid'
                                          ? "/grid"
                                          : "/"
                                      }
                                      >
                                    <i className="fas fa-times"></i>
                                </Link>
                                <a> </a>
                                <a className="tittle">{this.props.lessons.coursetitle}</a>

                            </div>
                        </li>

                        {this.props.lessons.lessons && this.props.lessons.lessons.map(lesson =>
                            this.props.moduleId === lesson._modules &&
                            <Link className="nav-item Link" key={lesson._id}
                                  to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${lesson._id}`}
                                  style={
                                      this.props.lessonId === lesson._id
                                          ? { background: "#0f64f2", color: 'white' }
                                          : {}
                                  }>
                                <li className="nav-link">

                                    {(this.props.lessons.editingLesson !== lesson._id ||
                                        this.props.lessonId !== lesson._id) &&
                                        lesson.title}



                                    {this.props.lessons.editingLesson === lesson._id &&
                                        this.props.lessonId === lesson._id &&
                                            <input  id="course-edit" onChange={(e) =>
                                            this.props.updateForm(e.target.value)}
                                        value={this.props.lessons.newLessonTitle}/>
                                    }

                                    {this.props.lessons.editingLesson === lesson._id &&
                                    this.props.lessonId === lesson._id &&
                                    <button className="btn wbdv-module-item-delete-btn"
                                            onClick={() => this.props.deleteLesson(lesson._id)}>
                                        <Link className="btn wbdv-module-item-delete-btn"
                                              to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`}>
                                            <i className="fas fa-times"/>
                                        </Link>
                                    </button>
                                    }

                                    { this.props.lessons.editingLesson === lesson._id &&
                                    this.props.lessonId === lesson._id &&
                                    <button className="btn wbdv-row wbdv-button wbdv-save"
                                            onClick={() => this.props.saveEdit(lesson, lesson._id, this.props.lessons.newLessonTitle)}>
                                        <i className="fas fa-check fa-1x wbdv-button wbdv-save"/>
                                    </button>
                                    }

                                    {(this.props.lessons.editingLesson !== lesson._id ||
                                        this.props.lessonId !== lesson._id) &&
                                    <button className="btn wbdv-row wbdv-button wbdv-edit"
                                            onClick={() => this.props.editLesson(lesson._id, lesson.title)}>
                                        <i className="fas fa-edit fa-1x wbdv-button wbdv-edit"/>
                                    </button>
                                    }


                                </li>
                            </Link>

                        )}

                        {this.props.moduleId &&
                            <li className="nav-item col-1 wbdv-new-page-btn">
                                <button className="btn wbdv-module-item-add-btn">
                                <a className="nav-link wbdv-new-page-btn"
                                   onClick={() => this.props.createLesson(this.props.moduleId)}>
                                    <i className="fas fa-plus"></i>
                                </a>
                                </button>
                            </li>
                        }

                    </ul>

                </div>
            </div>

        )

    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons
    }
}



const dispatchToPropertyMapper = (dispatch) => {
    return {
        findCourseById : (courseId) =>
            findCourseById(courseId)
                .then(actualCourse =>
                    dispatch(setCourseTitle(actualCourse.title))),
        editLesson: (lessonId, lessonTitle) =>
            dispatch(editLesson(lessonId, lessonTitle))
        ,
        findLessonsForModule: (ModuleId) =>
            lessonService.findLessonsForModule(ModuleId)
                .then(actualLessons => dispatch(findLessonsForModule(actualLessons))),
        updateForm: (newLessonTitle) => {
            dispatch(updateForm(newLessonTitle))
        }
        ,
        saveEdit: (lesson, lessonId, newTitle) => {
            lesson.title = newTitle;
            console.log(newTitle)
            lessonService.updateLesson(lessonId, lesson)
                .then(dispatch(saveEdit(newTitle)))
        },
        findAllLessons: () =>
            lessonService.findAllLessons()
                .then(actualLessons =>
                    dispatch(findAllLessons(actualLessons))),
        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status => {
                    dispatch(deleteLesson(lessonId))
                }),
        createLesson: (moduleId) =>
            lessonService.createLesson(moduleId)
                .then(actualLesson =>
                    dispatch(createLesson(actualLesson)))

    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabsComponent)
