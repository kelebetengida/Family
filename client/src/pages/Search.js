import React from 'react';
import { useQuery } from '@apollo/client';

const Search = () => {
  return (
    <main>
      {/* <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {' '}
          This is our search page.
        </div>
      </div> */}

      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Matched Users</h5>
            <p class="card-text">
              Insert JSX in here to render user's whose interest match the
              interest selected.
            </p>
            <a href="#" class="btn btn-primary">
              Submit
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Search;
