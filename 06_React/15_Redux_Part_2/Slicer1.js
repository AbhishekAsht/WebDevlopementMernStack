import { createSlice } from "@reduxjs/toolkit";




arr = [10,20,30,40]
// object store as a reference



// original Object: Draft (Dupilcate object): Update maarega
// {count:0}         {count:1}  {count:1}

//                  Draft: 1
// Immer: New Draft create karta hai:
// New object return karo poora || Draft diya hai usko update

// Immer

const initialState  = {count:0}
const reactslicer = createSlice({
    name: "slice1",
    initialState,
    reducers: {
        Increment: (state)=> {state.count=state.count+1},
        Decrement: (state) => {state.count = state.count-1},
        Reset: (state) => {state.count=0},
        CustomIncreaser: (state,action) => {state.count+= action.payload}
    }
})


// Increment: (state)=> {
//     return {...state, count:state.count+1}
// },


// {type:"slice1/Increment", payload: argument};

export const {Increment, Decrement, Reset, CustomIncreaser} = reactslicer.actions

export {reactslicer};

export default reactslicer.reducer;

