import {
    CREATE_MODULE,
    DELETE_MODULE,
    EDIT_MODULE,
    UPDATE_NEW_MODULE_TITLE,
    SAVE_EDIT
} from "../actions/moduleActions";

const initialState = {
    editingModule: -1,
    newModuleTitle: "",
    modules: [
        {_id: "123", title: "Module 1 123"},
        {_id: "234", title: "Module 2 234"},
        {_id: "345", title: "Module 3 345"}
    ]

}

const moduleReducer = (state = initialState, action) => {
    switch(action.type) {
        // TODO: move all strings to constants
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            }
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.moduleId)
            }
        case EDIT_MODULE:
            return {
                ...state,
                editingModule: action.editingModule,
                newModuleTitle: action.moduleTitle
            }
        case UPDATE_NEW_MODULE_TITLE:
            return {
                ...state,
                newModuleTitle: action.newModuleTitle.newModuleTitle
            }

        case SAVE_EDIT:
            return {
                ...state,
                editingModule: -1
            }
        default:
            return {...state}
    }
}

export default moduleReducer
