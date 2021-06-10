import React, { useState, forwardRef, useImperativeHandle }  from 'react';
import ReactDOM from 'react-dom';
import { CAM_PHOTO_VIEW } from './../services/constant';
 

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);
    const [selectedImageURL, setSelectedImageURL] = useState('');
    const [photoArray, setPhotoArray] = useState([]);
    const [photoFiltered, setPhotoFiltered] = useState([]);

    useImperativeHandle(ref, () => {
        return {
            openModal: (props) => open(props),
            close: () => close()
        }
    })

    const filteredArray = () => {
        let photosArray = [];
        if (photoArray && photoArray.length > 0) {
            let count = 0;
            setPhotoFiltered([]);
            photoArray.map((photo) => {                
                if (photo.camera && photo.img_src && CAM_PHOTO_VIEW.includes(photo.camera.name)) {
                    const photoObj = {                    
                        id: photo.id,
                        name: photo.camera.name,
                        img_src: photo.img_src
                    }
                    if (count < 10) photosArray.push(photoObj);    //just showing max 10 photos of type ['FHAZ', 'RHAZ', 'MAST', 'NAVCAM']  
                    count = count + 1; 
                }
            });           
            setPhotoFiltered(photosArray);
            setSelectedImageURL(photosArray[0].img_src);
        }
    }

    const open = (props) => {
        console.log('ModalData', props)
        setPhotoArray(props.photos);
        console.log('photoArray', photoArray)
        filteredArray();
        setDisplay(true);        
    }

    const close = () => {
        setDisplay(false);
    }

    const selectCamImage = (e) => {
        setSelectedImageURL(e.target.getAttribute('img_src'));
    }

    if (display) {
        return ReactDOM.createPortal(        
            <div className="modal-wrapper">
                <div onClick={close} className="modal-backdrop"></div>
                <div className="modal-box">
                    <div>
                        <span>
                            <h2>Rover CAM</h2>
                        </span>
                        <span ClassName="close-icon" onClick={() => close()}>
                            <a href="javascript:void(0)" className="close"> </a>
                        </span>
                    </div>
                    <div>
                        <ul className="horizontal">
                            {
                                photoFiltered.map( (photo) => {
                                    return <li className="image-nav" key={photo.id} onClick={selectCamImage} img_src={photo.img_src} >
                                                {photo.name}
                                            </li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        {selectedImageURL ? <img src={selectedImageURL} alt="" className="rover-image" /> : <span>No Photo available</span>}
                        
                    </div>
                </div>
                
            </div>, document.getElementById('modal-root'));
    }
    return null;
}) 

export default Modal;