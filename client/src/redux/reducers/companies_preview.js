import { COMPANIES_PREVIEW_API } from '../../constants' 
import { COMPANY_INFO_API } from '../../constants' 

const COMPANY_PREVIEW_LOADING = 'COMPANY_PREVIEW_LOADING'
const COMPANY_PREVIEW_SUCCESS = 'COMPANY_PREVIEW_SUCCESS'
const COMPANY_PREVIEW_FAIL = 'COMPANY_PREVIEW_FAIL'

const COMPANY_DELETE_LOADING = 'COMPANY_DELETE_LOADING'
const COMPANY_DELETE_SUCCESS = 'COMPANY_DELETE_SUCCESS'
const COMPANY_DELETE_FAIL = 'COMPANY_DELETE_FAIL'

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


const companyDeleteLoading = bool => ({
    type: COMPANY_DELETE_LOADING,
    isDeleteLoading: bool
})
const companyDeleteSuccess = deletedCompanyId => ({
    type: COMPANY_DELETE_SUCCESS,
    deletedCompanyId
})
const companyDeleteFail = error => ({
    type: COMPANY_DELETE_FAIL,
    errorDelete: error
})

const initialState = {
    isLoading: false,
    companies: null,
    error: null,

    isDeleteLoading: false,
    deletedCompanyId: null,
    errorDelete: null
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

        
        case COMPANY_DELETE_LOADING:
            return {
                ...state,
                isDeleteLoading: action.isDeleteLoading
            }
        case COMPANY_DELETE_SUCCESS:
            return {
                ...state,
                companies: state.companies.filter(company => company.id !== action.deletedCompanyId.id)
            }
        case COMPANY_DELETE_FAIL:
            return {
                ...state,
                errorDelete: action.errorDelete
            }      
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

export const deleteCompany = id => dispatch => {
    dispatch(companyDeleteLoading(true))
    fetch(`${COMPANY_INFO_API}${id}`, {method: 'DELETE'})
        .then(response => {
            if (response.status !== 200) throw Error(response.message);
            dispatch(companyDeleteLoading(false))
            return response
        })
        .then(response => response.json())
        .then(deletedCompanyId => dispatch(companyDeleteSuccess(deletedCompanyId)))
        .catch(error => dispatch(companyDeleteFail(error)));
}