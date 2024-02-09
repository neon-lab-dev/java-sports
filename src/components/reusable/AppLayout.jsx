import AppFooter from "./AppFooter"
import AppHeader from "./AppHeader"
import AppHeaderNav from "./AppHeaderNav"

const AppLayout = ({children}) => {
  return (
    <>
    <AppHeader/>
    {children}
    <AppFooter/>
    </>
  )
}
export default AppLayout