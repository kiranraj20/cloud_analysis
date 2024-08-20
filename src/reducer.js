const initialState = {
  dashboard: {
    categories: [
      {
        title: 'CSPM Executive Dashboard',
        widgets: []
      },
      // ...other categories
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WIDGET':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          categories: state.dashboard.categories.map(category => {
            if (category.title === action.category) {
              return {
                ...category,
                widgets: [...category.widgets, action.widget]
              };
            }
            return category;
          })
        }
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        dashboard: {
          ...state.dashboard,
          categories: state.dashboard.categories.map(category => {
            if (category.title === action.category) {
              return {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.widgetId)
              };
            }
            return category;
          })
        }
      };
    default:
      return state;
  }
};