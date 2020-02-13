import {API_URL} from "../constants";

export const findModuleForCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/courses/${courseId}/modules`)
        .then(response => response.json())


export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/modules/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())


export const updateModule = (ModuleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/modules/${ModuleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const createModule = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/guille/courses/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify({title: "New Module"}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllModules = () =>
    fetch("https://wbdv-generic-server.herokuapp.com/api/guille/modules")
        .then(response => response.json())

export default {
    deleteModule,
    findModuleForCourse,
    updateModule,
    createModule,
    findAllModules
}
