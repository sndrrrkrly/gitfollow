import React, { Component } from 'react';
import { MainLayout } from './components/layouts/MainLayout';

export default class App extends Component {
     constructor (props) {
          super(props);
          this.state = {
               user: 'chubin',
               target: 'JedWatson',
               doesFollow: ''
          };

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
     };

     async handleSubmit (e) {
          let { user, target, doesFollow } = this.state;
          e.preventDefault();

          if (!user || !target) {
               return;
          };
          
          const endpoint = `https://api.github.com/users/${user}/following/${target}`;
          const response = await fetch(endpoint, {
               headers: {
                    'Accept': 'application/vnd.github.v3+json'
               }
          });
          
          doesFollow = response.status === 204 ? true : false;

          if (doesFollow) {
               console.log(`${user} follows ${target}!`);
          };
     };

     handleChange (e) {
          this.setState({
               [e.target.name] : e.target.value
          });
     };

     render() {
          return (
               <MainLayout>
                    <>
                         <div className = 'p-6 text-center'>
                              <h1 className = 'text-3xl font-bold'>
                                   gitfollow
                              </h1>

                              <p className = 'text-lg font-normal text-gray-700'>
                                   <strong>{ this.state.user }</strong> follows <strong>{ this.state.target }</strong> ?
                              </p>

                              <p className = 'text-base font-light text-gray-400'>
                                   { this.state.doesFollow ? `🎉 Yes, ${this.state.user} follows ${this.state.target}!` : 'asd' }
                              </p>

                              <form onSubmit = { this.handleSubmit } className = 'mt-6 flex flex-grow-0 space-x-6'>
                                   <input
                                        className = 'p-2 rounded-8 bg-gray-100 text-black text-center'
                                        type = 'text'
                                        name = 'user'
                                        placeholder = 'sndrkrly'
                                        value = { this.state.user }
                                        onChange = { this.handleChange }
                                   />

                                   <p className = 'mb-2 mt-2 font-bold uppercase'>
                                        follows
                                   </p>

                                   <input
                                        className = 'p-2 rounded-8 bg-gray-100 text-black text-center'
                                        type = 'text'
                                        name = 'target'
                                        placeholder = 'yyx990803'
                                        value = { this.state.target }
                                        onChange = { this.handleChange }
                                   />

                                   <input
                                        className = 'transition duration-500 ease-in-out p-2 bg-gray-500 hover:bg-gray-800 rounded-8 text-white text-xs cursor-pointer' 
                                        type = 'submit'
                                        value = 'Check'
                                   />
                              </form>
                         </div>
                    </>
               </MainLayout>
          )
     };
};