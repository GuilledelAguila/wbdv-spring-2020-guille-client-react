import React from "react";


class CourseRowComponent extends React.Component {
    render() {
        return(
            <tr className="wbdv-row wbdv-course" onClick={(e) => this.props.selectedRow(this.props.index, e)}
                style={
                    this.props.state.activeRow === this.props.index
                        ? { background: "#0f64f2", color: 'white' }
                        : { background: 'white' }
                }
                >
                <td className="clickable">
                    <i className="fas fa-file-alt wbdv-row wbdv-icon clickable" onClick={()=>this.props.showEditor(this.props.index)}/>
                    {
                        this.props.state.editingRow !== this.props.index &&
                        <label className="wbdv-title clickable" onClick={()=>this.props.showEditor(this.props.index)}
                        >{this.props.course.title}</label>
                    }
                    {this.props.state.editingRow === this.props.index &&
                    <input  id="course-edit"
                           onChange={(e) => this.props.updateForm({
                               newCourseTitle: e.target.value
                           })}
                           value={this.props.state.newCourseTitle}/>}
                </td>
                <td className="wbdv-row wbdv-owner tablecollapseownedby clickable"
                    >me</td>
                <td className="wbdv-row wbdv-modified-date tablecollapselastmodified clickable"
                   >11:45 AM</td>


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
