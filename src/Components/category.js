import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget, removeWidget } from './actions';

const CategoryComponent = ({ category }) => {
  const dispatch = useDispatch();
  const [newWidget, setNewWidget] = useState({ name: '', text: '' });
  const [showAddCategory, setShowAddCategory] = useState(false);

  const handleAddWidget = () => {
    // Generate a unique ID for the new widget
    const newWidgetId = generateUniqueId();
    const widgetToAdd = { ...newWidget, id: newWidgetId };
    dispatch(addWidget(category.title, widgetToAdd));
    setNewWidget({ name: '', text: '' }); // Clear the form
  };

  const handleRemoveWidget = (widgetId) => {
    dispatch(removeWidget(category.title, widgetId));
  };

  const toggleAddCategory = () => {
    setShowAddCategory(!showAddCategory);
  };

  return (
    <div className="card">
      <div className="card-header">
        {category.title}
        <button onClick={toggleAddCategory}>Add Category</button>
      </div>
      <div className="card-body">
        {category.widgets.map(widget => (
          <WidgetComponent key={widget.id} widget={widget} onRemove={handleRemoveWidget} />
        ))}
        {showAddCategory && (
          <div>
            <input type="text" placeholder="Widget Name" value={newWidget.name} onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })} />
            <textarea placeholder="Widget Text" value={newWidget.text} onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })} />
            <button onClick={handleAddWidget}>Add Widget</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryComponent;