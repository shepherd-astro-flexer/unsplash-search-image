import { useQuery } from "@tanstack/react-query"
import authFetch from "./utils"
import { useGlobalContext } from "./Context"

const Gallery = () => {
    const {search} = useGlobalContext()

    const {isLoading, isError, data}= useQuery({
        queryKey: ["unsplash", search],
        queryFn: async () => {
            const {data} = await authFetch("/search/photos", {
                params: {
                    client_id: import.meta.env.VITE_API_KEY,
                    query: search || "dog"
                }
            })

            return data;
        }
    })

    if (isLoading) {
        return <section>
            <h5>Loading...</h5>
        </section>
    }

    if (isError) {
        return <section>
            <h5>Error fetching data.</h5>
        </section>
    }

    if (data.results < 1) {
        return <section>
            <h5>No results found.</h5>
        </section>
    }

  return (
    <section className="gallery">
        {data.results.map(item => {
            const {id, alt_description, urls} = item;
            
            return <img key={id} src={urls?.regular} alt={alt_description} />
        })}
    </section>
  )
}
export default Gallery