import React from "react";
import "./dialog.css";
function Dialog() {
  const pickerRef = React.useRef(null);

  function handleClick() {
    if (pickerRef.current) {
      pickerRef.current.click();
    }
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={pickerRef}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default Dialog;
