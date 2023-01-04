import React from "react"

export interface IProps {
  title?: string
  content?: string | React.ReactNode
  style?: React.CSSProperties
}

const Card = ({ title, content, style }: IProps) => {
  return (
    <div style={style}>
      <div style={{ padding: 24, borderRadius: 8, boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px rgb(0 0 0 / 3%), 0 12px 24px rgb(0 0 0 / 3%)' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
          {title}
        </div>
        <div style={{ paddingTop: 16 }}>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Card