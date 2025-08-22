import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoppingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1, name: "Apple", price: 1.5
        },
        {
            id: 2, name: "Pear", price: 2.0
        },
        {
            id: 3, name: "Milk", price: 1
        }
    ]);

    const [discount, setDiscount] = useState<number>(0)

    const totalCost = useMemo(() =>
        items.reduce((total, item) => total += item.price, 0)
        , [items]
    )

    const finalCost = totalCost - discount

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 5
        }

        setItems([...items, newItem])
    }

    return (
        <div>
            <h2>Buy List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.price.toFixed(2) }
                    </li>
                ))}
            </ul>

            <p>Total Cost: {totalCost.toFixed(2)}</p>

            <p>
                Discount:
                <input type="number" value={discount} onChange={e => setDiscount(parseFloat(e.target.value) || 0)}></input>
            </p>

            <p>Final Cost {finalCost.toFixed(2)}</p>
            <button onClick={addItem}>Add Product</button>
        </div>
    )
}