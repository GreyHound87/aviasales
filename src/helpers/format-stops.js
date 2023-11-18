const formatStops = (stops) => {
  if (stops.length === 0) {
    return 'БЕЗ ПЕРЕСАДОК'
  }
  if (stops.length === 1) {
    return '1 ПЕРЕСАДКА'
  }
  if (stops.length <= 4) {
    return `${stops.length} ПЕРЕСАДКИ`
  }
  return 'БОЛЕЕ 4 ПЕРЕСАДОК'
}

export default formatStops
