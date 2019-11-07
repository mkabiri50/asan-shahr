import React from 'react';
import Input from './input'
const FormilStyle = ({ label, formikProps, formikKey,style, ...rest }) => {
    const InputStyle= {
            width: '100%',
            borderColor: '#bbb',
            borderWidth: 1,
            backgroundColor: '#fff',
            padding: 5,
            margin:'auto'
        }

    if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
      InputStyle.borderColor = 'red'
    }
    return (
        <div style={{ marginHorizontal: 20, marginVertical: 5 }}>
            <p style={{  marginLeft: 20, marginBottom:0, textAlign:'left' }}>{label}</p>
            <Input
               style={InputStyle}
                onChange={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                error={formikProps.errors[formikKey]}
                {...rest}
            />
       

        </div>
    );
}

export default FormilStyle;