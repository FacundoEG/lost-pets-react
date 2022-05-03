/* import React from "react";
import css from "./search-form.css";

export const SearchForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit} className={css["search-form"]}>
      <a className={css["nav-logo"]} href="/"></a>
      <label className={css["search-form-label"]}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Tu busqueda aquí..."
        />
      </label>
      <button className={css["search-form-button"]} type="submit">
        <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png" />
      </button>
    </form>
  );
};
 */
