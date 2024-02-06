import { useEffect, useState } from "react";
import Product from './Product'
import { useSelector } from "react-redux";
function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [data, setData] = useState([]);
    const [Loading,setLoading] = useState(false)
    async function dataFetcher() {
        setLoading(true);
        try {
            const res = await fetch(API_URL)
            const data = await res.json()
            console.log(data);
            setData(data)
        }
        catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }
    useEffect(() => {
        dataFetcher()
    }, [])
    return (
        <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
                Loading ? (<div className="spinner"></div>) :
                        data.map((product) => {
                           return <Product product={product} key={product.id}></Product>
                        }
                    )
            }
        </div>
    )
}
export default Home