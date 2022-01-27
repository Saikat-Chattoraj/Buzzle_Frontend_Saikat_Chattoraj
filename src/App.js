import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
export default function App() {
  return (
    <div className="">
      <Navbar/>
      <div className="xl:grid-cols-[300px_minmax(900px,_1fr)_100px] grid ">
      <Sidebar/>
        <div className="col-start-2 col-end-[max-w-screen]">
        <Feed/>
        </div>
      </div>
    </div>
  )
}