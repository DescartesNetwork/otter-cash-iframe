import { Col, Row, Space, Typography } from 'antd'

const MainnetOnly = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24} style={{ height: 32 }} />
      <Col span={24} style={{ textAlign: 'center' }}>
        <Space direction="vertical">
          <Typography.Title level={2}>
            ⚠️ Only supported on Solana mainnet.
          </Typography.Title>
          <Typography.Text>
            You can open the Control Center, switch to mainnet and experience
            the application.
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  )
}

export default MainnetOnly
