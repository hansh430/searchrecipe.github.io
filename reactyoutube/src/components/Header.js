import React from 'react';

const Header = (props) => {

    const{search,onInputChange,onSearchClick}=props;

    return (
        <div className="jumbotron">
            <h1 className="display-1">
                <i className="material-icons brand_icon">food_bank </i>Food Recipe
            </h1>

            <div class="input-group w-50 mx-auto">
                <input type="text" 
                 className="form-control"
                 placeholder="Search your recipe..." 
                 value={search}
                 onChange={onInputChange}
                 />
                    <div className="input-group-append">
                        <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
                    </div>
             </div>
            </div>

    )

}
export default Header;