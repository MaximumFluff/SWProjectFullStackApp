import DatePicker from "material-ui/DatePicker";
import MenuItem from "material-ui/MenuItem";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";
import SelectField from "material-ui/SelectField";
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

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
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

const renderDatePickerModified = ({
  input,
  label,
  meta: { touched, error },
  children
}) => (
  <DatePicker
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    hintText="dateModified"
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

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
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
            name="title"
            label="title"
            component={renderTextField}
          />
        </div>
        <div>
          <Field
            name="description"
            label="description"
            component={renderTextField}
          />
        </div>
        <div>
          <Field name="budget" label="budget" component={renderTextField} />
        </div>
        <div>
          <Field
            name="readyForComments"
            label="readyForComments"
            style={{width: 1000, paddingLeft: '43%', paddingTop: 20}}
            component={renderRadioGroup}
          >
            <RadioButton value="1" label="yes" />
            <RadioButton value="0" label="no" />
          </Field>
        </div>
        <div>
          <Field
            name="peopleNeeded"
            label="peopleNeeded"
            component={renderTextField}
          />
        </div>
        <div>
          <Field name="creationDate" component={renderDatePicker} />
        </div>
        <div>
          <Field name="lastModified" component={renderDatePickerModified} />
        </div>
        <div>
          <Field
            name="categoryId"
            component={renderSelectField}
            label="categoryId role"
          >
            <MenuItem
              value="182"
              primaryText="Nioh is an awesome game to play"
            />
            <MenuItem
              value="192"
              primaryText="Pencil is a great tool for writing"
            />
            <MenuItem
              value="202"
              primaryText="Potatoes are a very nice vegetable to eat"
            />
            <MenuItem
              value="212"
              primaryText="Tomatoes are red versions of potatoes"
            />
          </Field>
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
  form: "NewIdea"
})(NewIdeaForm);
