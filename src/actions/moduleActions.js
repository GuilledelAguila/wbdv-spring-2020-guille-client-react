
export const CREATE_MODULE = "CREATE_MODULE";
export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
})

export const DELETE_MODULE = "DELETE_MODULE";
export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
})

export const EDIT_MODULE = "EDIT_MODULE";
export const editModule = (moduleId, moduleTitle) => ({
    type: EDIT_MODULE,
    editingModule: moduleId,
    moduleTitle: moduleTitle
})

export const UPDATE_NEW_MODULE_TITLE = "UPDATE_NEW_MODULE_TITLE";
export const updateForm = (newModuleTitle) => ({
    type: UPDATE_NEW_MODULE_TITLE,
    newModuleTitle: newModuleTitle
})

export const SAVE_EDIT = "SAVE_EDIT";
export const saveEdit = (newModuleTitle) => ({
    type: SAVE_EDIT,
    newModuleTitle: newModuleTitle
})

export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";
export const findModulesForCourse = (actualModules) => ({
    type: FIND_MODULES_FOR_COURSE,
    modules: actualModules
})


export const FIND_ALL_MODULES = "FIND_ALL_MODULES";
export const findAllModules = (actualModules) => ({
    type: FIND_ALL_MODULES,
    modules: actualModules
})