import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {Link} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicsReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/WidgetReducer";


const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons: lessonReducer,
    topics: topicsReducer,
    widgets: widgetReducer
})

const store = createStore(rootReducer)

const CourseEditorComponent = ({history, courseId, moduleId, lessonId, topicId, layout}) =>
    <Provider store={store}>
        <div className="container-fluid">
            <LessonTabsComponent
                history={history}
                courseId={courseId}
                lessonId={lessonId}
                moduleId={moduleId}
                layout={layout}

            />
            <div className="row last-row">
                <ModuleListComponent
                    history={history}
                    courseId={courseId}
                    moduleId={moduleId}
                />
                <div className="col-9">
                <TopicPillsComponent
                    history={history}
                    courseId={courseId}
                    lessonId={lessonId}
                    moduleId={moduleId}
                    topicId={topicId}
                />
                <WidgetListComponent topicId={topicId} />
                </div>
            </div>

        </div>
    </Provider>

export default CourseEditorComponent
