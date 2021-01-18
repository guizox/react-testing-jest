import React from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = ({ value, ...rest }) => {
  const [state, setState] = React.useState(value);
  const [enter, setEnter] = React.useState(false);

  return (
    <TextField
      data-testid="textfield"
      value={state}
      onChange={(e) => setState(e.target.value)}
      onKeyPress={(e) => {
        if (e.charCode === 13) {
          setEnter(!enter);
        }
      }}
      style={{ background: enter ? "red" : "white" }}
      {...rest}
    />
  );
};

export default TextFieldComponent;
