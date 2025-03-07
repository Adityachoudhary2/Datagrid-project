import React from 'react'



interface StatusIndicatorProps {
  status: "available" | "scheduled";
}

const  StatusIndicator: React.FC<StatusIndicatorProps> = ({status}) => {

  return status === "available" ? <span style={{color:"green"}}>●</span> : null
}

export default StatusIndicator
