import AppFooter from "./AppFooter"
import AppHeaderNav from "./AppHeaderNav"

const AppLayout = ({children}) => {
  return (
    <>
    <div className="">
    <AppHeaderNav/>
    {children}
    <AppFooter/>
    </div>
    </>
  )
}
export default AppLayout