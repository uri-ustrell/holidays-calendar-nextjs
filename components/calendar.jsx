import React, { useState } from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'


const getMonthDays = (year, month) => new Date(year, month, 0).getDate()

const getDate = (year, month, day) => new Date(year, month, day)

const formatDate = date => dayjs(date).format('DD')

const formatMonth = month => dayjs(getDate(2020, month, 1)).format("MMMM")

const getMonthDaysList = (year, month) => {
  const monthDays = getMonthDays(year, month)
  return Array.from({ length: monthDays }, (_, day) => getDate(year, month - 1, day + 1))
}

const Title = styled.div`
margin-bottom: 1rem;
margin: auto;

`

const Pointer = styled.div`
width: 10px;
height: 10px;
margin: auto;
border-${props => (props.left && "right") || "left"}: black 10px solid;
border-bottom: transparent 5px solid;
border-top: transparent 5px solid;
box-sizing: border-box;
}
`

const CalendarHeader = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
width: 600px;
`

const CalendarGrid = styled.div`
display: grid;
grid-row-gap: 10px;
width: 600px;
grid-template-columns: repeat(7, 1fr);
`

export const Calendar = ({ year, holidays }) => {
  const [month, setMonth] = useState(2)
  const handleChangeMonthClick = steps => setMonth(prevMonth => prevMonth + steps)
  const monthDaysList = getMonthDaysList(year, month)

  return (
    <>
      <CalendarHeader><Pointer left onClick={() => handleChangeMonthClick(-1)} /><Title>{formatMonth(month - 1)}</Title><Pointer right onClick={() => handleChangeMonthClick(1)} /></CalendarHeader>
      <CalendarGrid>{monthDaysList.map(day => <div key={day}>{formatDate(day)}</div>)}</CalendarGrid>
    </>
  )
}
