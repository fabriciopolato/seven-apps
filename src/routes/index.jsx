import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { Home } from '../pages';
import { NotFound } from '../pages/NotFound';

export const Routes = () => {

  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}