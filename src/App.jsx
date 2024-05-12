import { RouterProvider } from 'react-router-dom';
import MainRouter from './routers/MainRouter';

function App() {
  return <RouterProvider router={MainRouter} />;
}

export default App;
