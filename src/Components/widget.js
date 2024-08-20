import React from 'react';

const WidgetComponent = ({ widget, onRemove }) => {
  return (
    <div className="card">
      <div className="card-header">
        {widget.title}
        <button onClick={() => onRemove(widget.id)}>X</button>
      </div>
      <div className="card-body">
        {/* Replace this with actual data visualization based on widget.data */}
        <p>Placeholder text for widget content</p>
      </div>
    </div>
  );
};

export default WidgetComponent;