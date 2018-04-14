import { combineReducers } from 'redux';
import companies from './reducers/companies_preview'
import companyInfoReducer from './reducers/company_info'

export default combineReducers({
    companies,
    companyInfoReducer
})