import { COMPANY_INFO_API } from '../../constants' 

const COMPANY_INFO_LOADING = 'COMPANY_INFO_LOADING'
const COMPANY_INFO_SUCCESS = 'COMPANY_INFO_SUCCESS'
const COMPANY_INFO_FAIL = 'COMPANY_INFO_FAIL'

const COMPANY_INFO_CLEAN = 'COMPANY_INFO_CLEAN'

const COMPANY_UPDATE_LOADING = 'COMPANY_UPDATE_LOADING'
const COMPANY_UPDATE_SUCCESS = 'COMPANY_UPDATE_SUCCESS'
const COMPANY_UPDATE_FAIL = 'COMPANY_UPDATE_FAIL'

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

export const companyInfoClean = () => ({
    type: COMPANY_INFO_CLEAN    
})


const companyUpdateLoading = bool => ({
    type: COMPANY_INFO_LOADING,
    isUpdateLoading: bool
})
const companyUpdateSuccess = updatedCompany => ({
    type: COMPANY_INFO_SUCCESS,
    updatedCompany
})
const companyUpdateFail = error => ({
    type: COMPANY_INFO_FAIL,
    errorUpdate: error
})


const initialState = {
    isLoading: false,
    company: null,
    error: null,

    isUpdateLoading: false,
    updatedCompany: null,
    errorUpdate: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case COMPANY_INFO_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case COMPANY_INFO_SUCCESS:
            console.log('succ', state, action)
            return {
                ...state,
                company: action.company
            }
        case COMPANY_INFO_FAIL:
            return {
                ...state,
                error: action.error
            }

        case COMPANY_INFO_CLEAN:
            console.log('sad', state, action)
            return initialState;

        case COMPANY_UPDATE_LOADING:
            return {
                ...state,
                isUpdateLoading: action.isUpdateLoading
            }
        case COMPANY_UPDATE_SUCCESS:
            return {
                ...state,
                company: { 
                    ...state.company,
                    ...action.updatedCompany
                }
            }
        case COMPANY_UPDATE_FAIL:
            return {
                ...state,
                errorUpdate: action.errorUpdate
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

export const fetchUpdateCompany = (id, updatedCompany) => dispatch => {
    dispatch(companyUpdateLoading(true))
    fetch(`${COMPANY_INFO_API}${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
        body: JSON.stringify(updatedCompany)
    })
        .then(response => {
            if (response.status !== 200) throw Error(response.message);
            dispatch(companyUpdateLoading(false))
            return response
        })
        .then(response => response.json())
        .then(updatedCompany => dispatch(companyUpdateSuccess(updatedCompany)))
        .catch(error => dispatch(companyUpdateFail(error)));
}
