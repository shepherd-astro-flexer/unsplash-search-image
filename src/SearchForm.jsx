import { useGlobalContext } from "./Context"

const SearchForm = () => {
    const {handleSubmit} = useGlobalContext()

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input type="text" name="search"/>
            <button className="btn">Search</button>
        </form>
    </section>
  )
}
export default SearchForm