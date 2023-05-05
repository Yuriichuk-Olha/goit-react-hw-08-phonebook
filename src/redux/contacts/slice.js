import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { createContact, deleteContact, getContacts } from "./apiContacts";
// import { createContactsThunk, deleteContactsThunk, getContactsThunk } from "./thunk";


const arrThunks = [getContacts, createContact, deleteContact]

const STATUS= {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

const fn = (type) => arrThunks.map((el)=>el[type])

const handelPending = (state)=>{
    state.isLoading = true
}
const handelFulfilled = (state) => {
    state.isLoading=false
    state.error=''
}

const handelFulfilledGet = (state,{payload})=>{
    //handelFulfilled(state)
    state.items = payload
}
const handelFulfilledCreate = (state,{payload})=>{
     //handelFulfilled(state)
    state.items.push(payload)
}
const handelFulfilledDelete = (state,{payload})=>{
   //handelFulfilled(state)
    state.items = state.items.filter(el=>el.id!==payload.id)
}
const handleRejected = (state,{payload})=>{
    state.isLoading=false
    state.error= payload
}



export const contactsSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        setFilter:(state, action)=>{
            state.filter = action.payload
        },
    },
    extraReducers:(builder) => {
        builder
            .addCase(getContacts.fulfilled, handelFulfilledGet)
            .addCase(createContact.fulfilled, handelFulfilledCreate)
            .addCase(deleteContact.fulfilled, handelFulfilledDelete)
            .addMatcher
                (isAnyOf(
                    ...fn(STATUS.PENDING)
                // getContactsThunk.pending, 
                // createContactsThunk.pending, 
                // deleteContactsThunk.pending
                ),
            handelPending
            )
            .addMatcher(
                isAnyOf(
                    ...fn(STATUS.REJECTED)
                // getContactsThunk.rejected, 
                // createContactsThunk.rejected, 
                // deleteContactsThunk.rejected
                ),
            handleRejected
            )
            .addMatcher(
                isAnyOf(
                    ...fn(STATUS.FULFILLED)
                // getContactsThunk.fulfilled, 
                // createContactsThunk.fulfilled, 
                // deleteContactsThunk.fulfilled
                ),
            handelFulfilled
            )
     }
})



// const arrThunks = [getContactsThunk, createContactsThunk, deleteContactsThunk]

// const STATUS= {
//     PENDING: 'pending',
//     FULFILLED: 'fulfilled',
//     REJECTED: 'rejected'
// }

// const fn = (type) => arrThunks.map((el)=>el[type])

// const handelPending = (state)=>{
//     state.isLoading = true
// }
// const handelFulfilled = (state) => {
//     state.isLoading=false
//     state.error=''
// }

// const handelFulfilledGet = (state,{payload})=>{
//     //handelFulfilled(state)
//     state.items = payload
// }
// const handelFulfilledCreate = (state,{payload})=>{
//      //handelFulfilled(state)
//     state.items.push(payload)
// }
// const handelFulfilledDelete = (state,{payload})=>{
//    //handelFulfilled(state)
//     state.items = state.items.filter(el=>el.id!==payload.id)
// }
// const handleRejected = (state,{payload})=>{
//     state.isLoading=false
//     state.error= payload
// }



// export const contactsSlice = createSlice({
//     name:'contacts',
//     initialState,
//     reducers:{
//         setFilter:(state, action)=>{
//             state.filter = action.payload
//         },
//     },
//     extraReducers:(builder) => {
//         builder
//             .addCase(getContactsThunk.fulfilled, handelFulfilledGet)
//             .addCase(createContactsThunk.fulfilled, handelFulfilledCreate)
//             .addCase(deleteContactsThunk.fulfilled, handelFulfilledDelete)
//             .addMatcher
//                 (isAnyOf(
//                     ...fn(STATUS.PENDING)
//                 // getContactsThunk.pending, 
//                 // createContactsThunk.pending, 
//                 // deleteContactsThunk.pending
//                 ),
//             handelPending
//             )
//             .addMatcher(
//                 isAnyOf(
//                     ...fn(STATUS.REJECTED)
//                 // getContactsThunk.rejected, 
//                 // createContactsThunk.rejected, 
//                 // deleteContactsThunk.rejected
//                 ),
//             handleRejected
//             )
//             .addMatcher(
//                 isAnyOf(
//                     ...fn(STATUS.FULFILLED)
//                 // getContactsThunk.fulfilled, 
//                 // createContactsThunk.fulfilled, 
//                 // deleteContactsThunk.fulfilled
//                 ),
//             handelFulfilled
//             )
//      }
// })

export const contactsReducer = contactsSlice.reducer
export const { setFilter } = contactsSlice.actions