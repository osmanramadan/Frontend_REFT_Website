import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    // Add more questions and answers as needed
  ];

  return (
    <Accordion>
      {faqData.map((faq, index) => (
        <div key={index}>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={index.toString()}
                onClick={() => handleToggle(index)}
              >
                {openIndex === index ? 'x' : '+'}
              </Accordion.Toggle>
              <span>{faq.question}</span>
            </Card.Header>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body>{faq.answer}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <div
            style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}
          ></div>
        </div>
      ))}
    </Accordion>
  );
}

export default FAQComponent;
