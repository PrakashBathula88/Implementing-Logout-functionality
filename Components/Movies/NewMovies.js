import React from "react";

const Newmovies = () => {
  return (
    <div>
      <div>
        <h2>Title</h2>
        <input type="text"></input>
        <h2>Opening Text</h2>
        <input type="text"></input>
        <h2>Release Date</h2>
        <input type="text"></input>

        <div>
          <button type="submit">Add Movies</button>
        </div>
      </div>
      <div>
        <button>Fetch Movies</button>
      </div>
      <div>
        <h2>Cannot read property 'results' of null</h2>
      </div>
    </div>
  );
};
export default Newmovies;
