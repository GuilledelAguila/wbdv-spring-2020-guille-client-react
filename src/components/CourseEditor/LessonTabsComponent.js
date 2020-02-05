import React from "react";

const LessonTabsComponent = ({hideEditor, course}) =>
    <div className="row">
        <div className="col-12 mycol">
            <ul className="nav nav-tabs nav-fill">

                <li className="nav-item">
                    <li className="navbar-brand">
                        <a className="wbdv-course-editor wbdv-close" onClick={hideEditor}>
                            <i className="fas fa-times"></i>
                        </a>
                        <a> </a>
                        <a className="tittle">{course.title}</a>
                    </li>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Build
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Pages
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Theme
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Store
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Apps
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Settings
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link wbdv-new-page-btn">
                        <i className="fas fa-plus"></i>
                    </a>
                </li>

            </ul>

        </div>
    </div>

export default LessonTabsComponent
