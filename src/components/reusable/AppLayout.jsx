import AppFooter from "./AppFooter"
import AppHeaderNav from "./AppHeaderNav"

const AppLayout = ({children}) => {
  return (
    <>
    <AppHeaderNav/>
    {children}
    <AppFooter/>
    </>
  )
}
export default AppLayout