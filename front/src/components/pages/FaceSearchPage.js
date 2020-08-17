import React, { useState } from 'react';
import Before from '../views/FaceSearch/Before';
import After from '../views/FaceSearch/After';
import styled from 'styled-components';
import { TiArrowRightThick } from 'react-icons/ti';
import axios from 'axios';
import defaultImg from '../views/FaceSearch/go-icon.png';

const encodeBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const FaceSeachBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 10em;
    margin: 1em;
  }
`;

const FaceSearchPage = () => {
  const [beforeImage, setBeforeImage] = useState(defaultImg);
  const [afterImage, setAfterImage] = useState(defaultImg);
  const [imgName,setImgName] = useState('');
  const [similarity,setSimilarity] = useState('');
  const [toggle,setToggle] = useState(false);

  const [name, setName] = useState('') ;

  const onChangeImage = async (e) => {
    const base64Img = await encodeBase64(e.target.files[0]);
    setBeforeImage(base64Img);
  }
  
  const handleClick = async (e) => {
    setToggle(true);
    try{
        const res = await axios.post("https://relay08-server.herokuapp.com/ai/compare-faces", { compared_face:beforeImage });
        setAfterImage(`data:image/jpeg;base64,${res.data.user_image}`);
        setImgName(res.data.user_name+'씨 아닐까요? 🤔');
        setSimilarity(res.data.similarity);
        setToggle(false);

    }
    catch(e){
        setAfterImage(defaultImg);
        setImgName("유사한 사람을 찾지 못하였습니다!");
        setSimilarity(0);
        setToggle(false);
    }
    // setAfterImage(res.data.image);
  }

  const handleName = (e) => {
    const name = e.target.value ; 
    console.log(`your name is ${name}`);
    setName(name) ;
  }


  return (
    <FaceSeachBlock>
      <Before onChangeImage={onChangeImage} beforeImage={beforeImage} handleClick={handleClick} name={name} handleName={handleName} />
      <TiArrowRightThick />
      <After afterImage={afterImage} imgName={imgName} similarity={similarity} toggle={toggle}/>
    </FaceSeachBlock>
  );
};

export default FaceSearchPage;