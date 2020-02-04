import React from "react";

const CourseTableHeaderComponent = ({layout}) =>
    <thead>
    <tr>
        <th className="wbdv-header wbdv-title" scope="col">Title</th>
        <th className="wbdv-header wbdv-owner tablecollapseownedby" scope="col">
            <label className="wbdv-owner">Owned by</label>
            <button className="btn wbdv-button">
                <i className="fas fa-sort-down"/>
            </button>
        </th>
        <th className="wbdv-header wbdv-last-modified tablecollapselastmodified" scope="col">Last Modified by me</th>
        <th scope="col">
            <button className="btn wbdv-button wbdv-grid-layout">
                <i className="fas fa-grip-horizontal"/>
            </button>

            <button className="btn wbdv-header wbdv-sort">
                <i className="fas fa-sort-alpha-up"/>
            </button>

        </th>
    </tr>
    </thead>



export default CourseTableHeaderComponent
