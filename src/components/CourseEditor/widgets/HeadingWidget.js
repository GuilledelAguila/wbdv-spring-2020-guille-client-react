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
                            const newText = e.target.value;
                            this.setState(prevState => ({
                                widget: {
                                    ...prevState.widget,
                                    text: newText
                                }
                            }))
                        }
                        }
                        value={this.state.widget.text}/>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                    <select className="form-control wbdv-field wbdv-topic-heading-1"
                        onChange={(e) => {
                            const newSize = parseInt(e.target.value)
                            this.setState(prevState => ({
                                widget: {
                                    ...prevState.widget,
                                    size: newSize
                                }
                            }))
                        }}
                        value={this.state.widget.size}>
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
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
                               value={this.state.widget.name}/>
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

                    <div className="">
                        {this.state.widget.size===1 && <h1>{this.state.widget.text}</h1>}
                        {this.state.widget.size===2 && <h2>{this.state.widget.text}</h2>}
                        {this.state.widget.size===3 && <h3>{this.state.widget.text}</h3>}
                        {this.state.widget.size===4 && <h4>{this.state.widget.text}</h4>}
                        {this.state.widget.size===5 && <h5>{this.state.widget.text}</h5>}
                        {this.state.widget.size===6 && <h6>{this.state.widget.text}</h6>}

                    </div>
                }
            </React.Fragment>




        )
    }
}

export default HeadingWidget