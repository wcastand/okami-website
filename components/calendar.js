import React from 'react'
import glamorous, {Div} from 'glamorous'
import {
  Calendar,
  MonthlyCalendar,
  WeeklyCalendar,
  DailyCalendar,
  Navigation,
  DaysLabels,
} from 'okami'

const Cell = glamorous.div(
  {
    flex: 1,
    borderRadius: 2,
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#FFF',
    transition: 'all .3s ease',
    width: 30,
    height: 30,
    lineHeight: '30px',
    color: '#3E4147',
    ':hover': {
      backgroundColor: '#3E4147',
      color: '#FFF',
    },
  },
  props => ({
    boxShadow: props.hasEvent ? 'inset 0 0 0 2px #A9DA88' : 'none',
  })
)
const Cal = props => (
  <Div
    display="flex"
    justifyContent="center"
    alignItems="center"
    padding={30}
    minHeight={350}
    {...props}>
    <Calendar
      data={[{id: 1, title: 'Event 1', allDay: new Date()}]}
      startingDay="monday"
      dateFormat="DD">
      <MonthlyCalendar>
        {({calendar, start: currentMonth, rowHeight}) => (
          <Div
            display="flex"
            flexDirection="column"
            width={255}
            height={280}
            padding={12}
            borderRadius={4}
            backgroundColor="#FFF"
            boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)">
            <Navigation dateFormat="MMMM">
              {({next, prev, today, currentDate}) => (
                <Div
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  height={35}
                  color="#3E4147">
                  <button onClick={prev}>{'<'}</button>
                  <span children={currentDate} />
                  <button onClick={next}>{'>'}</button>
                  <button onClick={today}>Today</button>
                </Div>
              )}
            </Navigation>
            <Div display="flex" flexDirection="column">
              <DaysLabels
                dateFormat="dd"
                style={{display: 'flex', width: '100%', color: '#3E4147'}}
                renderChild={props => (
                  <span
                    style={{flex: 1, textAlign: 'center', height: rowHeight, lineHeight: '30px'}}
                    {...props}
                  />
                )}
              />
              <Div display="flex" flexDirection="column">
                {calendar.map((startWeek, idx) => (
                  <WeeklyCalendar key={`week_cal_${idx}`} start={startWeek}>
                    {({calendar: weekly}) => (
                      <Div position="relative" width="100%">
                        <Div display="flex">
                          {weekly.map((day, idx) => (
                            <DailyCalendar key={`daily_cal_${idx}`} start={day} dateFormat="DD">
                              {({calendar: daily, dayEvents, start: currentDay, dateLabel}) => (
                                <Cell hasEvent={daily.events.length > 0 || dayEvents.length > 0}>
                                  {dateLabel()}
                                </Cell>
                              )}
                            </DailyCalendar>
                          ))}
                        </Div>
                      </Div>
                    )}
                  </WeeklyCalendar>
                ))}
              </Div>
            </Div>
          </Div>
        )}
      </MonthlyCalendar>
    </Calendar>
  </Div>
)

export default Cal
