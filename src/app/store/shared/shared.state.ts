

export interface sharedState {
    showLoadingSpinner:boolean,
    errorMessage:string
}

export const initialState:sharedState = {
    showLoadingSpinner:false,
    errorMessage:''

}