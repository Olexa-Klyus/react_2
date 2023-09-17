// import React from 'react';
// import FilmCard from "../FilmsContainer/FilmCard/FilmCard";
// import {searchActions} from "../../redux/slices/searchSlice";
// import {useForm} from "react-hook-form";
// import {useDispatch} from "react-redux";
//
// const SearchForm = ({setTrigger}) => {
//     const {register, handleSubmit, reset} = useForm();
//     const dispatch = useDispatch();
//     const search = (str) => {
//         dispatch(searchActions.searchThunk(str["search_input_request"]))
//         setTrigger(prev => !prev)
//         reset()
//         console.log("i searched")
//     };
//
//     return (
//         <div>
//             <div>
//                 SearchPage
//                 <form onSubmit={handleSubmit(search)}>
//                     <div>
//                         <input type="text"
//                                placeholder={"I'm searching..."} {...register("search_input_request", {required: true})}/>
//                     </div>
//                     <button>search</button>
//                 </form>
//             </div>
//         </div>
//     );
// };
//
// export {SearchForm};