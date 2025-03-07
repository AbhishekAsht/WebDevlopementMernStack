import {createSlice} from "@reduxjs/toolkit"


// example:
// {
//     id: 124,
//     name: "Wednesday Chicken Bucket",
//     
//    quantity: 2
// }

// [{id:123,name:"Tandoori paneer", quanity:3},{id:124,name:"Tandoori chicken", quanity:2},{id:125,name:"pizza", quanity:3}]

const cart = createSlice({
    name: 'cartslice',
    initialState: {
        items:[],
        count:0,
    },
    reducers:{
       addItems: (state,action)=>{
            state.items.push({...action.payload, quantity:1});
            state.count++;
       },
       IncrementItems: (state,action)=>{
         const element =  state.items.find(item=> item.id===action.payload.id); 
         element.quantity+=1;
         state.count++;
       },
       DecrementItems: (state,action)=>{
        const element =  state.items.find(item=> item.id===action.payload.id);
        if(element.quantity>1){
            element.quantity-=1;
        }
        else{
            state.items = state.items.filter(item=> item.id!=action.payload.id);
        }
        state.count--;
       }
    }
})

export const {addItems, IncrementItems, DecrementItems} = cart.actions;
export default cart.reducer;



