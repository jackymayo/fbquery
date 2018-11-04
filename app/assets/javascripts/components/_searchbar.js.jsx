class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
			notLoading: true,
			messages: null,
			results: null
		}
	}

	epochConverter(epochSeconds) {
		let d = new Date(0);
		d.setUTCSeconds(epochSeconds)
		return d;
	}
	

	loadFileContent(file){
		const fileReader = new FileReader();
		this.loadingStatusToggle()
		return new Promise((resolve,reject) => {
			fileReader.onload = event => resolve(event.target.result);
			fileReader.onerror = error => reject(error);
			fileReader.readAsText(file);
		});
	}

	updateSearchResults(event){
		let query = event.target.value;
		let filteredMessages = this.state.messages &&
			this.state.messages.filter(x => x.content.includes(query));
		this.setState({
			query : event.target.value,
			results: filteredMessages
		})
	}

	updateFile(fileList){
		this.loadFileContent(fileList[0]).then(
			(value) => {
				this.loadingStatusToggle();
				let data  = JSON.parse(value);
				let participants = data['participants'];
				let messages = data['messages'].slice(0,50);
				this.setState({
					messages: messages
				})
				console.log(messages);
			}
		);
	}
	
	loadingStatusToggle(){
		this.setState({
			notLoading: !this.state.notLoading
			}
		)
	}

	renderLoadingBar(){
		return (
			<LoadingBar 
				hidden={this.state.notLoading}
			/>
		)
	}
	renderSearchResults(){
		return (
			<Results
				results={this.state.results}
			/>
		)
	}
	render () {
		return (
			 <div >
		    <form className="col s12">

		      <div className="row">
		        <div className="input-field col s12">
		          <i className="material-icons prefix">textsms</i>
							
		          <input
									type="text"
									id="autocomplete-input" 
									query={this.state.query}
									className="autocomplete" onChange={event => this.updateSearchResults(event)}/>
							<input 
								type="file"
								onChange={ event => this.updateFile(event.target.files)}
							/>
		        </div>
						
		      </div>
		    </form>
				<div className="row">
					{this.renderLoadingBar()}	
				</div>
					{this.renderSearchResults()}
			</div>

		);
	}
}