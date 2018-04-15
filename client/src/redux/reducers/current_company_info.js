import { COMPANY_INFO_API } from '../../constants' 

const COMPANY_INFO_LOADING = 'COMPANY_INFO_LOADING'
const COMPANY_INFO_SUCCESS = 'COMPANY_INFO_SUCCESS'
const COMPANY_INFO_FAIL = 'COMPANY_INFO_FAIL'


const companyInfoLoading = bool => ({
    type: COMPANY_INFO_LOADING,
    isLoading: bool
})

const companyInfoSuccess = company => ({
    type: COMPANY_INFO_SUCCESS,
    company
})

const companyInfoFail = error => ({
    type: COMPANY_INFO_FAIL,
    error: error
})


const initialState = {
    isLoading: false,
    company: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INFO_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case COMPANY_INFO_SUCCESS:
            return {
                ...state,
                company: action.company
            }
        case COMPANY_INFO_FAIL:
            return {
                ...state,
                error: action.error
            }  
        default:
            return state;
    }
}

export const fetchCurrentCompanyInfo = id => dispatch => {
    dispatch(companyInfoLoading(true))
    fetch(`${COMPANY_INFO_API}${id}`)
        .then(response => {
            if (response.status !== 200) throw Error(response.message);
            dispatch(companyInfoLoading(false))
            return response
        })
        .then(response => response.json())
        .then(company => dispatch(companyInfoSuccess(company)))
        .catch(error => dispatch(companyInfoFail(error)));
}

