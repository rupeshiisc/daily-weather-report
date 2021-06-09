import React, { useState, forwardRef, useImperativeHandle }  from 'react';
import ReactDOM from 'react-dom';

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
            const filteredArr = photoArray.map((photo) => {                
                if (photo.camera && photo.img_src) {
                    const photoObj = {                    
                        id: photo.camera.id,
                        name: photo.camera.name,
                        img_src: photo.img_src
                    }
                    photosArray.push(photoObj);
                    return photoObj;
                }
            });
            console.log('filteredArr', filteredArr);
            console.log('photosArray', photosArray);
            setPhotoFiltered(photosArray);
            setSelectedImageURL(photosArray[0].img_src);
        }
    }

    const open = (props) => {
        console.log('ModalData', props)
        setPhotoArray(props);
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
                    <h2>Rover CAM</h2>
                    <div>
                        <ul>
                            {
                                photoFiltered.map( (photo) => {
                                    <li key={photo.id} onClick={selectCamImage} img_src={photo.img_src}>photo.name</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        {selectedImageURL ? <img src={selectedImageURL} alt="" /> : <span>No Photo available</span>}
                        
                    </div>
                </div>
                
            </div>, document.getElementById('modal-root'));
    }
    return null;
}) 

export default Modal;