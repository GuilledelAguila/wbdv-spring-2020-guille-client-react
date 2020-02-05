import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
const CourseEditorComponent = ({hideEditor, course}) =>

    <div className="container-fluid">
        <LessonTabsComponent
            hideEditor={hideEditor}
            course={course}

        />
        <div className="row last-row">
            <ModuleListComponent/>
            <div className="col-9 mycol">
            <TopicPillsComponent/>
            <WidgetListComponent/>
            </div>
        </div>

    </div>


export default CourseEditorComponent
