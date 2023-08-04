import CategoryButton from "./CategoryButton"


const ProjectCategories = ({categories}) => {
  return (
    <div>
      <div className="portfolio__categories">
        {
          categories.map(category => (
            <CategoryButton key={category} category={category} className={`btn cat__btn white`}/>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectCategories