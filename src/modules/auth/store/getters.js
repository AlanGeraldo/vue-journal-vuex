

// export const myGetters = ( state ) => {
//     return state.algo
// }

export const currentStatus = ( state ) => {
    return state.status
} 

export const username = (state) => {
    return state.user?.name || ''
} 