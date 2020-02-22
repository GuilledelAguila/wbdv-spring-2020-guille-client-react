export const updateWidget = (wid, widget) =>
    fetch(`https://cs4550-sp-20-springboot-aguila.herokuapp.com/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`https://cs4550-sp-20-springboot-aguila.herokuapp.com/api/widgets/${wid}`, {
        method: "DELETE"
    }).then(response => response.json())

export const createWidget = (topicId, widget) =>
    fetch(`https://cs4550-sp-20-springboot-aguila.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export const findWidgetsForTopic = (tid) =>
    fetch(`https://cs4550-sp-20-springboot-aguila.herokuapp.com/api/topics/${tid}/widgets`)
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