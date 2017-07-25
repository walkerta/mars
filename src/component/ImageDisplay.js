import React, {Component} from 'react';


export default ({images}) => {
  console.log(images);
  return (
    <ul>{images.map(
        (image, index) =>
        <li key = {index}>
          <img src ={image.img_src}/>
        </li>
        )}
    </ul>
  );
}
