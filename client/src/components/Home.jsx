import Navbar from "./layout/Navbar";
import Alumnostable from "./posts/Alumnostable";
function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand">
                <div className=""></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className=""></div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">My Reports</h1>
              <div className="flex-shrink-0 dropdown">
          <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
            <img src="https://github.com/mdo.png" alt="mdo" width="32"
             height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small shadow show"  data-popper-placement="bottom-end">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
            </div>

            <canvas
              className=" canvas my-4 w-100 chartjs-render-monitor"
              id="myChart"
              width="519"
              height="219"
              
            ></canvas>
            <Alumnostable/>     
          </main>
       
        </div>
   
      </div>
    </>
  );
}

export default Home;
