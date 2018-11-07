class Results extends React.Component {
	constructor(props){
		super(props);
	}
	
	epochConverter(epochMilliseconds) {
		let epochSeconds = epochMilliseconds/1000
		let d = new Date(0);
		d.setUTCSeconds(epochSeconds)
		return d.toUTCString();
	}

	returnProperHeader(){
		if (this.props.dataLoaded){
			if(this.props.query.length > 0){
				return( <h4>{'Search results found: ' + this.props.results.length}</h4>);
			}
			else {
				return( <h4> Data loaded. Type in search bar to begin </h4>);
			}
		}
	}

	render() {
		return (
			<ul className="collection with-header">
				<li className="collection-header">
					{this.returnProperHeader()}
				</li>
				{ this.props.query.length > 0 && this.props.results &&
						this.props.results.map((x,i)=>{
					// TODO: Add message type (link included or not)
					return (
						<li key={i} className="collection-item avatar">
						  <i className='material-icons circle'>mode_comment</i>
							<span title="title"> {x.sender_name} </span>
							<p><br/>{x.content}</p>
							<a className='secondary-content'>{this.epochConverter(x.timestamp_ms)}</a>
						</li>
					);
					})
				}
			</ul>
		)	
	}

};
