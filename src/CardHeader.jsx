import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons'
import padTime from './padTime'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: `0 ${theme.spacing(-2)}px
    ${theme.spacing(4)}px
    ${theme.spacing(-2)}px`,
    borderRadius: '20px 20px 0 0',
  },
  date: {
    marginLeft: theme.spacing(2),
  },
  city: {
    backgroundColor: 'rgba(13, 159, 234, 0.08);',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: '0 20px 0 20px',
    color: '#0DA0EA',
  },
}))

const weekday = [
  'Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat',
]
const month = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function CardHeader(props) {
  const classes = useStyles()
  const {
    dt,
    country,
    name,
    timezone,
  } = props

  const date = new Date((dt + timezone) * 1000)

  return (
    <div className={classes.header}>
      <Typography color="textSecondary" variant="caption" className={classes.date}>
        {`${weekday[date.getUTCDay()]}, ${date.getUTCDate()}
        ${month[date.getUTCMonth()]} ${date.getUTCFullYear()} | ${padTime(date.getUTCHours(), date.getUTCMinutes())}`}
      </Typography>
      <Typography variant="caption" className={classes.city}>
        {name}
        {', '}
        {country}
        <LocationOn style={{ fontSize: '1em', marginLeft: '2px' }} />
      </Typography>
    </div>
  )
}

export default CardHeader
