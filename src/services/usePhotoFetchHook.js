import { useState, useEffect } from "react";
import { getRoverCapturedData } from './weatherApi';
import { CAM_PHOTO_VIEW } from './../services/constant';

export default function usePhotoFetchHook() {
    const [photoArray, setPhotoArray] = useState([]);
    const [photoFiltered, setPhotoFiltered] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [solKey, setSolKey] = useState(null);

    const getFilteredPhotoArray = () => {
        let photosArray = [];
        if (photoArray && photoArray.length > 0) {
            let count = 0;
            photoArray.map((photo) => {                
                if (photo.camera && photo.img_src && CAM_PHOTO_VIEW.includes(photo.camera.name)) {
                    const photoObj = {                    
                        id: photo.id,
                        name: photo.camera.name,
                        img_src: photo.img_src
                    }
                    if (count < 10) photosArray.push(photoObj);    //just showing max 10 photos of type ['FHAZ', 'RHAZ', 'MAST', 'NAVCAM']  
                    count = count++ ;                 
                }
            });            
            console.log('photosArray', photosArray);
            setPhotoFiltered(photosArray);            
        }
    }
    useEffect((sol_key) => {
        setSolKey(sol_key)
        async function init() {
        try {
            const response = await getRoverCapturedData(sol_key);
            if (response.photos) setPhotoArray(response.photos);
            getFilteredPhotoArray();
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
        }
        init();
    }, [solKey]);

    return { photoArray, photoFiltered, error, loading };
}