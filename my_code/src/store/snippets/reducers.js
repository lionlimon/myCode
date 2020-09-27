// import { 
//   PUT_SNIPPETS,
//   PUT_CREATED_SNIPPETS
// } from './actions';


// const initialState = {
//   snippetsList: {},
// };

// export const snippetReduser = (state = initialState, action) => {
//   switch (action.type) {
//     case PUT_SNIPPETS: 
//       return {
//         snippetsList: action.payload
//       }
      
//     case PUT_CREATED_SNIPPETS: 
//       return {
//         snippetsList: {
//           ...state.snippetsList, 
//           data: [...state.snippetsList.data, action.payload.data]
//         }
//       }

//     default: return state;  
//   }
// }