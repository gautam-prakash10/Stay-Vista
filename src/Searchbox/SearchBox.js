import React from 'react'
import "./SearchBox.css"

const SearchBox = () => {
  return (
    <section>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <form className="form_book">
          <div className="row">
            <div className="col-md-3">
              <label className="date">location/property</label>
              <input className="book_n" type="date" />
            </div>
            <div className="col-md-3">
              <label className="date">Check-in</label>
              <input className="book_n" type="date" />
            </div>
            <div className="col-md-3">
              <label className="date">Check-out</label>
              <input className="book_n" type="date" />
            </div>
            <div className="col-md-3">
              <label className="date">Guest</label>
              <input className="book_n" placeholder={2} type="type" name={2} />
            </div>
            <div className="col-md-3">
              <button className="serch_btn">Search </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  )
}

export default SearchBox