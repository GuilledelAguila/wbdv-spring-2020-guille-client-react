
import {
    CREATE_LESSON,
    DELETE_LESSON,
    FIND_LESSONS_FOR_COURSE,
    FIND_ALL_LESSONS,
    EDIT_LESSON, UPDATE_NEW_LESSON_TITLE,
    SAVE_EDIT, SET_COURSE_TITTLE
} from "../actions/lessonActions";



const initialState = {
    editingLesson: -1,
    coursetitle: "",
    newLessonTitle: "",
    lessons: []


}

const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case SET_COURSE_TITTLE:
            return {
                ...state,
                coursetitle: action.courseTitle
            }
        case FIND_LESSONS_FOR_COURSE:
            return {
                ...state,
                lessons: action.lessons
            }
        case FIND_ALL_LESSONS:
            return {
                ...state,
                lessons: action.lessons
            }
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            }
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonId)
            }
        case EDIT_LESSON:
            return {
                ...state,
                editingLesson: action.editingLesson,
                newLessonTitle: action.lessonTitle
            }
        case UPDATE_NEW_LESSON_TITLE:
            return {
                ...state,
                newLessonTitle: action.newLessonTitle
            }

        case SAVE_EDIT:
            return {
                ...state,
                editingLesson: -1
            }
        default:
            return {...state}
    }
}

export default lessonReducer
