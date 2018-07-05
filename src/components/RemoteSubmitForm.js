import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import SubmitButton from './SubmitButton'
import submit from './submit';



const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const RemoteSubmitForm = props => {
  const { error, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={renderField}
        label="Title"
      />
      <Field
        name="category"
        type="text"
        component={renderField}
        label="Category"
      />
      <Field
        name="serves"
        type="text"
        component={renderField}
        label="Serves"
      />
      <Field
        name="prep_time"
        type="text"
        component={renderField}
        label="Prep Time"
      />
      <Field
        name="cook_time"
        type="text"
        component={renderField}
        label="Cook Time"
      />
      <Field
        name="total_time"
        type="text"
        component={renderField}
        label="Total Time"
      />
      <Field
        name="ingredients"
        type="text"
        component={renderField}
        label="Ingredients"
      />
      <Field
        name="directions"
        type="text"
        component={renderField}
        label="Directions"
      />
      {error && <strong>{error}</strong>}
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}


export default reduxForm({
	form: 'remoteSubmit',
	onSubmit: submit
})(RemoteSubmitForm)

