
export const CREATE_LESSON = "CREATE_LESSON";
export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
})

export const DELETE_LESSON = "DELETE_LESSON";
export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
})

export const EDIT_LESSON = "EDIT_LESSON";
export const editLesson = (lessonId, lessonTitle) => ({
    type: EDIT_LESSON,
    editingLesson: lessonId,
    lessonTitle: lessonTitle
})

export const UPDATE_NEW_LESSON_TITLE = "UPDATE_NEW_LESSON_TITLE";
export const updateForm = (newLessonTitle) => ({
    type: UPDATE_NEW_LESSON_TITLE,
    newLessonTitle: newLessonTitle
})

export const SAVE_EDIT = "SAVE_EDIT";
export const saveEdit = (newLessonTitle) => ({
    type: SAVE_EDIT,
    newLessonTitle: newLessonTitle
})

export const FIND_LESSONS_FOR_COURSE = "FIND_LESSONS_FOR_COURSE";
export const findLessonsForModule = (actualLessons) => ({
    type: FIND_LESSONS_FOR_COURSE,
    lessons: actualLessons
})


export const FIND_ALL_LESSONS = "FIND_ALL_LESSONS";
export const findAllLessons = (actualLessons) => ({
    type: FIND_ALL_LESSONS,
    lessons: actualLessons
})

export const SET_COURSE_TITTLE = "SET_COURSE_TITTLE";
export const setCourseTitle = (courseTitle) => ({
    type: SET_COURSE_TITTLE,
    courseTitle: courseTitle
})