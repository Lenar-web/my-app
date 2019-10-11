import React from 'react';

export const withSuspense = (Component) => {

  let SuspenseComponent = (props) => {
    return(<React.Suspense fallback={<div>Loading...</div>}><Component {...props} /></React.Suspense>)
  }

  return SuspenseComponent
}