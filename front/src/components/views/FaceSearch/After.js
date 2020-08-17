import React, { useState, useEffect, Fragment } from "react";
import styled, { css } from "styled-components";
import a from './1.jpg';
import b from './2.jpg';
import c from './3.jpg';
import defaultImg from './go-icon.png';

const imgArray = [a, b, c];
export default function After({ afterImage, imgName, similarity, toggle }) {
    const nProfile = 3; // 서버에서 가져온 이미지의 갯수에 따라 변경되어야 할 것 같습니다.
    const nProfileDiv = Array(nProfile).fill().map((v, i) => {
        return <Profiles style={{ backgroundImage: `url(${imgArray[i]})` }}></Profiles>;
    })
    return (
        <ImageWrapper>
            {imgName !== '' && toggle===false ?
                <div>
                    <div>{`${imgName}씨 아닐까요? 🤔`}</div>
                    <div>{`유사도 : ${similarity} %`}</div>
                </div>
                :
                null
            }
            {toggle === false
                ?
                <OldImage>
                    <img src={afterImage} />
                </OldImage>
                :
                <div>잠시만 기다려주세요...</div>
            }
            {/* <p>Old Image</p> */}

            {afterImage !== defaultImg && toggle === false ? <div style={{ display: 'inline-block', verticalAlign: 'top', paddingTop: '15px' }}>비슷한 인물들은? </div> : null}
            {afterImage !== defaultImg && toggle === false ? nProfileDiv : null}
        </ImageWrapper>

    );
};

const ImageWrapper = styled.div`
  border: 1px solid #aaa;
  border-radius: 23px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    background: #eee;
  }
`;

const OldImage = styled.div`
    width: 320px;
    height: 320px;
    padding: 10px;
    margin-left : 60%;
    margin-top : 10%;
    border: 2px solid gray;
    border-radius: 23px;
    margin: 0;
    img {
        width: 100%;
        height: 100%;
    }
`;

const Profiles = styled.div`
    border: 0.5px solid #aaa;
    padding: 1px ; 
    width: 70px;
    height: 70px;
    border-radius:50%;
    display: inline-block;
    margin:2px;
    background-size: cover;
    background-repeat: no-repeat;
`;
const ProfileImg = styled.img`

      height:100%;
      width:100%;

`;
const OverProfile = styled.div`
    border: 0.5px solid #aaa;
    padding: 1px ; 
    width: 70px;
    height: 70px;
    border-radius:50%;
    display: inline-block;
    margin:2px;
    color:#aaa;
`;
const OverNum = styled.div`
    display:inline-block;
`;