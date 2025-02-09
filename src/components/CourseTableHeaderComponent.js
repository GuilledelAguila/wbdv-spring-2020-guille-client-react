import React from "react";
import {Link} from "react-router-dom";

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
                <Link className="btn wbdv-button wbdv-grid-layout" onClick={toggle} to={`/grid`}>
                    <i className="fas fa-grip-horizontal"/>
                </Link>
            }
            {layout=== 'grid' &&
            <Link className="btn wbdv-button wbdv-list-layout" onClick={toggle} to={`/table`}>
                <i className="fas fa-list"/>
            </Link>
            }

            <button className="btn wbdv-header wbdv-button wbdv-sort">
                <i className="fas fa-sort-alpha-up"/>
            </button>

        </th>
    </tr>
    </thead>



export default CourseTableHeaderComponent
