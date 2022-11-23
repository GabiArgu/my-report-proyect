import logo from "../../assets/logomyreports444.gif"

function Footer() {
  return (
    <div className="container">
      

      <br />
      <br />
      <br />
      

      <br />
      <br />
      <br />
    
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
         
          <span className="mb-3 mb-md-0 text-muted">
            © 2022 <i>MY REPORTS</i>   "Todo es mejor organizado"
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex align-content-between">
          <li className="ms-3">
      
          <img
           className="loguito "
           src={logo}
            height="100px"
           alt="gif de algo"
           />
          </li>

        </ul>
      </footer>
    </div>
  );
}

export default Footer;
