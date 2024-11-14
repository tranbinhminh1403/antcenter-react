import { ConfigProvider } from 'antd'
import React from 'react'


const Customized = ({children}) => {
  return (
    <ConfigProvider
        theme={{
            components: {
                Input: {
                  activeBorderColor: 'black',
                  hoverBorderColor: 'black',
                },
            },
            token: {
                // screenLG: 900,
                // screenLGMin: 900,
                // screenMDMax: 899,
            }
        }}
    >
        {children}
    </ConfigProvider>
  )
}

export default Customized