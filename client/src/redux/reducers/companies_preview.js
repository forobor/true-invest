import {COMPANIES_PREVIEW_API} from '../../constants' 

const COMPANY_PREVIEW_LOADING = 'COMPANY_PREVIEW_LOADING'
const COMPANY_PREVIEW_SUCCESS = 'COMPANY_PREVIEW_SUCCESS'
const COMPANY_PREVIEW_FAIL = 'COMPANY_PREVIEW_FAIL'


const companyPreviewLoading = bool => ({
    type: COMPANY_PREVIEW_LOADING,
    isLoading: bool
})

const companyPreviewSuccess = companies => ({
    type: COMPANY_PREVIEW_SUCCESS,
    companies
})

const companyPreviewFail = error => ({
    type: COMPANY_PREVIEW_FAIL,
    error: error
})


const initialState = {
    isLoading: false,
    companies: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_PREVIEW_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case COMPANY_PREVIEW_SUCCESS:
            return {
                ...state,
                companies: action.companies
            };
        case COMPANY_PREVIEW_FAIL:
            return {
                ...state,
                error: action.error
            };    
        default:
            return state;
    }
}

export const fetchCompaniesPreview = () => dispatch => {
    dispatch(companyPreviewLoading(true))
    fetch(COMPANIES_PREVIEW_API)
        .then(response => {
            if (response.status !== 200) throw Error(response.message);
            dispatch(companyPreviewLoading(false))
            return response
        })
        .then(response => response.json())
        .then(companies => dispatch(companyPreviewSuccess(companies)))
        .catch(error => dispatch(companyPreviewFail(error)));
}
