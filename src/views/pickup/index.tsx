import React, { memo } from "react";

const Pickup: React.FC = () => {
  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <div className="card">
        <div className="card-body">Pickup</div>
      </div>
    </div>
  );
};

export default memo(Pickup);
