import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "./shared.state";


export const SHARED_STATE_NAME ='shared';

const getSharedState = createFeatureSelector<sharedState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getSharedState,(state)=>{
    return state.showLoadingSpinner
})

export const getErrorMessage = createSelector(getSharedState,(state)=>{
    return state.errorMessage
})