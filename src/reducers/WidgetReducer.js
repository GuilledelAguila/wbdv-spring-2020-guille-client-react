const widgets = [
    {id: "123", title: "W123"}
]

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const orderA = a.widgetOrder;
    const orderB = b.widgetOrder;

    let comparison = 0;
    if (orderA > orderB) {
        comparison = 1;
    } else if (orderA < orderB) {
        comparison = -1;
    }
    return comparison;
}

const widgetReducer = (
    state = {widgets: widgets}, action) => {
    switch (action.type) {
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => widget.id === action.widget.id ? action.widget : widget)
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets.sort(compare)
            }
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        default:
            return state
    }
}

export default widgetReducer