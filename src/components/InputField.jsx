import React from 'react';

const InputField = () => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="input-field"
            placeholder="Email"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default InputField;
