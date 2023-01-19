import React from "react"

export interface CardProps {
  title?: string
  subtitle?: string | React.ReactNode
  style?: React.CSSProperties
  actions?: React.ReactNode
  content?: React.ReactNode
}

const Card = ({ title, subtitle, style, actions, content }: CardProps) => {
  return (
    <div style={style}>
      <div style={{ padding: 24, borderRadius: 8, background: 'white', boxShadow: '0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px rgb(0 0 0 / 3%), 0 12px 24px rgb(0 0 0 / 3%)' }}>
        <div style={{ display: 'flex', gap: 24 }}>
          <div style={{ backgroundColor: '#F2F2F2', borderRadius: 10, width: '100px', height: '100px' }}>

          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#3D6545' }}>
              {title}
            </div>
            <div style={{ paddingTop: 8, color: '#797979' }}>
              {subtitle}
            </div>
            <div style={{marginTop: 24,}}>{content}</div>
          </div>
        </div>
      {
        actions &&
        <div style={{borderTop: '1px solid #E3E3E3', paddingTop: 12, marginTop: 24 }}>{actions}</div>
      }
      </div>
    </div>
  )
}

export default Card