import './index.css';


const  homeSectionNavbar=(props)=> {
  return (
    <>
      <nav>
        <div className="admin" onClick={()=>{props.adminClicked(1)}}>ADMIN</div>
      </nav>
    </>
  );
}

export default homeSectionNavbar;