import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHall } from '../../redux/actions/hallAction';

const AddHallHook = () => {
  const dispatch = useDispatch();

  if (localStorage.getItem('user') !== null) {
    var user = JSON.parse(localStorage.getItem('user'));
  } else {
    window.location.href = '/signin';
    return;
  }

  const [placeName, setPlaceName] = useState('');
  const [placeCapacity, setPlaceCapacity] = useState('');
  const [placeCity, setPlaceCity] = useState('');
  const [placeLocation, setPlaceLocation] = useState('');
  const [hourPrice, setHourPrice] = useState('');
  const [placeDetails, setPlaceDetails] = useState('');
  const [images, setImages] = useState([]);
  const [pdf, setPdf] = useState('');
  const [pdfName, setPdfName] = useState('pdf name');
  const [video, setVideo] = useState('');
  const [videoName, setVideoName] = useState('video name');
  const [userID, _setUserId] = useState(user.id);
  const [loading, setLoading] = useState(true);

  // to convert base 64 to file ......
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const res = useSelector((state) => state.hallReducer.addHall);

  const onChangePlaceName = (event) => {
    console.log(event.target.value);
    setPlaceName(event.target.value);
  };

  const onChangePlaceCapacity = (event) => {
    if (event.target.value <= 0) return;
    setPlaceCapacity(event.target.value);
  };

  const onChangePlaceCity = (value) => {
    setPlaceCity(value);
  };

  const onChangePlaceLocation = (event) => {
    setPlaceLocation(event.target.value);
  };

  const onChangePriceHour = (event) => {
    if (event.target.value <= 0) return;
    setHourPrice(event.target.value);
  };

  const onChangePlaceDetails = (event) => {
    setPlaceDetails(event.target.value);
  };

  const onChangeImages = (value) => {
    console.log(value);
    setImages(value);
  };

  const onChangePdf = (event) => {
    const selectedPdf = event.target.files[0];
    setPdf(selectedPdf);
   

    if (selectedPdf) {
      const fileSizeInBytes = selectedPdf.size;
      const fileSizeInKB = fileSizeInBytes / 1024;
      const fileSizeInMB = fileSizeInKB / 1024;

      console.log(`File Size: ${fileSizeInMB.toFixed(2)} MB`);
      setPdfName(selectedPdf.name);
    } else {
      setPdf(null);
      setPdfName('');
    }
  };

  const onChangeVideo = (value) => {
    const selectedVideo = value.target.files[0];
    setVideo(selectedVideo);

    console.log(value.target.files[0]);

    if (selectedVideo) {
      const fileSizeInBytes = selectedVideo.size;
      const fileSizeInKB = fileSizeInBytes / 1024;
      const fileSizeInMB = fileSizeInKB / 1024;

      console.log(`File Video Size: ${fileSizeInMB.toFixed(2)} MB`);
      setVideoName(selectedVideo.name);
    } else {
      setVideo(null);
      setVideoName('');
    }
  };

  const onSubmit = async () => {
    if (
      (placeName === '',
      placeCity === '',
      placeCapacity === '',
      placeLocation === '',
      hourPrice === '',
      placeDetails === '',
      images.length === 0,
      pdfName === '',
      videoName === '')
    ) {
      alert('من فضلك اكمل البيانات');
      return;
    }

    if (placeName.length < 5) {
      alert('name shouldnt be less 5');
      return;
    }

    if (placeLocation.length < 5) {
      alert('location shouldnt be less 5');
      return;
    }

    setLoading(true);

    const imgCover = dataURLtoFile(images[0], Math.random() + '.png');

    const hallImages = Array.from(Array(Object.keys(images).length).keys()).map(
      (_item, index) => {
        return dataURLtoFile(images[index], Math.random() + '.png');
      },
    );

    const formdata = new FormData();
    formdata.append('imageCover', imgCover);
    hallImages.map((item) => formdata.append('images', item));
    formdata.append('price', hourPrice);
    formdata.append('name', placeName);
    formdata.append('city', placeCity);
    formdata.append('capacity', placeCapacity);
    formdata.append('location', placeLocation);
    formdata.append('details', placeDetails);
    formdata.append('pdf', pdf);
    formdata.append('video', video);
    formdata.append('user_id', userID);

    dispatch(addNewHall(formdata));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (res.data) {
      if (res.data.status == 'success') {
        alert('نجاح الاضافة');
        return;
      } else {
        alert('هناك مشكله فى عملية الاضافة');
        return;
      }
    }
  }, [res.data]);

  return [
    onSubmit,
    images,
    onChangeImages,
    placeName,
    onChangePlaceName,
    placeCapacity,
    onChangePlaceCapacity,
    placeCity,
    onChangePlaceCity,
    placeLocation,
    onChangePlaceLocation,
    hourPrice,
    onChangePriceHour,
    placeDetails,
    onChangePlaceDetails,
    pdf,
    onChangePdf,
    pdfName,
    video,
    onChangeVideo,
    videoName,
    loading,
  ];
};

export default AddHallHook;
