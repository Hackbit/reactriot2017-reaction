import React from 'react'
import PropTypes from 'prop-types'
import './Search.css'

export const Search = ({
  searchAsync,
  setSearchInputText,
  searchInputText,
  searching,
  searchFailure,
  searchFailureMessage
}) => (
  <div className='Search__Container'>
    <div className='Form__Container'>
      <form
        className='Search__Form'
        onSubmit={event => {
          event.preventDefault()
          if (searchInputText != '') {
            searchAsync()
          }
        }}
      >
        <input
          className='Input__Link'
          type='text'
          value={searchInputText}
          placeholder={'Search a topic e.g. Felis catus'}
          spellCheck='false'
          onChange={event => setSearchInputText(event.target.value)}
          autoFocus
        />
        <input className='Submit__Button' type='submit' value='GO!' />
      </form>
    </div>
  </div>
)

Search.propTypes = {
  searchAsync: PropTypes.func.isRequired,
  setSearchInputText: PropTypes.func.isRequired,
  searchInputText: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  searchFailure: PropTypes.bool.isRequired,
  searchFailureMessage: PropTypes.string.isRequired
}

export default Search
