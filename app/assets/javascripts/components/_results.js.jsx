class Results extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
			return (
			<ul className="collection">
				{ this.props.messages && this.props.messages.map((x,i)=>{
					return (
						<li key={i} className="collection-item">
							<span title="title"> {x.content} </span> 
						</li>
					);
				})}
			</ul>
		)	
	}


};
