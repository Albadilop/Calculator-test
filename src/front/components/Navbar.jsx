import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar">
			<div className="container">
		
	<p class="d-inline-flex gap-1">
  <a class="btn" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
<i class="fa-solid fa-list history-button-icon"></i>

  </a>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        historial
      </div>
    </div>
  </div>

</div>
			</div>
		</nav>
	);
};