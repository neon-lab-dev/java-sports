import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import axios from "axios";
import API from ".";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    //get user longitude and latitude
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      reject(null);
    }

    //check if user has granted permission to access location
    const checkPermissionAndGetCurrentPosition = () => {
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
    };

    //check if user has granted permission to access location
    navigator.permissions.query({ name: "geolocation" }).then((result) => {
      if (result.state === "denied") reject(null);
      else if (result.state === "granted") {
        checkPermissionAndGetCurrentPosition();
      } else {
        Swal.fire({
          title: "Location",
          text: "We need to access your location to provide you with the best experience",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Allow",
          cancelButtonText: "Deny",
        })
          .then((result) => {
            if (result.isConfirmed) {
              checkPermissionAndGetCurrentPosition();
            } else {
              reject(null);
            }
          })
          .catch(() => {
            reject(null);
          });
      }
    });
  });
};
