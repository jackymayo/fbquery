class SideNav extends React.Component{
	render(){
		return (
			<form>
				<ul id="slide-out" className="sidenav sidenav-fixed">
					<li>
						<div className="user-view">
							<div className="background"></div>
						<a href="#user"></a>
						<a href="#name"><span className="white-text name">John Doe</span></a>
						<a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
						</div>
					</li>
			<li><a href="#!"><i className="material-icons">cloud</i>First Link </a></li>
			<li><a href="#!">Second Link</a></li>
			<li><div className="divider"></div></li>
			<li><a className="subheader">Subheader</a></li>
				</ul>
			</form>
		);
	}
}

