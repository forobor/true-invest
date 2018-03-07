import React, { Component } from 'react'
import CompaniesList from '../Shared/Organisms/CompaniesList'
import { COMPANIES } from '../companies'


class MainPage extends Component {
    render() {
        return (
            <div>
                <CompaniesList companies={COMPANIES}/>
            </div>
        )
    }
}

export default MainPage;