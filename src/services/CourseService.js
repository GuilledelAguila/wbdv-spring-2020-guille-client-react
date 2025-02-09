import {API_URL} from "../constants";
import {deleteLesson, findLessonForCourse} from "./LessonService";

export const createCourse = (course) =>
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllCourses = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

export const deleteCourse = async (courseId) =>
{
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}

export const findCourseById = (courseId) =>
    fetch(`${API_URL}/${courseId}`)
        .then(response => response.json())


export const updateCourse = (courseId, course) =>
    fetch(`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createCourse,
    findCourseById
}