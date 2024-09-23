import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/26926252/pexels-photo-26926252/free-photo-of-o-olhar.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Max</span>
      </div>
    </div>
  )
}

export default Search