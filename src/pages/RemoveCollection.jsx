import React, { useState } from "react";

function RemoveCollection() {
  const [collections, setCollections] = useState([
    { id: 1, name: "Collection 1" },
    { id: 2, name: "Collection 2" },
    { id: 3, name: "Collection 3" },
  ]);

  const handleRemove = (id) => {
    setCollections(collections.filter((collection) => collection.id !== id));
  };

  return (
    <div className="remove-collection-wrapper">
      <h2>Collections</h2>
      <ul className="collection-list">
        {collections.map((collection) => (
          <li key={collection.id} className="collection-item">
            <span>{collection.name}</span>
            <button onClick={() => handleRemove(collection.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoveCollection;
