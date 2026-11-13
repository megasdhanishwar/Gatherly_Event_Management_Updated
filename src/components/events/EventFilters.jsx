import { Search, SlidersHorizontal } from "lucide-react";
import { categories } from "../../data/events";

export default function EventFilters({
  category,
  setCategory,
  search,
  setSearch,
  sort,
  setSort,
}) {
  return (
    <div className="filters">
      <div className="category-scroll">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item ? "category-pill active" : "category-pill"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="filter-tools">
        <label className="search-field">
          <Search size={16} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events, places..."
          />
        </label>
        <label className="sort-field">
          <SlidersHorizontal size={15} />
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="soonest">Soonest first</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </div>
    </div>
  );
}
