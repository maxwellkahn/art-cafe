export default function CategoryList({categories, activeCat, setActiveCat}) {
    const cats = categories.map(cat => 
        <li key={cat} onClick={() => setActiveCat(cat)}
        >
            {cat}
        </li>
        );
        return (
            <ul>
                {cats}
            </ul>
        )
}