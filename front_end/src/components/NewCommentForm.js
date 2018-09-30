import DatePicker from "material-ui/DatePicker";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React from "react";
import { Field, reduxForm } from "redux-form";

const style = {
  margin: 12
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const renderDatePicker = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <DatePicker
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    hintText="creationDate"
    mode="landscape"
    value={input.value !== "" ? new Date(input.value) : null}
    onChange={(event, value) => {
      console.log(value);
      input.onChange(value);
    }}
    children={children}
    textFieldStyle={{paddingBottom: 30, height: 50}}
  />
);

const NewIdeaForm = props => {
  const { handleSubmit } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            name="memberId"
            label="memberId"
            component={renderTextField}
          />
        </div>
        <div>
          <Field
            name="ideaId"
            label="ideaId"
            component={renderTextField}
          />
        </div>
        <div>
          <Field name="commentTimeStamp" type="date" component={renderDatePicker} />
        </div>
        <div>
          <Field
            name="commentLine"
            label="commentLine"
            component={renderTextField}
          />
        </div>
        <div>
          <RaisedButton
            type="submit"
            label="submit"
            primary={true}
            style={style}
          />
          <RaisedButton label="reset" secondary={true} style={style} />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "NewComment"
})(NewIdeaForm);
