import React, { useState } from "react";

function AdminPage() {

  return (
    <div className="admin-page">
      <h2>Admin Page</h2>
      <div className="operations">
      <a href="/CollectionForm"><button>Add Collection</button></a>
      <a href="/CollectionForm"><button>Remove Collection</button></a>
      <a href="/CollectionForm"><button>Edit Collection</button></a>
      </div>
    </div>
  );
}

export default AdminPage;
