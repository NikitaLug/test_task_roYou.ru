import React from 'react';
import { CustomPicker } from "react-color";
import { Hue, Saturation } from "react-color/lib/components/common";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { changingColor } from '../../../redux/action_creators';

const PickerWrapper = styled.div`
    margin-top: 25px;
`
const HueWrapper = styled.div`
      height: 10px;
      width: 343px;
      position: relative;
      margin-bottom: 10px;
      cursor: pointer;
`
const SaturationWrapper = styled.div`
      width: 343px;
      height: 150px;
      position: relative;
      cursor: pointer;
`

export const MyPicker = ({ changingColor, updateColor, }) => {


  const onChange = color => changingColor(color)

  return (
    <PickerWrapper>
      <HueWrapper>
        <Hue hsl={updateColor} onChange={onChange} />
      </HueWrapper>

      <SaturationWrapper>
        <Saturation hsl={updateColor} hsv={updateColor} onChange={onChange}/>
      </SaturationWrapper>
      
    </PickerWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    updateColor: state.palette.changingColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changingColor: color => dispatch(changingColor(color)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomPicker(MyPicker));