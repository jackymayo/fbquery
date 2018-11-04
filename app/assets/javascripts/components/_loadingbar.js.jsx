class LoadingBar extends React.Component {
	render() {
		return(
			<div className='row'>
				<div className='col s12 m4 l2'></div>
				<div className='col s12 m4 l8'>
					<div className={'preloader-wrapper big active ' + (this.props.hidden? 'hidden': '')} >
						<div className="spinner-layer spinner-blue-only ">
							<div className="circle-clipper left">         
								<div className="circle"></div>              
							</div>                                        
							<div className="gap-patch">                   
								<div className="circle">                    
								</div>                                      
							</div>                                        
							<div className="circle-clipper right">        
								<div className="circle"></div>
							</div>
						</div>
					</div>
				</div>
				<div className='col s12 m4 l2'></div>
			</div>
		);
	}
}
