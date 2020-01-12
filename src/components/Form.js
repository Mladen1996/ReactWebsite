import React from 'react';

import styled from 'styled-components';

const FormInput = styled.form`
  box-sizing: border-box;
  width: 100%;
`;
const Input = styled.input`
  &:hover {
    outline: none;
  }
  box-sizing: border-box;
  padding: 10px;
  border: none;
  background: white;
  width: 100%;
  margin-bottom: 10px;
  display: block;
  font-family: 'Exo 2', sans-serif;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(15, 15, 15, 0.5);
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
  }
`;
const MyTextArea = styled.textarea`
  box-sizing: border-box;
  padding: 10px 10px;
  border: none;
  background: white;
  width: 100%;
  height: 30vh;
  margin-bottom: 20px;
  display: block;
  font-family: 'Exo 2', sans-serif;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(15, 15, 15, 0.5);
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
  }
  @media (max-width: 768px) {
    height: 20vh;
  }
`;
const MyBytton = styled.button`
  border-radius: 4px;
  padding: 15px 45px;
  font-size: 1.6rem;
  color: white;
  background: pink;
  border: 1px solid red;
  &:hover {
    background: #e8114b;
    border: 1px solid #e8114b;
  }
  &:focus {
    outline: none;
  }
`;
const StyledH2 = styled.h2`
  margin: 0;
  font-size: 2rem;
  padding-bottom: 20px;
  color: rgb(66, 65, 65);
  position: relative;
  margin-bottom: 15px;
  font-family: 'Exo 2', sans-serif;
  &::after {
    background: #e8114b;
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    height: 4px;
    width: 60px;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    p {
      text-align: center;
    }
  }
`;
const ErrorMsg = styled.h3`
  font-size: 1.6rem;
  font-family: 'Exo 2', sans-serif;
  color: red;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    allSet: false,
    name: '',
    email: '',
    mesage: '',
    inputError: '',
  };
  fieldCheck = () => {
    const { name, email, mesage, allSet } = this.state;
    const myEmail = email.match(/\S+@\S.\S+\S+/);
    if (name.length && email.length && mesage.length && myEmail !== null) {
      this.setState({ ...this.state, allSet: true });
      const ObjToSend = this.state;
      console.log('SETOVANO', ObjToSend);
    } else {
      this.setState({ inputError: 'Please fill all inputs.' });
    }
  };

  onFormSubmit = () => {
    console.log(this.state);
    if (this.state.allSet) {
      this.setState({
        name: '',
        email: '',
        mesage: '',
        allSet: false,
        inputError: '',
      });
    }
  };

  render() {
    const {
      note,
      label1,
      btnText,
      placeholder1,
      placeholder2,
      placeholder3,
    } = this.props;
    const { name, email, mesage, allSet, inputError } = this.state;
    return (
      <FormInput onSubmit={this.onFormSubmit}>
        <StyledH2>{note}</StyledH2>
        <Input
          value={name}
          onChange={({ target }) => this.setState({ name: target.value })}
          type="text"
          placeholder={placeholder1}
        />
        <Input
          value={email}
          onChange={({ target }) => this.setState({ email: target.value })}
          type="email"
          placeholder={placeholder2}
        />
        <MyTextArea
          value={mesage}
          onChange={({ target }) => this.setState({ mesage: target.value })}
          placeholder={placeholder3}
        />
        {allSet ? null : <ErrorMsg>{inputError}</ErrorMsg>}
        <BtnDiv>
          <MyBytton onClick={this.fieldCheck}>{btnText}</MyBytton>
          <p>
            {label1}
            <a href="mailto:office@goluxtech.com">office@goluxtech.com </a>
          </p>
        </BtnDiv>
      </FormInput>
    );
  }
}

export default Form;
