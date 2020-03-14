import React from "react";
import {connect} from "react-redux";
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import widgetService from '../../services/WidgetService';

class WidgetList extends React.Component {
    componentDidMount() {
        // this.props.findAllWidgets()
        this.props.topicId && this.props.findWidgetsForTopic(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId)
        }
    }

    state = {
        widget: {}
    }

    save = (widget) =>
    {
        this.setState(prevState => {
            return {
                widget: widget
            }

        })
        this.props.updateWidget(widget.id, widget)
    }

    typeChanged = (widget) =>
    {
        this.setState(prevState => {
            return{
                widget: widget
            }
        })
    }

    moveUp = (widget) =>
    {
        this.setState(prevState => {
            return{
                widget: widget
            }
        })
        this.props.updateWidget(widget.id, widget)
    }

    moveDown = (widget) =>
    {
        this.setState(prevState => {
            return{
                widget: widget
            }
        })
        this.props.updateWidget(widget.id, widget)

    }

    render() {
        return(

            <ul className="widget-list">
                <div className="row">
                    { this.props.topicId &&
                        <form className="wbdv-topic-form widget-top-btns">
                            <button className="btn wbdv-topic-toggle-btn wbdv-widget-btn">Preview <i
                                className="fas fa-toggle-on"> </i>
                            </button>
                            <button className="btn btn-primary wbdv-widget-add-btn wbdv-widget-btn"
                                    onClick={() =>
                                        this.props.createWidget(
                                            parseInt(this.props.topicId),
                                            {
                                                widgetOrder: this.props.widgets.length,
                                                size: 2,
                                                text: "New Widget Content",
                                                name: "New Widget Name"
                                            })}>
                                <i className="fas fa-plus-circle"></i>
                            </button>
                        </form>
                    }
                </div>
                {
                    this.props.widgets && this.props.widgets.map(widget =>
                        this.props.topicId &&
                        <li key={widget.id}>
                            {this.state.widget.id === widget.id &&
                        <div className="container widget-container">
                            <form className="wbdv-topic-form">

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    save={this.save}
                                    editing={widget.id === this.state.widget.id}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    typeChanged={this.typeChanged}
                                    moveDown={this.moveDown}
                                    moveUp={this.moveUp}
                                />

                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    save={this.save}
                                    editing={widget.id === this.state.widget.id}
                                    widget={widget}
                                    deleteWidget={this.props.deleteWidget}
                                    typeChanged={this.typeChanged}
                                    moveDown={this.moveDown}
                                    moveUp={this.moveUp}
                                />
                            }


                            </form>
                        </div>
                                }
                            {
                                this.state.widget.id !== widget.id &&
                                widget.type === "HEADING" &&
                                <div className="container widget-container">
                                    <button className="btn wbdv-widget-btn"
                                            onClick={() =>{
                                                this.setState({
                                                    widget: widget
                                                })}
                                            }>
                                        <i className="fas fa-edit fa-1x "/>
                                    </button>
                                <HeadingWidget
                                    save={this.save}
                                    editing={widget.id === this.state.widget.id}
                                    widget={widget}
                                />


                                </div>
                            }
                            {
                                this.state.widget.id !== widget.id &&
                                widget.type === "PARAGRAPH" &&
                                <div className="container widget-container">
                                    <button className="btn wbdv-widget-btn"
                                            onClick={() =>
                                                this.setState({
                                                    widget: widget
                                                })}>
                                        <i className="fas fa-edit fa-1x "/>
                                    </button>
                                    <ParagraphWidget
                                        save={this.save}
                                        editing={widget.id === this.state.widget.id}
                                        widget={widget}
                                    />


                                </div>
                            }
                        </li>
                    )
                }

            </ul>






        )
    }
}

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets
})

const dispatcherToPropertyMapper = (dispatch) => ({
    updateWidget: (wid, widget) =>
        widgetService.updateWidget(wid, widget)
            .then(status => dispatch({
                type: 'UPDATE_WIDGET',
                widget: widget
            })),
    deleteWidget: (wid) =>
        widgetService.deleteWidget(wid)
            .then(status => dispatch({
                type: 'DELETE_WIDGET',
                widgetId: wid
            })),

    createWidget: (topicId, widget) =>
        widgetService.createWidget(topicId, widget)
            .then(actualWidget => {dispatch({
                type: "CREATE_WIDGET",
                widget: actualWidget
            })}

            ),

    findWidgetsForTopic: (tid) =>
        widgetService.findWidgetsForTopic(tid)
            .then(actualWidgets => dispatch({
                type: "FIND_ALL_WIDGETS_FOR_TOPIC",
                widgets: actualWidgets
            })),

    findAllWidgets: () =>
        widgetService.findAllWidgets
            .then(actualWidgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: actualWidgets
            }))
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper)
(WidgetList)