import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'
import Carousel from '../common/Carousel'
class DetailHouse extends Component {

  render() {
    console.log(this.props,'history')
    const {
      estateType,
      zone,
      airConditioningSystemType,
      heatingSystemType,
      floorMaterialType,
      roomCount,
  
      wc,
      countOfBathroom,
      floor,
      countOfBuildingFloors,
      countOfBuildingUnits,
      countOfUnitInFloor,
      address,
      preRent,
      rent,
      images,
      hasBalcony,
      hasParkingShared,
      westernWc,
      easternWc,
      hasFireFighting,
      hasWasteShooting,
      hasPool,
      hasSauna,
      hasJacuzzi
   
    } = this.props.house;
    const Boolean = (boolian)=>{
      return  boolian? 'دارد':"ندارد"
    }
    console.log(this.props.house,'yygygygygyg')
    if (this.props.house.length ===0){
       return <Redirect to='/houses' />
    }
    return (
      <div className='container'> 
          
            <Carousel images={images} />
            <h1>مشخصات منزل</h1>
            <div  className='OPTION_DETAIL'>
            <p>
          نوع ساختمان:{estateType.name}
          </p>
          <p> آدرس:{address}</p>
          <p> منطقه:{zone}</p>
          <p> ودیعه:{preRent} ریال</p>
          <p> اجاره:{rent} ریال</p>
          <p> طبقه:{floor}</p>
          <p> تعداد طبقات مجتمع:{ countOfBuildingFloors}</p>
          <p> تعداد کل واحد ها:{countOfBuildingUnits}</p>
          <p> تعدا کل واحد های هر طبقه:{countOfUnitInFloor}</p>
      
          <p> تعداداتاق ها خواب:{roomCount}</p>
          <p> تعداد حمام:{countOfBathroom}</p>
          <p> تعداد سرویس بهداشتی:{wc}</p>
          <p> کف:{floorMaterialType.name}</p>
          <p> سیستم سرمایشی:{airConditioningSystemType.mame}</p>
          <p> سیستم گرمایشی:{heatingSystemType.name}</p>
          
            </div>
         
          <hr />

         <div className='OPTION_DETAIL'> 
         <p> بالکن :{Boolean(hasBalcony)}</p>
          <p> استخر :{Boolean(hasPool)}</p>
          <p> جکوزی :{Boolean(hasJacuzzi)}</p>
          <p> سونا :{Boolean(hasSauna)}</p>
          <p> پارکینگ اشتراکی :{Boolean(hasParkingShared)}</p>
          <p> توالت فرنگی :{Boolean(westernWc)}</p>
          <p> توالت ایرانی :{Boolean(easternWc)}</p>
          <p>  سیستم اتفاِء حریق :{Boolean(hasFireFighting)}</p>
          <p>  شوتینگ زباله :{Boolean(hasWasteShooting)}</p>
         </div>
         <button  type="button" className="btn btn-danger m-4" onClick={()=>this.props.history.goBack()} >بازگشت به صفحه اصلی</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  house:state.houses.house
  };
};

export default connect(mapStateToProps)(DetailHouse);
