import { combineReducers } from 'redux';
import companies from './reducers/companies_preview'
import currentCompany from './reducers/current_company_info'
import adminAuth from './reducers/login_reducer'

export default combineReducers({
    companies,
    currentCompany,
    adminAuth
})