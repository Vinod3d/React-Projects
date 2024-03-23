import React from 'react'

const Filter = ({ searchQuery, selectedTech, onSearchChange, onFilterChange, numProjects }) => {
    const CountProjects = {
        color: 'red'
      };



  return (
    <>
        <div className="box btn_shadow">
            <h2 className="lable" style={CountProjects}>({numProjects}) Projects</h2>
            
            <h3 className="lable">Search Products</h3>
            <input
                className="input"
                type="text"
                placeholder="Search your product..."
                value={searchQuery}
                onChange={onSearchChange}
            />

            <h3 className="lable">Filter</h3>
                <select
                    value={selectedTech}
                    onChange={onFilterChange}
                >
                    <option value="">Show All</option>
                    <option value="html, css">HTML & CSS</option>
                    <option value="tailwind">Tailwind</option>
                    <option value="javascript">JavaScript</option>
                    <option value="react">React</option>
                    <option value="bootstrap">Bootstrap</option>
                </select>
        </div>
    </>
  )
}

export default Filter
