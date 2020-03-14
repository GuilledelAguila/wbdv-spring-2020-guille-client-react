import React from "react";
import {connect} from "react-redux";
import { createModule, deleteModule, editModule,
    updateForm, saveEdit, findModulesForCourse, findAllModules} from "../../actions/moduleActions";
import moduleService from '../../services/ModuleService';
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }
    render()
    {
        return(
            <div className="col-3 mycol colstretch">
                <ul className="list-group wbdv-module-list">
                    {  this.props.modules.modules && this.props.modules.modules.map(module =>
                        <Link className="list-group-item wbdv-module-item clickable Link" key={module._id}
                              to={`/course-editor/${this.props.courseId}/module/${module._id}`}
                              style={
                                  this.props.moduleId === module._id
                                      ? { background: "#0f64f2", color: 'white' }
                                      : {}
                              }>
                            { (this.props.modules.editingModule !== module._id ||
                                this.props.moduleId !== module._id) &&
                                <span className="wbdv-module-item-title">{module.title}</span>
                            }
                            { this.props.modules.editingModule === module._id &&
                                this.props.moduleId === module._id &&
                                    <input  id="course-edit"
                                    onChange={(e) =>
                                        this.props.updateForm({
                                            newModuleTitle: e.target.value})}
                                            value={this.props.modules.newModuleTitle}/>

                            }

                            { this.props.modules.editingModule  === module._id &&
                            this.props.moduleId === module._id &&
                            <button className="btn wbdv-module-item-delete-btn"
                                    onClick={() => this.props.deleteModule(module._id)}>
                                <Link className="btn wbdv-module-item-delete-btn"
                                      to={`/course-editor/${this.props.courseId}`}>
                                    <i className="fas fa-times"/>
                                </Link>
                            </button>
                            }

                            { this.props.modules.editingModule === module._id &&
                                this.props.moduleId === module._id &&
                                <button className="btn wbdv-row wbdv-button wbdv-save"
                                    onClick={() => this.props.saveEdit(module, module._id, this.props.modules.newModuleTitle)}>
                                    <i className="fas fa-check fa-1x wbdv-button wbdv-save"/>
                                </button>

                            }
                            {(this.props.modules.editingModule !== module._id ||
                                this.props.moduleId !== module._id) &&
                                <button className="btn wbdv-row wbdv-button wbdv-edit"
                                        onClick={() => this.props.editModule(module._id, module.title)}>
                                    <i className="fas fa-edit fa-1x wbdv-button wbdv-edit"/>
                                </button>
                            }
                        </Link>
                    )}
                </ul>
                <button className="btn wbdv-module-item-add-btn"
                        onClick={() => this.props.createModule(this.props.courseId)}>
                    <i className="fas fa-plus fa-2x"/>
                </button>
            </div>
        )
}
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        editModule: (moduleId, moduleTitle) =>
            dispatch(editModule(moduleId, moduleTitle))
        ,
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch(findModulesForCourse(actualModules))),
        updateForm: (newModuleTitle) => {
            dispatch(updateForm(newModuleTitle))
        }
        ,
        saveEdit: (module, moduleId, newTitle) => {
            module.title = newTitle;
                moduleService.updateModule(moduleId, module)
                    .then(dispatch(saveEdit(newTitle)))
        },
        findAllModules: () =>
            moduleService.findAllModules()
                .then(actualModules =>
                    dispatch(findAllModules(actualModules))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => {
                    dispatch(deleteModule(moduleId))
                }),
        createModule: (courseId) =>
            moduleService.createModule(courseId)
                .then(actualModule =>
                    dispatch(createModule(actualModule)))

    }
}

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent)

