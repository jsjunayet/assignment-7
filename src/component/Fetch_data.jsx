import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Fetch_data = ({ evenhandle }) => {
    const [carts, setcart] = useState([]);
    useEffect(() => {
        fetch('CSE.json')
            .then(res => res.json())
            .then(data => setcart(data))
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    carts.map(cart => <Card
                        key={cart.id}
                        cart={cart}
                        evenhandle={evenhandle}
                    >
                    </Card>)
                }
            </div>
        </>
    );
};

export default Fetch_data;