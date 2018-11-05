class Results extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
			return (
			<ul className="collection with-header">
				<li className="collection-header"><h4>
					{this.props.query.length > 0? 
						'Search results found: ' + this.props.results.length : 'Enter your search'}</h4></li>
				{ this.props.query.length > 0 && this.props.results && this.props.results.map((x,i)=>{
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
