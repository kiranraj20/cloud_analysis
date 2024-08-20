import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from './actions';

const DashboardComponent = () => {
  const dispatch = useDispatch();
  const dashboard = useSelector(state => state.dashboard);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWidgets = dashboard.categories.flatMap(category => category.widgets)
    .filter(widget => widget.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="container">
      <input type="text" placeholder="Search widgets" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {/* Display filtered widgets */}
      {filteredWidgets.map(widget => (
        // ... render widget
      ))}
    </div>
  );
};

export default DashboardComponent;