import {API_URL} from "../constants";

export const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/modules/${moduleId}/lessons`)
        .then(response => response.json())


export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/lessons/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/lessons/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const createLesson = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/modules/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify({title: "New Lesson"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllLessons = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/guille/lessons")
        .then(response => response.json())

export default {
    deleteLesson,
    findLessonsForModule,
    updateLesson,
    createLesson,
    findAllLessons
}
