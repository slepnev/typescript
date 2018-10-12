import * as React from 'react';

interface HomeProps {
  name: string;
  age: number
}

export class Home extends React.Component<HomeProps, {}>{
  render() {
    const {name, age} = this.props;

    return (
      <div>
        Hello there, {name}, you are {age}, right?
      </div>
    );
  }
}