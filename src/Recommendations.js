import React, { Component, Fragment } from 'react';

export default class Recommendations extends Component{

	constructor(props){
		super(props)
		this.getRecommendations = this.getRecommendations.bind(this)

	}

	getRecommendations(){
		if(this.props.data.length>0){
			const recommendations = this.props.data.map((r, i)=>{
		    	const routes = r.routes
		    	
		    	const segments = routes.map((route, ri)=>{
		    		const segment = route.segments.map((s, si)=>{
		    			// Array.from(s).forEach((ss,ssi)=>{
		    			// 	console.log(ss)
		    			// })
		    			return (
			    			<tr key={Math.random()}>

			    				<td>{s.departure_airport_name}</td>
								<td>{s.departure_country_name}</td>
								<td>{s.departure_country}</td>
								<td>{s.departure_city_name}</td>
								<td>{s.departure_city}</td>
								<td>{s.departure_airport_name}</td>
								<td>{s.departure_airport}</td>
								<td>{s.departure_terminal}</td>
								<td>{s.departure_time}</td>
								<td>{s.arrival_country_name}</td>
								<td>{s.arrival_country}</td>
								<td>{s.arrival_city_name}</td>
								<td>{s.arrival_city}</td>
								<td>{s.arrival_airport_name}</td>
								<td>{s.arrival_airport}</td>
								<td>{s.arrival_terminal}</td>
								<td>{s.arrival_time}</td>
								<td>{s.supplier_code}</td>
								<td>{s.supplier}</td>
								<td>{s.operating_supplier_code}</td>
								<td>{s.flight_number}</td>
								<td>{s.aircraft_code}</td>
								<td>{s.aircraft}</td>
								<td>{s.flight_duration}</td>
								<td>{s.stops}</td>
								<td>{s.service_class_type}</td>
								<td>{s.service_class}</td>
								<td>{s.fare_code}</td>
								<td>{s.baggage}</td>
			    			</tr>


			    		)


		    		})
		    		return (
			    		<Fragment key={Math.random()}>
			    			<tr key={Math.random()}>
			    				<td colSpan={29} style={{color: route.route_index == 0 ?'green':'red'}}>
					    			{
					    				route.route_index == 0 ? 'Gediş':'Qayıdış'

					    			}
			    				</td>
			    			</tr>
			    			{segment}
			    		</Fragment>

			    	)
		    		
		    		
		    	})
		    	return (
		    		<Fragment key={Math.random()}>
		    			<tr key={Math.random()}><td colSpan={29}><h2>{r.amount.USD+' $ '}-{r.amount.AZN+' AZN '}</h2></td></tr>
		    			{segments}
		    			<tr key={Math.random()}><td colSpan={29} style={{backgroundColor: 'gray'}}>&nbsp;</td></tr>
		    		</Fragment>

		    	)
		    })
			return recommendations
				
			
		}
		return null
      	// return (<center key={i}>{r.amount.USD+ '$ '} - {r.amount.AZN+ "AZN"}</center>)
  
    
	}

	render(){
		return (
			<div className="table-responsive">
				<table className="table table-bordered">
				<thead>
					<tr>
						<th>departure_airport_name</th>
						<th>departure_country_name</th>
						<th>departure_country</th>
						<th>departure_city_name</th>
						<th>departure_city</th>
						<th>departure_airport_name</th>
						<th>departure_airport</th>
						<th>departure_terminal</th>
						<th>departure_time</th>
						<th>arrival_country_name</th>
						<th>arrival_country</th>
						<th>arrival_city_name</th>
						<th>arrival_city</th>
						<th>arrival_airport_name</th>
						<th>arrival_airport</th>
						<th>arrival_terminal</th>
						<th>arrival_time</th>
						<th>supplier_code</th>
						<th>supplier</th>
						<th>operating_supplier_code</th>
						<th>flight_number</th>
						<th>aircraft_code</th>
						<th>aircraft</th>
						<th>flight_duration</th>
						<th>stops</th>
						<th>service_class_type</th>
						<th>service_class</th>
						<th>fare_code</th>
						<th>baggage</th>
					</tr>
				</thead>
				<tbody>{this.getRecommendations()}</tbody>
				</table>
			</div>
		)


        
	}
}