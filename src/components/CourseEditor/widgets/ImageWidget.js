import React from "react";

class HeadingWidget extends React.Component {
    state = {
        widget: this.props.widget
    }

    render() {
        return(
            <React.Fragment>
                {this.props.editing &&
                <div>
                    <div className="form-group row">
                        <div className="col">
                            <h3>{this.state.widget.type}</h3>
                        </div>

                        <div className="col d-flex justify-content-end">

                            <button className="btn btn-primary wbdv-widget-arrow-up-btn wbdv-widget-btn"
                                    onClick={() =>{
                                        this.state.widget.widgetOrder = this.state.widget.widgetOrder-1
                                        this.props.moveUp(this.state.widget)}}>

                                <i className="fas fa-arrow-up"></i>
                            </button>
                            <button className="btn btn-primary wbdv-widget-arrow-up-btn wbdv-widget-btn"
                                    onClick={() =>{
                                        this.state.widget.widgetOrder = this.state.widget.widgetOrder+1
                                        this.props.moveUp(this.state.widget)}}>
                                <i className="fas fa-arrow-down"></i>
                            </button>

                            <select className="form-control wbdv-widget-btn widget-type-selector"
                                    onChange={(e) => {
                                        const newType = String(e.target.value)
                                        this.setState(prevState => ({
                                            widget: {
                                                ...prevState.widget,
                                                type: newType
                                            }
                                        }))
                                        this.props.typeChanged(this.state.widget)
                                    }}
                                    value={this.state.widget.type}>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="IMAGE">Image</option>
                                <option value="LIST">List</option>
                            </select>

                            <button className="btn btn-primary wbdv-widget-cross-btn wbdv-widget-btn"
                                    onClick={() =>
                                        this.props.deleteWidget(this.state.widget.id)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <input className="form-control wbdv-field wbdv-topic-heading-text"
                                   onChange={(e) => {
                                       const newURL = e.target.value;
                                       this.setState(prevState => ({
                                           widget: {
                                               ...prevState.widget,
                                               url: newURL
                                           }
                                       }))
                                   }
                                   }
                                   value={this.state.widget.url}
                                   placeholder="Input URL"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <input className="form-control wbdv-field wbdv-topic-heading-name"
                                   onChange={(e) => {
                                       const newName = String(e.target.value)
                                       this.setState(prevState => ({
                                           widget: {
                                               ...prevState.widget,
                                               name: newName
                                           }
                                       }))
                                   }}
                                   value={this.state.widget.name}

                            />

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="preview-label">Preview</label>
                        <button className="btn btn-primary btn-inline wbdv-topic-save-btn"
                                onClick={() =>{
                                    this.props.save(this.state.widget)
                                }}>
                            Save
                        </button>
                    </div>
                </div>
                }

                {
                    <div className="row">
                        <div className="col-6">
                            <img src={this.state.widget.url} className="rounded float-left img-fluid" alt="IMAGE"/>
                        </div>

                    </div>

                }
            </React.Fragment>




        )
    }
}

export default HeadingWidget