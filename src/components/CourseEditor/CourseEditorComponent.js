import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetList from "./WidgetList";
const CourseEditorComponent = ({hideEditor}) =>

    <div className="container-fluid">
        <button onClick={hideEditor}>Close</button>
        <LessonTabs/>
        <div className="row last-row">
            <ModuleListComponent/>
            <div className="col-9 mycol">
            <TopicPills/>
            <WidgetList/>
            </div>
        </div>

    </div>


export default CourseEditorComponent
