import { RouterProvider } from 'react-router-dom';
import MainRouter from './routers/MainRouter';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <RouterProvider router={MainRouter} />;
}

export default App;
