import React from 'react'

function Navbar({changeTab}) {
    return (
        <div className="navbar">
            <p onClick={()=>changeTab("books-list")}>Show Books</p>
            <p onClick={()=>changeTab("authors-list")}>Show Authors</p>
            <p onClick={()=>changeTab("add-book")}>Add Book</p>
            <p onClick={()=>changeTab("add-author")}>Add Author</p>
        </div>
    )
}

export default Navbar
