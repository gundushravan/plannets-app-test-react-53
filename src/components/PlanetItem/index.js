import './index.css'

const PlanetItem = props => {
  const {eachPlanetItem} = props
  const {description, imageUrl, name} = eachPlanetItem
  return (
    <div className="bg-cont">
      <div>
        <img className="image" src={imageUrl} alt={`planet ${name}`} />
      </div>
      <h1 className="para">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
