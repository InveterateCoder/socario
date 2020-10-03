export default function padTime(h, m) {
  const hrs = h.toString().length === 1 ? `0${h}` : h
  const min = m.toString().length === 1 ? `0${m}` : m
  return `${hrs}:${min}`
}