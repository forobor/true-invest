import React, { Component } from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'
import { colors, fonts } from '../../styles/theme'

const SearchForm = styled.form`
    display: flex;
    background:  ${colors.blue_trans};
    border-radius: 5px;
    max-width: 15em;
    margin : 20px 1em 20px auto;
`

const SearchField = styled.input`
    border: none;
    outline: none;
    height: 54px;
    background: transparent;    
    padding: 10px;
    font-size: ${fonts.med};
    color: ${colors.white}
    font-style:italic;
    box-sizing: border-box;
    margin: 0 auto;
    ::placeholder {
        color: ${colors.light_gray};
    }
`

const SearchButton = styled(FontAwesome)`
    font-size: 30px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    color: ${colors.light_gray};
    font-weight: bold;
    align-self: center;
    margin-right: 10px;

`

class Search  extends Component {
    render() {
        return(
            <SearchForm>
                <SearchField
                 type='text' 
                 placeholder='Поиск компании...' 
                 onChange={event => this.props.onChange(event.target.value.toLowerCase())}
                />
                <SearchButton name='search'/>
            </SearchForm>
        )
    }
}

export default Search;