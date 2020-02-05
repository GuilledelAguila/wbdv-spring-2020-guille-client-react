import React from "react";

const ModuleListComponent = ({modules}) =>

        <div className="col-3 mycol colstretch">
            <ul className="list-group wbdv-module-list">
                <li className="list-group-item wbdv-module-item">
                    <label className="wbdv-module-item-title">Module 1 - JQuery</label>
                    <button className="btn wbdv-module-item-delete-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="list-group-item wbdv-module-item">
                    <label className="wbdv-module-item-title">Module 2 - React</label>
                    <button className="btn wbdv-module-item-delete-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="list-group-item wbdv-module-item">
                    <label className="wbdv-module-item-title">Module 3 - Redux</label>
                    <button className="btn wbdv-module-item-delete-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="list-group-item wbdv-module-item">
                    <label className="wbdv-module-item-title">Module 4 - Native</label>
                    <button className="btn wbdv-module-item-delete-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
                <li className="list-group-item wbdv-module-item">
                    <label className="wbdv-module-item-title">Module 5 - Angular</label>
                    <button className="btn wbdv-module-item-delete-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </li>
            </ul>
            <button className="btn wbdv-module-item-add-btn">
                <i className="fas fa-plus"></i>
            </button>
        </div>

export default ModuleListComponent
