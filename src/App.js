// @flow

import React from 'react';

type Props = {
	jobTitle: string
};

const App = ({ jobTitle }: Props) => (
	<h1>Hello I am a {jobTitle}</h1>
);

export default App;
