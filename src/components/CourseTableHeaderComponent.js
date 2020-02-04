import React from "react";

const CourseTableHeaderComponent = () =>
    <thead>
    <tr>
        <th className="wbdv-header wbdv-title" scope="col">Title</th>
        <th className="wbdv-header wbdv-owner tablecollapseownedby" scope="col">
            <label>Owned by</label>
            <button className="btn">
                <i className="fas fa-sort-down"></i>
            </button>
        </th>
        <th className="wbdv-header wbdv-last-modified tablecollapselastmodified" scope="col">Last Modified by me</th>
        <th scope="col">
            <button className="btn wbdv-button wbdv-grid-layout">
                <i className="fas fa-grip-horizontal"></i>
            </button>
            <button className="btn wbdv-header wbdv-sort">
                <i className="fas fa-sort-alpha-up"></i>
            </button>
            <button className="btn wbdv-button wbdv-list-layout">
                <i className="fas fa-list"></i>
            </button>
        </th>
    </tr>
    </thead>



export default CourseTableHeaderComponent
