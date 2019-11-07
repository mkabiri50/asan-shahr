import React from "react";
import Carousel from "../../common/Carousel";
const House = props => {
  const {
    estateType,
    zone,
    buildingViewType,
    buildingDirectionType,
    buildingUnitDirectionType,
    roomCount,
    area,
    floor,
    preRent,
    rent,
    clicked
  } = props;

  return (
    <div className="card">
      <Carousel images={props.images} style={{ height: 300 }} />
      <div  className="card-body">
        <p className="card-title">
          {area}متر مربع {estateType} در {zone}{" "}
        </p>
        <p>
          {buildingViewType} {buildingDirectionType} {buildingUnitDirectionType}{" "}
        </p>

        <div className="card-text">
          <p>
            {roomCount} خواب {"-"} طبقه {floor}
          </p>
          <p style={{ fontSize: ".6rem", color: "red", fontWeight: "bold" }}>
            (( ودیعه:{preRent} ریال )) (( اجاره ماهیانه :{rent} ریال))
          </p>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={clicked} className="text-muted">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
};

export default House;
