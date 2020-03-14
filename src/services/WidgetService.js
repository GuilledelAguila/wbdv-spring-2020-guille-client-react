export const updateWidget = (wid, widget) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`http://localhost:8080/api/widgets/${wid}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())


export const findWidgetsForTopic = (tid) =>
    fetch(`http://localhost:8080/api/topics/${tid}/widgets`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch("http://localhost:8080/api/widgets")
        .then(response => response.json())

export default {
    updateWidget,
    deleteWidget,
    createWidget,
    findWidgetsForTopic,
    findAllWidgets
}