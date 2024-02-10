import { useState } from "react"
// @ts-ignore
import search from '@assets/icons/search.svg'

const AppSearchBar = ({ onSearch, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={ handleSubmit } className="flex items-center">
      <div className="flex items-center border border-grey-light py-2 px-4 rounded-[8px] flex-grow bg-grey/1">
        <input
          type="text"
          placeholder={ placeholder }
          value={ searchTerm }
          onChange={ handleChange }
          className="w-[97%] outline-none bg-grey/1"
        />
        <button
          type="submit"
          className="">
          <img src={ search } alt="Search Products" />
        </button>
      </div>
    </form>
  )
}

export default AppSearchBar
