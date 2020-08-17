import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const BeforeBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  /* width: 960px; */
  /* margin: 0 auto; */

  img {
    width: 320px;
    height: 320px
  }
  button {
    background: none;
    outline: none;
    border: 1px solid;
    border-radius: 0.3em;
    cursor: pointer;
    margin-top: 2.5em;
    padding: 1em;
  }
  input {
    font-size:  16px; 
    padding:  20px 0px; 
    height:  56px; 
    border:  none; 
    border-bottom:  solid 1px rgba(0,0,0,.1); 
    background:  #fff; 
    width:  280px; 
    box-sizing:  border-box; 
    transition:  all .3s linear; 
    color:  #000; 
    font-weight:  400;
    -webkit-appearance:  none; 
    text-align: center;
    margin-top: 30px;
    &:focus {
      border-bottom:  solid 1px $primary; 
      outline: 0; 
      box-shadow:  0 2px 6px -8px rgba($primary, .45);
    }
  }
`;

const Before = ({ onChangeImage, beforeImage, handleClick, name, handleName}) => {
    return (
        <BeforeBlock>
            <label htmlFor="image">
                <input type="file" id="image" style={{ display: "none" }} onChange={onChangeImage} />
                <img src={beforeImage} />
            </label>
            <input type='text' placeholder="Name" value={name} onChange={handleName}/>
            <button onClick={handleClick}>변환하기</button>
        </BeforeBlock>
    );
};

export default Before;