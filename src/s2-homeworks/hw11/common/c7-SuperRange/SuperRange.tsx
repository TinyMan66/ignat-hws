import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                color: '#00CC22',
                borderRadius: '10px'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default SuperRange
