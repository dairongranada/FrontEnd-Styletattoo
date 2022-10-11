export const ButtonUI = ( {text, styleName, event, id, type} ) => {
  return (
    <button
        className={styleName}
        onClick={event}
        id={id}
        type={type}
    >
        { text }
    </button>
  )
}
