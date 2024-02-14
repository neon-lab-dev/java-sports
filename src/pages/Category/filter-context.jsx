// // @ts-nocheck
// import { useContext, createContext, useReducer } from "react";
// import { reducerFun } from "./reducerFun";
// /**
//  * 1. Create Context
//  * 2. Create Provider
//  * 3. useContext
//  */

// const initialState = {
//   sort: "HTL",
//   size: "L",
//   brand: "Zara"
// };

// const FilterContext = createContext(initialState);

// const FilterProvider = ({ children }) => {
//   const [state, filterDispatch] = useReducer(reducerFun, {
//     sort: "",
//     size: [],
//     brand: ""
//   });

//   return (
//     <FilterContext.Provider value={{ state, filterDispatch }}>
//       {children}
//     </FilterContext.Provider>
//   );
// };

// const useFilter = () => useContext(FilterContext);

// export { useFilter, FilterProvider };
