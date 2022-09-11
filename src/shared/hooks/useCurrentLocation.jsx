import { useEffect, useState } from "react";
import Swal from "sweetalert";

export const useCurrentLocation = () => {
  const [position, setPosition] = useState({
    latitude: "",
    longitude: "",
  });
  const [error, setError] = useState(null);
  
  const onChange = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };
  const onError = (error) => {
    setError(error.message);
    Swal("Oops", "You must allow or unblock Location Access ", "error");
  }

  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported')
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);
  return {...position, error};
}