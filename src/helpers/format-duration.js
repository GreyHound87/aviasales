const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  return `${hours}ч ${remainingMinutes}м`
}

export default formatDuration
