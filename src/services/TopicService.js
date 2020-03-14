import {API_URL} from "../constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
        .then(response => response.json())


export const deleteTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateTopic = (topicId, topic) =>
    fetch(`http://localhost:8080/api/topics/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const createTopic = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify({lessonId: lessonId, title: "New Topic"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllTopics = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/guille/topics")
        .then(response => response.json())

export default {
    deleteTopic,
    findTopicsForLesson,
    updateTopic,
    createTopic,
    findAllTopics
}
