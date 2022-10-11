import './ButtonUIStyle.css'

export const ButtonUI = ( {text, style, event, id, type} ) => {
  return (
    <button
        className={style}
        onClick={event}
        id={id}
        type={type}
    >
        { text }
    </button>
  )
}
