import React, { useState, useEffect } from 'react';
import Spinner from '../animations/Spinner';
import Portfolio from './Portfolio';

const Portfolios = () => {
  const [data, setdata] = useState({
    portfolios: [],
    loading: true,
    errors: null
  });

  useEffect(() => {
    const getPortfolios = async () => {
      try {
        const req = await fetch('http://localhost:5000/api/portfolios');
        const portfolios = await req.json();

        setdata({ portfolios: portfolios, loading: false });
      } catch (err) {
        console.log(err);
        setdata({
          errors: err,
          loading: false
        });
      }
    };
    getPortfolios();
  }, []);
  const { portfolios, loading } = data;
  console.log(portfolios);
  return (
    <section>
      <div className='container'>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <h3 className='heading'>PortFolio's</h3>
          <p style={{ padding: '5px' }}>
            Here Are some of Our Recent Project, that we served to our clients
            and now they are able to start their businesses and branding{' '}
          </p>
        </div>
        <div className='flex-container'>
          {loading ? (
            <Spinner />
          ) : (
            portfolios.map(portfolio => (
              <Portfolio key={portfolio._id} portfolio={portfolio} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
