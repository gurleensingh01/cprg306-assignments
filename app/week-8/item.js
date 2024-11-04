export default function Item( {name, quantity, category, onSelect} ) {
    return (
        <ul onClick={onSelect} className="m-5 bg-slate-900 p-3 rounded-full text-center hover:bg-orange-700">
            <li className="text-xl font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    )
  }