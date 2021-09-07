export default function CircleLogo({ color, text }) {
  return (
    <div>
      <svg height="16" width="17">
        <circle cx="8" cy="9" r="7" stroke="black" fill={color} />
      </svg>
      {text}
    </div>
  )
}