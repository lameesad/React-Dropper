import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const getColor = (props) => {
    if (props.isDragAccept) {
        return '#00e676';
    }
    if (props.isDragReject) {
        return '#ff1744';
    }
    if (props.isFocused) {
        return '#2196f3';
    }
    return '#eeeeee';
}

const Container = styled.div`
  height: 151px;
  width: 450px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #ffff;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;

  p{
    font: normal normal 400 16px/25px Poppins;
    letter-spacing: 0px;
    color: #AFAFAF;

    span{
        color: #000000;
    }
  }

  div{
      display:flex;
      align-items: center;

      svg{
          padding-right:5px;
        }
    span{
          padding-right:15px;
          font: normal normal 400 16px/25px Poppins;
          color: #A4A2DC;
        }
  }
`;

const Aside = styled.aside`
  height: 151px;
  width: 450px;
  ul{
      text-align:left;
      padding-left:0;
  }
  li{
    list-style-type: none;
    font: normal normal bold 16px/25px Poppins;
    color: #000000;

    svg{
        padding-left:5px;
    }
  }
`;

export default function StyledDropzone(props) {
    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone({ accept: 'image/jpeg, image/png, .pdf' });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
            <svg className='ps-2' xmlns="http://www.w3.org/2000/svg" width="16.012" height="16.01" viewBox="0 0 16.012 16.01">
                <path id="close" d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,1,0,1.42,1.42L12,13.41l6.29,6.3a1,1,0,1,0,1.42-1.42Z" transform="translate(-3.994 -3.996)" fill="#A4A2DC" />
            </svg>
        </li>
    ));

    return (
        <div className="container">
            <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
                <input {...getInputProps()} />
                <p>Drop <span>Invoices</span> here, paste, browse or import from device</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.443" height="23.798" viewBox="0 0 26.443 23.798">
                        <path id="_211748_folder_icon" data-name="211748_folder_icon" d="M120.335,114.644h-13.8c-.388,0-.884-.818-1.529-1.57A2.6,2.6,0,0,0,103.313,112H98.33A2.088,2.088,0,0,0,96,114.008v19.386a2.4,2.4,0,0,0,2.33,2.4h22.005a2.223,2.223,0,0,0,2.107-2.4v-16.7A1.93,1.93,0,0,0,120.335,114.644ZM98.33,113.322h4.553a1.546,1.546,0,0,1,1.182.686c1,1.182,1.281,1.958,2.471,1.958h13.8c.545,0,.785.182.785.727v1.917h-23.8v-4.6C97.322,113.264,98.173,113.322,98.33,113.322Zm22.005,21.154H98.33a1.079,1.079,0,0,1-1.008-1.082V119.933h23.8v13.461C121.12,133.889,120.906,134.476,120.335,134.476Z" transform="translate(-96 -112)" fill="#a4a2dc" />
                    </svg>
                    <span>Device</span>
                    <svg xmlns="http://www.w3.org/2000/svg" id="_1976059_camera_images_photo_picture_icon" data-name="1976059_camera_images_photo_picture_icon" width="26.575" height="23.917" viewBox="0 0 26.575 23.917">
                        <path id="Path_9750" data-name="Path 9750" d="M25.385,6.986H22.3l-.949-2.677A2.018,2.018,0,0,0,19.3,3H11.279A2.018,2.018,0,0,0,9.226,4.309L8.277,6.986H5.19C3.2,6.986,2,8.643,2,10.631V23.613a3.029,3.029,0,0,0,3.19,3.3H25.383a3.029,3.029,0,0,0,3.192-3.3V10.631C28.575,8.643,27.372,6.986,25.385,6.986Zm1.862,16.627a1.772,1.772,0,0,1-1.862,1.976H5.19a1.772,1.772,0,0,1-1.862-1.976V10.631c0-1.192.668-2.316,1.862-2.316H8.8A.659.659,0,0,0,9.481,7.9L10.594,4.69c.1-.295.373-.361.684-.361H19.3a.644.644,0,0,1,.684.4l1.113,3.217c.1.294.373.369.684.369h3.606c1.193,0,1.862,1.124,1.862,2.316Z" transform="translate(-2 -3)" fill="#a4a2dc" />
                        <path id="Path_9751" data-name="Path 9751" d="M13.784,7.658A7.212,7.212,0,1,0,21,14.869,7.221,7.221,0,0,0,13.784,7.658Zm0,12.982a5.77,5.77,0,1,1,5.769-5.771A5.776,5.776,0,0,1,13.784,20.64Z" transform="translate(-0.497 -1.469)" fill="#a4a2dc" />
                    </svg>
                    <span>Camera</span>
                </div>
            </Container>
            <Aside>
                <ul>{files} </ul>
            </Aside>
        </div>
    );
}

