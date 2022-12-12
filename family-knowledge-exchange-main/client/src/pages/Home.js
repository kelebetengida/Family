import React from 'react';
import { useQuery } from '@apollo/client';
import { Image, Stack } from 'react-bootstrap';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div style={{ border: null }}>
          <Image
            src="https://images.unsplash.com/photo-1611516818236-8faa056fb659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80/100px200"
            fluid
          />
        </div>
        <div className="col-12 col-md-10 mb-3 p-3" style={{ border: null }}>
          The shape and nature of the American Family is shifting and changing:
          no longer Mom, Dad and 2.4 kids – if it ever was – the diverse and
          variegated nature of our families provide huge opportunities for our
          country. At the very least, the open and evolving reality of our
          family structures works to provide increased levels of social
          resilience, innovative approaches to exploring social, economic and
          political issues, and the provision of a dynamic platform for dealing
          with broader shifts in our society as the world continues to change
          around us at an ever-accelerating rate. The Family Knowledge Exchange
          provides a place where professionals working to support families in
          their work can come together to connect with others who share their
          interests and want to collaborate to bring about positive change for
          American families.
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Home;
