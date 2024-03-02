import React from 'react';
import message from '../../../assets/images/messageimage.jpg';
import { Card, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DeleteMessageHook from '../../../hooks/admin/message/deleteMessageHook';

function Message({ data }) {
  const [onSubmit, loading]=DeleteMessageHook();

const handleSubmit=()=>{
  onSubmit(data.id);
}
  const history = useNavigate();

  const handleClick = () => {
    history(`/message-details`, { state: { messData: data } });
  };

  return (
    <Card style={{ width: '17rem' }}  className="mb-3">
      <Card.Img
        variant="top"
        style={{ height: '180px' }}
        src={message}
      />

<span
        style={{
          position: 'absolute',
          top: '140px',
          right: '0px',
          backgroundColor: '#1c1e53',
          borderRadius: '41%',
          padding: '5px',
          height: '35px',
          width: '47px',
        }}
        onClick={handleSubmit}
      >
        <Row className="d-flex justify-content-between">
          <span
            style={{ color: 'white', fontSize: '20px', fontWeight: 'medium' }}
            className="mx-3"
          >
            X
          </span>
        </Row>
      </span>

      <Card.Body onClick={handleClick}>
        <Card.Title
          style={{ fontFamily: 'Poppins', fontWeight: '600', fontSize: '38px' }}
        >
        
          {data.name}
        </Card.Title>
        <Card.Text
            style={{
              fontSize: '32px',
              fontWeight: 'medium',
              fontFamily: 'Poppins',
              color: '#282938',
            }}
        >
          {data.email}
          
        </Card.Text>

      </Card.Body>
    </Card>
  );
}

export default Message;
