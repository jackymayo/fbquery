class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			query: '',
			notLoading: true,
			messages: null,
			results: null,
			fileName: '',
		}
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
		if (!this.state.messages){
			// Add notification to be 
			this.setState({query: ''})
			return
		}
		this.loadingStatusToggle();
		let query = event.target.value;
		let filteredMessages = this.state.messages &&
			this.state.messages.filter(x => x.content.toLowerCase().includes(query.toLowerCase()));
		
		this.setState({
			query : event.target.value,
			results: filteredMessages
		}, () => this.loadingStatusToggle())
	}

	updateFile(fileList){
		this.loadFileContent(fileList[0]).then(
			(value) => {
				this.loadingStatusToggle();
				let data  = JSON.parse(value);
				let participants = data['participants'];
				let messages = data['messages'];
				this.setState({
					messages: messages,
					fileName: fileList[0].name
				})
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
				query={this.state.query}
				results={this.state.results}
				dataLoaded={this.state.messages != null}
			/>
		)
	}
	render () {
		return (
			<div className="container">
		    <form >
						<div className="row">
							<div className="file-field input-field">
								<div className="btn">
									<span>Browse</span>
									<input 
										type="file"
										onChange={ event => this.updateFile(event.target.files)}
									/>
								</div>
								<div className="file-path-wrapper">
									<input  className="no_border file-path validate" value={this.state.fileName} placeholder="Choose a JSON file..." type="text"/>
								</div>
							</div>
						</div>
		      <div className="row">
		        <div className="input-field col s12">
							
		          <input
									type="text"
									id="autocomplete-input" 
									value={this.state.query}
									placeholder="Enter your search here..."
									className="autocomplete"
									onChange={event => this.updateSearchResults(event)}
							/>
		        </div>
		      </div>
		    </form>
						<div className="center">
						{this.renderLoadingBar()}	
						</div>
					{this.renderSearchResults()}
			</div>

		);
	}
}