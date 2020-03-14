
import {
    CREATE_TOPIC,
    DELETE_TOPIC,
    FIND_TOPICS_FOR_LESSON,
    FIND_ALL_TOPICS,
    EDIT_TOPIC, UPDATE_NEW_TOPIC_TITLE,
    SAVE_EDIT
} from "../actions/topicActions";



const initialState = {
    editingTopic: -1,
    coursetitle: "",
    newTopicTitle: "",
    topics: []


}

const topicReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            }
        case FIND_ALL_TOPICS:
            return {
                ...state,
                topics: action.topics
            }
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            }
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic.id !== action.topicId)
            }
        case EDIT_TOPIC:
            return {
                ...state,
                editingTopic: action.editingTopic,
                newTopicTitle: action.topicTitle
            }
        case UPDATE_NEW_TOPIC_TITLE:
            return {
                ...state,
                newTopicTitle: action.newTopicTitle
            }

        case SAVE_EDIT:
            return {
                ...state,
                editingTopic: -1
            }
        default:
            return {...state}
    }
}

export default topicReducer
