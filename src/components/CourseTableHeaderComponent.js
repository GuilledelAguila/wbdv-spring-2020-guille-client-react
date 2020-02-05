import React from "react";

const CourseTableHeaderComponent = ({layout,toggle}) =>
    <thead>
    <tr>
        {layout === 'table' &&
            <th className="wbdv-header wbdv-title" scope="col-4">Title</th>
        }
        {layout === 'grid' &&
            <th className="wbdv-header wbdv-title" scope="col-4">Recent Courses</th>
        }

        <th className="wbdv-header wbdv-owner tablecollapseownedby" scope="col-3">
            <label className="wbdv-owner">Owned by</label>
            <button className="btn wbdv-button">
                <i className="fas fa-sort-down"/>
            </button>
        </th>
        <th className="wbdv-header wbdv-last-modified tablecollapselastmodified" scope="col-3">Last Modified by me</th>
        <th scope="col-2">
            {layout === 'table' &&
                <button className="btn wbdv-button wbdv-grid-layout" onClick={toggle}>
                    <i className="fas fa-grip-horizontal"/>
                </button>
            }
            {layout=== 'grid' &&
            <button className="btn wbdv-button wbdv-list-layout" onClick={toggle}>
                <i className="fas fa-list"/>
            </button>
            }

            <button className="btn wbdv-header wbdv-button wbdv-sort">
                <i className="fas fa-sort-alpha-up"/>
            </button>

        </th>
    </tr>
    </thead>



export default CourseTableHeaderComponent
