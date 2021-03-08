import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../utilities/utilities';
import ErrorMessage from './ErrorMessage';

const Wrapper = styled.div`
  width: 100vw;
  height: 900px;
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Form = styled.form`
  width: 50%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 1.75em;
  margin-bottom: 0.5em;
  color: ${colors.darkGrey};
`;

const Input = styled.input`
  padding: 10px;
  background-color: ${colors.lightGrey};
  border: 1px ${colors.mediumGrey} solid;
  border-radius: 3px;
`;

const Checkbox = styled.input`
  width: 1em;
  height: 1em;
  background: ${colors.lightGrey};
`;

const TextArea = styled.textarea`
  resize: none;
  padding: 5px;
  background-color: ${colors.lightGrey};
  border: 1px ${colors.mediumGrey} solid;
  border-radius: 3px;
`;

const SendButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 1em;
  background-color: ${colors.themePurple};
  font-size: 1em;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 1.75em;
`;

export default function ContrivedForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [firstSubmit, setFirstSubmit] = useState(true);
  const [toDelete, setToDelete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstSubmit(false);
    if (!fields.name || !fields.email || !fields.message) return;
    // make post/put req
    console.log(fields);
    clearForm();
  };

  const handleChange = (e) => {
    setFields(fields => {
      return { ...fields, [e.target.name]: e.target.value };
    });
  };

  const clearForm = () => {
    setToDelete(false);
    setFirstSubmit(true);
    setFields({ name: '', email: '', message: '' });
    document.getElementById('contrived-form').reset();
  };

  return (
    <Wrapper>
      <Form id="contrived-form" onSubmit={handleSubmit}>
        <Title>Contrived Form</Title>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          defaultValue={fields.name}
        >
        </Input>
        <ErrorMessage show={!toDelete && !fields.name.length && !firstSubmit}>
          Please provide your name.
        </ErrorMessage>

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          defaultValue={fields.email}
        >
        </Input>
        <ErrorMessage show={!fields.email.length && !firstSubmit}>
          Please provide a valid email address.
        </ErrorMessage>

        <Label>Message</Label>
        <TextArea
          name="message"
          rows="10"
          onChange={handleChange}
          defaultValue={fields.message}
        />
        <ErrorMessage show={!toDelete && !fields.message.length && !firstSubmit}>
          Uhhhhh... what can we help you with?
        </ErrorMessage>

        <Label>
          <Checkbox
            type="checkbox"
            name="delete"
            onChange={(e) => setToDelete(e.target.checked)}
          >
          </Checkbox>
          Delete my account
        </Label>
        <SendButton>Send</SendButton>
      </Form>
    </Wrapper>
  );
}
