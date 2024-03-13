import axios from "axios";
import API from ".";
import toast from "react-hot-toast";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    //get user longitude and latitude
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      reject(null);
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let userLocation = getLocalStorage("userLocation", null);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        if (
          userLocation &&
          userLocation?.longitude == long &&
          userLocation?.latitude == lat
        ) {
          //if user location is the same as the one in local storage
          resolve(userLocation?.location);
        } else {
          axios
            .get(
              `${API.mapBox}?access_token=${import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}&longitude=${long}&latitude=${lat}`
            )
            .then((res) => {
              const location =
                res?.data?.features[0]?.properties?.context?.place.name;
              if (location) {
                setLocalStorage("userLocation", {
                  longitude: long,
                  latitude: lat,
                  location,
                });
              }
              resolve(location || null);
            })
            .catch((err) => {
              reject(null);
            });
        }
      },
      () => {
        toast.error("Unable to retrieve your location");
        reject(null);
      }
    );
  });
};
