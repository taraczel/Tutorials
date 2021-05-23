import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStreams } from '../../actions';

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return(
      <div className="ui error message">
        <div className="header">{ error }</div>
      </div>
    );
  }
};

const renderInput = ({ input, Label, meta }) => {
  const caseError = `field ${meta.error && meta.touched ? 'error' : ''}`
  return (
    <div className={ caseError } >
      <label>{ Label }</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};


const SteamCreate = ({ handleSubmit, createStreams }) => {
  const onSubmit = (formValues) => {
    createStreams(formValues);
  };

  return (
    <div>
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <Field name="title" component={renderInput} Label="Title: " />
        <Field name="description" component={renderInput} Label="Description: " />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = '제목을 입력해야 합니다.';
  }

  if (!formValues.description) {
    errors.description = '설명을 입력해야 합니다.';
  }

  return errors;
}

const formWrap = reduxForm({
  form: 'CreateStream',
  validate: validate
})(SteamCreate);

export default connect(null, { createStreams })(formWrap);