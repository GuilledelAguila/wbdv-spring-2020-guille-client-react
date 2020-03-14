import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { createTopic, deleteTopic, editTopic,
    updateForm, saveEdit, findTopicsForLesson, findAllTopics} from "../../actions/topicActions";
import topicService from '../../services/TopicService';



class TopicPillsComponent extends React.Component {
    componentDidMount() {
        this.props.lessonId && this.props.findTopicsForLesson(this.props.lessonId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.lessonId !== this.props.lessonId){
            this.props.lessonId && this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render(){
        return(

            <ul className="nav nav-pills wbdv-topic-pill-list">
                {this.props.topics.topics && this.props.topics.topics.map(topic =>
                    this.props.lessonId === topic.lessonId &&

                    <Link className="nav-item Link" key={topic.id}
                          to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}
                          >
                        <li className="nav-link wbdv-topic-pill" href="#"
                            style={
                                parseInt(this.props.topicId) === topic.id
                                   ? { background: "#0f64f2", color: 'white' }
                                   : {}
                            }>


                            {(this.props.topics.editingTopic !== topic.id ||
                                parseInt(this.props.topicId) !== topic.id) && topic.title}

                            { this.props.topics.editingTopic === topic.id &&
                            parseInt(this.props.topicId) === topic.id &&
                            <input  id="course-edit" onChange={(e) =>
                                this.props.updateForm(e.target.value)}
                                    value={this.props.topics.newTopicTitle}/>
                            }

                            {this.props.topics.editingTopic === topic.id &&
                            parseInt(this.props.topicId) === topic.id &&
                            <button className="btn wbdv-module-item-delete-btn"
                                    onClick={() => this.props.deleteTopic(topic.id)}>
                                <Link className="btn wbdv-module-item-delete-btn"
                                      to={`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}>
                                    <i className="fas fa-times"/>
                                </Link>
                            </button>
                            }

                            { this.props.topics.editingTopic === topic.id &&
                            parseInt(this.props.topicId) === topic.id &&
                            <button className="btn wbdv-row wbdv-button wbdv-save"
                                    onClick={() => this.props.saveEdit(topic, topic.id, this.props.topics.newTopicTitle)}>
                                <i className="fas fa-check fa-1x wbdv-button wbdv-save"/>
                            </button>
                            }

                            {(this.props.topics.editingTopic !== topic.id ||
                                parseInt(this.props.topicId) !== topic.id) &&
                            <button className="btn wbdv-row wbdv-button wbdv-edit"
                                    onClick={() => this.props.editTopic(topic.id, topic.title)}>
                                <i className="fas fa-edit fa-1x wbdv-button wbdv-edit"/>
                            </button>
                            }

                        </li>

                    </Link>
                )}
                {this.props.lessonId &&
                    <li className="nav-item">
                        <button className="btn wbdv-topic-add-btn" onClick={() =>
                            this.props.createTopic(this.props.lessonId)}>
                            <i className="fas fa-plus"></i>
                        </button>
                    </li>
                }
            </ul>

        )

    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics
    }
}



const dispatchToPropertyMapper = (dispatch) => {
    return {
        editTopic: (topicId, topicTitle) =>
            dispatch(editTopic(topicId, topicTitle))
        ,
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics =>
                    dispatch(findTopicsForLesson(actualTopics))
                )

        ,
        updateForm: (newTopicTitle) => {
            dispatch(updateForm(newTopicTitle))
        }
        ,
        saveEdit: (topic, topicId, newTitle) => {
            topic.title = newTitle;
            topicService.updateTopic(topicId, topic)
                .then(dispatch(saveEdit(newTitle)))
        },
        findAllTopics: () =>
            topicService.findAllTopicss()
                .then(actualTopics =>
                    dispatch(findAllTopics(actualTopics))),
        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status => {
                    dispatch(deleteTopic(topicId))
                }),
        createTopic: (moduleId) =>
            topicService.createTopic(moduleId)
                .then(actualTopic =>
                    dispatch(createTopic(actualTopic)))

    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent)




