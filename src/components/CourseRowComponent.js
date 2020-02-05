import React from "react";


class CourseRowComponent extends React.Component {
    render() {
        return(
            <tr className="wbdv-row wbdv-course"
                style={
                    this.props.state.activeRow === this.props.index
                        ? { background: "#0f64f2", color: 'white' }
                        : { background: 'white' }
                }
                >
                <th className="clickable" onClick={() => this.props.selectedRow(this.props.index)}>
                    <i className="fas fa-file-alt wbdv-row wbdv-icon"/>
                    {
                        this.props.state.editingRow !== this.props.index &&
                        <a onClick={this.props.showEditor} className="wbdv-row wbdv-title clickable"
                        >{this.props.course.title}</a>
                    }
                    {this.props.state.editingRow === this.props.index &&
                    <input className="" id="course-edit" placeholder={this.props.course.title}/>}
                </th>
                <td className="wbdv-row wbdv-owner tablecollapseownedby">me</td>
                <td className="wbdv-row wbdv-modified-date tablecollapselastmodified">11:45 AM</td>


                <td>
                    {this.props.state.activeRow === this.props.index &&
                    this.props.state.editingRow !== this.props.index &&
                    <button className="btn wbdv-row wbdv-button wbdv-delete"
                            onClick={() => this.props.deleteCourse(this.props.course)
                            }>
                        <i className="fas fa-trash-alt fa-1x wbdv-button wbdv-delete"/>
                    </button>
                    }
                    {this.props.state.activeRow === this.props.index &&
                    this.props.state.editingRow !== this.props.index &&
                        <button className="btn wbdv-row wbdv-button wbdv-edit"
                        onClick={() => this.props.editingRow(this.props.index, this.props.course)}>
                        <i className="fas fa-edit fa-1x wbdv-button wbdv-edit"/>
                        </button>
                    }
                    {this.props.state.editingRow === this.props.index &&
                    <button className="btn wbdv-row wbdv-button wbdv-save"
                            onClick={() => this.props.editingRow(this.props.index, this.props.course)}>
                        <i className="fas fa-check fa-1x wbdv-button wbdv-save"/>
                    </button>
                    }

                </td>
            </tr>


        )
    }
}

export default CourseRowComponent
