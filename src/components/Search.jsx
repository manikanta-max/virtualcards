import React from 'react'
import { BiSearch, BiFilter } from 'react-icons/bi';
import { Popover } from 'antd';

const Search = ({ setSearchResult, setSubCheck, setBurCheck }) => {

  const handleSubmit = (e) => e.preventDefault()

  const handleSearchChange = (e) => {
    e.target.value ? setSearchResult(e.target.value) : setSearchResult('')
  }

  const onClickClear = () => { }

  const onClickApply = () => { }

  const handleSubCheck = (e) => {
    setSubCheck((prev) => !prev)
  }

  const handleBurCheck = (e) => {
    setBurCheck((prev) => !prev)
  }

  const content = (
    <div className='filter-pop px-2'>
      <span className='pop-txt'>Type</span>
      <div className='d-flex gap-5 mt-2 mb-4'>
        <div>
          <input type="checkbox" name="subscription" id="subscription" onChange={handleSubCheck} />
          <label className='ms-1' htmlFor="subscription">Subscription</label>
        </div>
        <div>
          <input type="checkbox" name="burner" id="burner" onChange={handleBurCheck} />
          <label className='ms-1' htmlFor="burner">Burner</label>
        </div>
      </div>
      <div className='d-flex mt-4 gap-4'>
        <button className='btn btn-left btn-sm w-100' onClick={onClickApply}>Apply</button>
        <button className='btn btn-right btn-sm w-100' onClick={onClickClear}>Clear</button>
      </div>
    </div>
  )

  return (
    <div className='mt-3'>
      <div className='flex-center gap-3'>
        <form onSubmit={handleSubmit}>
          <div className='search py-1 px-2'>
            <input type="text" id='search' onChange={handleSearchChange} />
            <BiSearch />
          </div>
        </form>
        <Popover placement="bottomRight" content={content} title="Filters" trigger="click">
          <div className='filter flex-center'>
            <BiFilter style={{ fontSize: '1.2rem' }} />
            <span className='ms-1'>Filter</span>
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default Search