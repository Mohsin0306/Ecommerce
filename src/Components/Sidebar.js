import React, { useState } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Button
        variant="primary"
        onClick={() => setCollapsed(!collapsed)}
        className="mb-3"
      >
        {collapsed ? 'Show Categories' : 'Hide Categories'}
      </Button>
      <ListGroup>
        <ListGroup.Item>Value of the Day</ListGroup.Item>
        <ListGroup.Item>Top 100 Offers</ListGroup.Item>
        <ListGroup.Item>New Arrivals</ListGroup.Item>
        <ListGroup.Item>Computers & Laptops</ListGroup.Item>
        <ListGroup.Item>Cameras & Photo</ListGroup.Item>
        {/* Add more categories as needed */}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
