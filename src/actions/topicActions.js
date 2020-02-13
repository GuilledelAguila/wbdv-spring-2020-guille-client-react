
export const CREATE_TOPIC = "CREATE_TOPIC";
export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
})

export const DELETE_TOPIC = "DELETE_TOPIC";
export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
})

export const EDIT_TOPIC = "EDIT_TOPIC";
export const editTopic = (topicId, topicTitle) => ({
    type: EDIT_TOPIC,
    editingTopic: topicId,
    topicTitle: topicTitle
})

export const UPDATE_NEW_TOPIC_TITLE = "UPDATE_NEW_TOPIC_TITLE";
export const updateForm = (newTopicTitle) => ({
    type: UPDATE_NEW_TOPIC_TITLE,
    newTopicTitle: newTopicTitle
})

export const SAVE_EDIT = "SAVE_EDIT";
export const saveEdit = (newTopicTitle) => ({
    type: SAVE_EDIT,
    newTopicTitle: newTopicTitle
})

export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const findTopicsForLesson = (actualTopics) => ({
    type: FIND_TOPICS_FOR_LESSON,
    topics: actualTopics
})


export const FIND_ALL_TOPICS = "FIND_ALL_TOPICS";
export const findAllTopics = (actualTopics) => ({
    type: FIND_ALL_TOPICS,
    topics: actualTopics
})

