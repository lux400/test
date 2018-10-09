import * as React from 'react';
import { withFormik } from 'formik';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const rates = Array.from({ length: 5 }, (v, i) => i + 1);

class Form extends React.PureComponent {
  render() {
    const { values, handleChange, handleBlur, handleSubmit } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="rate">Rate</InputLabel>
            <Select
              name="rate"
              id="rate"
              value={values.rate}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              {rates.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit">Rate</Button>
        </form>
      </React.Fragment>
    );
  }
}

const ImageForm = withFormik({
  mapPropsToValues: (props) => props.initialValues,

  handleSubmit: (values, props) => {
    const { onSubmit } = props.props;
    onSubmit(values);
  },
  displayName: 'ImageForm',
})(Form);

export default ImageForm;
