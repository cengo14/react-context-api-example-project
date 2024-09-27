import React from "react";

const Error = ({ err }) => {
  return (
    <div className="text-center my-5 py-5">
      <h4>Üzgünüz bir hata oluştu</h4>
      <h3 className="text-warning">{err}</h3>
    </div>
  );
};

export default Error;
