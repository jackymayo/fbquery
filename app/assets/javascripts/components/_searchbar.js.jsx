class SearchBar extends React.Component{
	constructor(){
		super();
		this.state = {
			value: '',
			notLoading: false
		}
	}

	// Set the state of the form and console log
	updateInputValue(event){
		console.log(event.target.value);
		this.setState({
			value : event.target.value,
		});
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
	updateFile(fileList){
		this.loadFileContent(fileList[0]).then(
			(value) => {
				this.loadingStatusToggle();
				console.log(value);
			}
		);
	}
	
	loadingStatusToggle(){
		this.state.notLoading = (this.state.notLoading) ? false : true
	}

	renderLoadingBar(){
		return (
			<LoadingBar 
				hidden={this.state.notLoading}
			/>
		)
	}
	render () {
		return (
			 <div className="row">
		    <div className="col s12">

					<div className="row"> {this.renderLoadingBar()}
					</div>
		      <div className="row">
		        <div className="input-field col s12">
		          <i className="material-icons prefix">textsms</i>
							
		          <input
									type="text"
									id="autocomplete-input" 
									value={this.state.value}
									className="autocomplete" onChange={event => this.updateInputValue(event)}/>
							<input 
								type="file"
								onChange={ event => this.updateFile(event.target.files)}
							/>
		        </div>
		      </div>
		    </div>
			</div>
		);
	}
}