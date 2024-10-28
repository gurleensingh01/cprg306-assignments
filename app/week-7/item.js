export default function Item( {name, quantity, category} ) {
    return (
        <ul className="m-5 bg-slate-900 p-3 w-1/4 rounded-full text-center">
            <li className="text-xl font-bold">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    )
  }