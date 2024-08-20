export const addWidget = (category, widget) => ({
  type: 'ADD_WIDGET',
  category,
  widget
});

export const removeWidget = (category, widgetId) => ({
  type: 'REMOVE_WIDGET',
  category,
  widgetId
});