import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
export default function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="flex">
        <div className="grow w-80 xlx:hidden"> <Sidebar/></div>  
        <div className="">
        <Feed/>
        </div>
      </div>
    </div>
  )
}