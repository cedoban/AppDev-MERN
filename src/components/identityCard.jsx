function Card({ title, description, image }) {
  return (
    <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden m-4">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
        </button>
      </div>
    </div>
  )
}

export default Card