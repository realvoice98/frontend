import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ImageUploading from 'react-images-uploading';
import { FaCamera } from "@react-icons/all-files/fa/FaCamera";

// 라이브러리 커스텀 실패의 흔적
// function UploadImage() {
//   const [image, setImages] = useState([]);
//   const onChange = (image, addUpdateIndex) => {
//     // data for submit
//     console.log(image, addUpdateIndex); // 이미지 업로드, 삭제, 수정 되는지 여부의 console.log
//     setImages(image);
//   };
//   console.log(ImageUploading);
//   return (
//     <>
//       <ImageUploading
//         multiple
//         value={image}
//         onChange={onChange}
//         dataURLKey="data_url"
//       >
//         {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
//           <div className="upload__image-wrapper">
//             <ImageItem>
//               <img src={imageList[0].data_url} alt="" />
//               <div className="image-item__btn-wrapper"></div>
//               {console.log(imageList[0])}
//             </ImageItem>
//             <Button onClick={onImageUpload}>사진추가</Button>
//             <Button onClick={() => onImageUpdate(image)}>수정</Button>
//             <Button onClick={() => onImageRemove(image)}>삭제</Button>
//           </div>
//         )}
//       </ImageUploading>
//     </>
//   );
// }
function UploadImage() {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <ImageWrapper>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
       {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <div className="upload__image-wrapper">
            {imageList.length === 0 ? (
              <Button className="trans" onClick={onImageUpload}>
                <FaCamera color="rebeccapurple" size="18" />
              </Button>
            ) : null}
            {imageList.map((image, index) => (
              <ImageItem key={index}>
                <img src={image['data_url']} alt="프로필 이미지" />
                <div className="image-item__btn-wrapper">
                  <Button
                    className="trans"
                    onClick={() => onImageRemove(index)}
                  >
                    삭제
                  </Button>
                </div>
              </ImageItem>
            ))}
          </div>
            )}
      </ImageUploading>
    </ImageWrapper>
  );
}
const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  .trans {
    background-color: transparent;
    color: transparent;
    &:hover {
      color: rebeccapurple;
    }
  }
  &:hover {
    Button {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
  .upload__image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
const ImageItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 15px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  background-color: transparent;
  color: rebeccapurple;
  cursor: pointer;
`;

export default UploadImage;