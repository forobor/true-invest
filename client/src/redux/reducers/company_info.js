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
    company: {},
    error: null
}

const companyInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INFO_LOADING:
            return action.isLoading;
        case COMPANY_INFO_SUCCESS:
            return action.company;
        case COMPANY_INFO_FAIL:
            return action.error;    
        default:
            return state;
    }
}

export const fetchCompanyInfo = id => dispatch => {
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

export default companyInfoReducer;