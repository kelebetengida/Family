import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import AwesomeSelect from '../components/AwesomeSelect';
import Auth from '../utils/auth';
import {QUERY_PROFESSIONS, QUERY_INTERESTS} from '../utils/queries';
import { useQuery, gql } from '@apollo/client';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    organization:'',
    location:''    
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log("formState as we send",formState)
    var newFormState = Object.assign({},formState);
    console.log("newFormState as we send", newFormState);
    /* eslint-disable no-unused-expressions */
    newFormState[name] = value
    setFormState(newFormState);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    const res = Object.assign({}, formState)
    try {
      const { data } = await addUser({
        variables: res,
      });
      console.log(data);
      debugger;
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const interestQueryReply = useQuery(QUERY_INTERESTS);
  let interests = interestQueryReply.data?.interests || []; 
  if  (interestQueryReply.data){
    interests = interests.map(interest=> {
      let newInterest = {
        id: interest._id,
        name: interest.interestOption
      }
      return newInterest;
    });
  }
  

  const professionsQueryReply = useQuery(QUERY_PROFESSIONS);
  let professions = professionsQueryReply.data?.professions || [];
  if (professionsQueryReply.data) {
    professions = professions.map(profession => {
      let newProfession = {
        id: profession._id,
        name: profession.professionOption
      }
      return newProfession;
    });
  }

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} >
                <input 
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Organization"
                  name="organization"
                  type="organization"
                  value={formState.organization}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Location"
                  name="location"
                  type="location"
                  value={formState.location}
                  onChange={handleChange}
                />
          {professionsQueryReply.loading ? (
            <div>Loading...</div>
          ) : (
            <AwesomeSelect onChange={handleChange} name="Profession" options={professions}/> 
          )}
               
                {interestQueryReply.loading ? (
            <div>Loading...</div>
          ) : (
            <AwesomeSelect onChange={handleChange} name="Interest" options={interests}/>
          )}
               

                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
