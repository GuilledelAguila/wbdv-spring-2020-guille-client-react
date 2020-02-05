import React from "react";

const WidgetList = () =>
    <div className="container">
        <form className="wbdv-topic-form">
            <div className="form-group row justify-content-end">
                <button className="btn btn-primary btn-inline wbdv-topic-save-btn">
                    Save
                </button>
                <button className="btn wbdv-topic-toggle-btn">Preview
                    <i className="fas fa-toggle-on"></i>
                </button>
            </div>
            <div className="form-group row">
                <div className="col">
                    <h3>Heading Widget</h3>
                </div>
                <div className="col d-flex justify-content-end">
                    <button className="btn btn-primary wbdv-widget-arrow-up-btn wbdv-widget-btn">
                        <i className="fas fa-arrow-up"></i>
                    </button>
                    <button className="btn btn-primary wbdv-widget-arrow-up-btn wbdv-widget-btn">
                        <i className="fas fa-arrow-down"></i>
                    </button>
                    <button className="btn btn-secondary btn-md dropdown-toggle wbdv-widget-heading-btn wbdv-widget-btn"
                            type="button" data-toggle="dropdown"
                            aria-expanded="false">
                        Heading
                    </button>
                    <button className="btn btn-primary wbdv-widget-cross-btn wbdv-widget-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

            </div>
            <div className="form-group row">
                <div className="col">
                    <input className="form-control wbdv-field wbdv-topic-heading-text"
                           placeholder="Heading Text"/>
                </div>
            </div>
            <div className="form-group row">

                <div className="col">
                    <select className="form-control wbdv-field wbdv-topic-heading-1"
                            placeholder="Heading 1">
                        <option value="Heading 1" selected="Heading 1">Heading 1</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <div className="col">
                    <input className="form-control wbdv-field wbdv-topic-heading-name"
                           placeholder="Widget name"/>
                </div>
            </div>
            <h3>Preview</h3>
            <h1>Heading Text</h1>
            <button className="btn btn-primary wbdv-widget-add-btn wbdv-widget-btn">
                <i className="fas fa-plus-circle"></i>
            </button>


        </form>
    </div>

export default WidgetList