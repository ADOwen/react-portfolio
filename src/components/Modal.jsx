import Card from "./Card"

const Modal = ({className, children}) => {
  return (
    <>
    <section id="backdrop"></section>
    <Card className={className}>
      {children}
    </Card>
    </>
  )
}

export default Modal