import React, { Component } from "react";
import {connect}from 'react-redux';
import * as actions from '../../store/actions/index';

import House from "./House/House";

class Houses extends Component {

  componentDidMount() {
    this.props.onInitHouses(this.props.houses)
  


  }
  handleShowMore=house=>{
    console.log(house)
    this.props.onShowDetails(house)
    this.props.history.push( `/house/id: ${house.id} `);
  }
  render() {
console.log(this.props.houses)
    return (
      <div  dir="rtl" className="card-columns">
        {this.props.houses.map(house => (
          <House
            key={house.id}
            images={house.images}
            estateType={house.estateType.name}
            rent={house.rent}
            preRent={house.preRent}
            zone={house.street.zone.name}
            address={house.address}
            buildingViewType={house.buildingViewType.name}
            buildingDirectionType={house.buildingDirectionType.name}
            buildingUnitDirectionType={house.buildingUnitDirectionType.name}
            offerStateType={house.offerStateType.name}
            roomCount={house.roomCount}
            area={house.area}
            wc={house.wc}
            countOfBathroom={house.countOfBathroom}
            floor={house.floor}
            countOfBuildingFloors={house.countOfBuildingFloors}
            countOfBuildingUnits={house.countOfBuildingUnits}
            countOfUnitInFloor={house.countOfUnitInFloor}
            clicked={()=>this.handleShowMore(house)}
          />
        ))}
    
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    houses: state.houses.houses,
      error :state.houses.error,
  };
}
const mapDispatchToProps = dispatch => {
  return {
      onInitHouses: () => dispatch(actions.initHouses()),
      onShowDetails:(house)=>dispatch(actions.getHouseDetail(house))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Houses);
