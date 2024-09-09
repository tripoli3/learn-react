import React from 'react';

const PasswordField = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="new-password"
            className="input-field"
            placeholder="Password"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default PasswordField;
