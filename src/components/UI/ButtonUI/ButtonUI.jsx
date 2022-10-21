export const ButtonUI = ( {text, styleName, event, id, type,disabled} ) => {
  return (
    <button
        className={styleName}
        onClick={event}
        id={id}
        type={type}
        disabled = {disabled}
    >
        { text }
    </button>
  )
}
