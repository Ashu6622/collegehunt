import React from 'react'
import Filtercourse from './Filtercourse'
import CollegeCard from './collegeCard'
import SearchCollege from './SearchCollege'

function AllCollege() {
  return (
    <div>
      <div className=''>
        <SearchCollege/>
        <Filtercourse/>
        <CollegeCard/>

      </div>
    </div>
  )
}

export default AllCollege