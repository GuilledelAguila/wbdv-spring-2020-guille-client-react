import React from "react";

const TopicPillsComponent = () =>
    <ul className="nav nav-pills wbdv-topic-pill-list">
        <li className="nav-item">
            <a className="nav-link wbdv-topic-pill" href="#">Topic 1</a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-topic-pill" href="#">Topic 2</a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-topic-pill" href="#">Topic 3</a>
        </li>
        <li className="nav-item">
            <a className="nav-link wbdv-topic-pill" href="#">Topic 4</a>
        </li>
        <li className="nav-item">
            <button className="btn wbdv-topic-add-btn">
                <i className="fas fa-plus"></i>
            </button>
        </li>
    </ul>

export default TopicPillsComponent
